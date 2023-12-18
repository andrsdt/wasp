import { hashPassword, sign, verify } from '../core/auth.js'
import AuthError from '../core/AuthError.js'
import HttpError from '../core/HttpError.js'
import prisma from '../dbClient.js'
import { sleep } from '../utils.js'
import { type User, type Auth } from '../entities/index.js'
import { Prisma } from '@prisma/client';

import { PASSWORD_FIELD, throwValidationError } from './validation.js'


import { defineAdditionalSignupFields, type PossibleAdditionalSignupFields } from './providers/types.js'
const _waspAdditionalSignupFieldsConfig = {} as ReturnType<typeof defineAdditionalSignupFields>

export type EmailProviderData = {
  password: string;
  isEmailVerified: boolean;
  emailVerificationSentAt: Date | null;
  passwordResetSentAt: Date | null;
}

export type UsernameProviderData = {
  password: string;
}

export type OAuthProviderData = {}

export type PossibleProviderData = {
  email: EmailProviderData;
  username: UsernameProviderData;
  google: OAuthProviderData;
  github: OAuthProviderData;
}

type ProviderName = keyof PossibleProviderData

export const contextWithUserEntity = {
  entities: {
    User: prisma.user
  }
}

export const authConfig = {
  failureRedirectPath: "/login",
  successRedirectPath: "/",
}

export async function findAuthIdentity(providerName: ProviderName, providerUserId: string) {
  return prisma.authIdentity.findUnique({
    where: {
      providerName_providerUserId: {
        providerName,
        providerUserId: providerUserId.toLowerCase(),
      }
    }
  });
}

export async function updateAuthIdentityProviderData<PN extends ProviderName>(
  providerName: string,
  providerUserId: string,
  existingProviderData: PossibleProviderData[PN],
  providerDataUpdates: Partial<PossibleProviderData[PN]>,
) {
  // We are doing the sanitization here only on updates to avoid
  // hashing the password multiple times.
  const sanitizedProviderDataUpdates = await sanitizeProviderData(providerDataUpdates);
  const newProviderData = {
    ...existingProviderData,
    ...sanitizedProviderDataUpdates,
  }
  const serializedProviderData = await serializeProviderData<PN>(newProviderData);
  return prisma.authIdentity.update({
    where: {
      providerName_providerUserId: {
        providerName,
        providerUserId: providerUserId.toLowerCase(),
      }
    },
    data: { providerData: serializedProviderData },
  });
}

export async function findAuthWithUserBy(where: Prisma.AuthWhereInput) {
  return prisma.auth.findFirst({ where, include: { user: true }});
}

export async function createAuthWithUser(
  providerName: string,
  providerUserId: string,
  serializedProviderData?: string,
  userFields?: PossibleAdditionalSignupFields,
) {
  try {
    return await prisma.auth.create({
      data: {
        identities: {
            create: {
                providerName,
                providerUserId: providerUserId.toLowerCase(),
                providerData: serializedProviderData,
            },
        },
        user: {
          create: {
            // Using any here to prevent type errors when userFields are not
            // defined. We want Prisma to throw an error in that case.
            ...(userFields ?? {} as any),
          }
        }
      }
    })
  } catch (e) {
    rethrowPossibleAuthError(e);
  }
}

export async function deleteUserByAuthId(authId: string) {
  try {
    return await prisma.user.deleteMany({ where: { auth: {
      id: authId,
    } } })
  } catch (e) {
    rethrowPossibleAuthError(e);
  }
}

export async function createAuthToken(
  userId: User['id']
): Promise<string> {
  return sign(userId);
}

export async function verifyToken(token: string): Promise<{ id: any }> {
  return verify(token);
}

// If an user exists, we don't want to leak information
// about it. Pretending that we're doing some work
// will make it harder for an attacker to determine
// if a user exists or not.
// NOTE: Attacker measuring time to response can still determine
// if a user exists or not. We'll be able to avoid it when 
// we implement e-mail sending via jobs.
export async function doFakeWork() {
  const timeToWork = Math.floor(Math.random() * 1000) + 1000;
  return sleep(timeToWork);
}

export function rethrowPossibleAuthError(e: unknown): void {
  if (e instanceof AuthError) {
    throwValidationError(e.message);
  }
  
  // Prisma code P2002 is for unique constraint violations.
  if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
    throw new HttpError(422, 'Save failed', {
      message: `user with the same identity already exists`,
    })
  }

  if (e instanceof Prisma.PrismaClientValidationError) {
    // NOTE: Logging the error since this usually means that there are
    // required fields missing in the request, we want the developer
    // to know about it.
    console.error(e)
    throw new HttpError(422, 'Save failed', {
      message: 'there was a database error'
    })
  }

  // Prisma code P2021 is for missing table errors.
  if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2021') {
    // NOTE: Logging the error since this usually means that the database
    // migrations weren't run, we want the developer to know about it.
    console.error(e)
    console.info('🐝 This error can happen if you did\'t run the database migrations.')
    throw new HttpError(500, 'Save failed', {
      message: `there was a database error`,
    })
  }
  
  // NOTE: Giving extra info to the developer since we don't send
  // the error message to the client.
  console.error(e)
  throw new HttpError(500)
}

export async function validateAndGetAdditionalFields(data: {
  [key: string]: unknown
}) {
  const {
    password: _password,
    ...sanitizedData
  } = data;
  const result: Record<string, any> = {};
  for (const [field, getFieldValue] of Object.entries(_waspAdditionalSignupFieldsConfig)) {
    try {
      const value = await getFieldValue(sanitizedData)
      result[field] = value
    } catch (e) {
      throwValidationError(e.message)
    }
  }
  return result;
}

export function deserializeAndSanitizeProviderData<PN extends ProviderName>(
  providerData: string,
  { shouldRemovePasswordField = false }: { shouldRemovePasswordField?: boolean } = {},
): PossibleProviderData[PN] {
  // NOTE: We are letting JSON.parse throw an error if the providerData is not valid JSON.
  let data = JSON.parse(providerData) as PossibleProviderData[PN];

  if (providerDataHasPasswordField(data) && shouldRemovePasswordField) {
    delete data[PASSWORD_FIELD];
  }

  return data;
}

export async function sanitizeAndSerializeProviderData<PN extends ProviderName>(providerData: PossibleProviderData[PN]) {
  return serializeProviderData(
    await sanitizeProviderData(providerData)
  );
}

async function serializeProviderData<PN extends ProviderName>(providerData: PossibleProviderData[PN]) {
  return JSON.stringify(providerData);
}

async function sanitizeProviderData<PN extends ProviderName>(providerData: PossibleProviderData[PN]) {
  // NOTE: doing a shallow copy here as we expect the providerData to be
  // a flat object. If it's not, we'll have to do a deep copy.
  const data = {
    ...providerData,
  };
  if (providerDataHasPasswordField(data)) {
    data[PASSWORD_FIELD] = await hashPassword(data[PASSWORD_FIELD]);
  }

  return data;
}


function providerDataHasPasswordField(providerData: PossibleProviderData[keyof PossibleProviderData]): providerData is { password: string } {
  return PASSWORD_FIELD in providerData;
}
