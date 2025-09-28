import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <div className='w-screen h-screen dark:bg-neutral-900 bg-neutral-200 overflow-scroll custom-scroll'>
     <RouterProvider router={router} /> 
    </div>
  )
}

export default App
