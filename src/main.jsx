import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider client={queryClient}>
<AuthProviders>
<RouterProvider router={routes}>
<App />

</RouterProvider>
</AuthProviders>
</QueryClientProvider>
  </React.StrictMode>,
)
