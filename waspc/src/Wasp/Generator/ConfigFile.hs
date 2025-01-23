module Wasp.Generator.ConfigFile
  ( isTailwindUsed,
    configFileRelocationMap,
  )
where

import Data.List (find)
import Data.Map (fromList)
import Data.Maybe (isJust)
import StrongPath (File', Path', Rel, castRel, relfile, (</>))
import qualified Wasp.AppSpec.ConfigFile as CF
import Wasp.ConfigFile (ConfigFileRelocationMap)
import Wasp.Generator.Common (ProjectRootDir)
import Wasp.Generator.WebAppGenerator.Common (webAppRootDirInProjectRootDir)
import Wasp.Project.Common (WaspProjectDir)

tailwindConfigFile :: Path' (Rel WaspProjectDir) File'
tailwindConfigFile = [relfile|tailwind.config.cjs|]

postcssConfigFile :: Path' (Rel WaspProjectDir) File'
postcssConfigFile = [relfile|postcss.config.cjs|]

asProjectRootDirConfigFile :: Path' (Rel WaspProjectDir) File' -> Path' (Rel ProjectRootDir) File'
asProjectRootDirConfigFile = (webAppRootDirInProjectRootDir </>) . castRel

-- | Helper that determines if Tailwind used. For our purposes, we allow
-- developers to opt-in by creating both a tailwind config file and
-- postcss config file in their wasp project dir.
isTailwindUsed :: [CF.ConfigFileRelocator] -> Bool
isTailwindUsed configFileRelocators =
  doesConfigFileExist tailwindConfigFile
    && doesConfigFileExist postcssConfigFile
  where
    doesConfigFileExist :: Path' (Rel WaspProjectDir) File' -> Bool
    doesConfigFileExist file =
      isJust $ find ((==) file . CF._pathInWaspProjectDir) configFileRelocators

-- Establishes the mapping of what config files to copy and where from/to.
-- NOTE: In the future, we could allow devs to configure what files we look for and where we copy them.
configFileRelocationMap :: ConfigFileRelocationMap
configFileRelocationMap =
  fromList
    [ (tailwindConfigFile, asProjectRootDirConfigFile tailwindConfigFile),
      (postcssConfigFile, asProjectRootDirConfigFile postcssConfigFile)
    ]
