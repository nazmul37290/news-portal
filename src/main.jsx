import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Layout from './layout/Layout.jsx'
import ArticleDetails from './Pages/ArticleDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/articleDetails",
        element:<ArticleDetails></ArticleDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

      
    </RouterProvider>
  </React.StrictMode>,
)
