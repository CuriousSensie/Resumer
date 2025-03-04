import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth'
import Home from './components/AppLayout/Home'
import Dashboard from './components/AppLayout/Dashboard'

// simple routing using react-router-dom
const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
