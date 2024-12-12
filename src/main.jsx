// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Root from './Root.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// // Style imports
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router = {router} />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
// Style imports
import './index.css'

const router = createHashRouter([
  {
    path: '/*',  // Use '/*' to catch all routes
    element: <Root />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)