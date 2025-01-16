{{={= =}=}}
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'

import { router } from './router'
import {
  initializeQueryClient,
  queryClientInitialized,
} from 'wasp/client/operations'

{=# setupFn.isDefined =}
{=& setupFn.importStatement =}
{=/ setupFn.isDefined =}

{=# areWebSocketsUsed =}
import { WebSocketProvider } from 'wasp/client/webSocket/WebSocketProvider'
{=/ areWebSocketsUsed =}


const anyFn = (x) => x + x // implicit any, must error
anyFn(1)
const x = "Jako dobar" // unused local, must error

startApp()

async function startApp() {
  {=# setupFn.isDefined =}
  await {= setupFn.importIdentifier =}()
  {=/ setupFn.isDefined =}
  initializeQueryClient()

  await render()
}

async function render() {
  const queryClient = await queryClientInitialized
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {=# areWebSocketsUsed =}
        <WebSocketProvider>
          {router}
        </WebSocketProvider>
        {=/ areWebSocketsUsed =}
        {=^ areWebSocketsUsed =}
        {router}
        {=/ areWebSocketsUsed =}
      </QueryClientProvider>
    </React.StrictMode>
  )
}
