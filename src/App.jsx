import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'

export default function App() {
  const router = createBrowserRouter([{path:"",element:<Layout/>,children:[{path:"home",element:<Home/>}]}])
  return <RouterProvider router={router}>





  </RouterProvider>
  
  
  
  
}
