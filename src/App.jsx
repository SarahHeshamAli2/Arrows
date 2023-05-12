import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import ContactTab from './Components/ContactTab/ContactTab'
import AboutUs from './Components/AboutUs/AboutUs'
import Vission from './Components/Vission/Vission'
import FAQ from './Components/FAQ/FAQ'
import Management from './Components/Management/Management'
import HR from './Components/HR/HR'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import Digital from './Components/Digital/Digital'
import BussDev from './Components/BussDev/BussDev'
import BussProcess from './Components/BussProcess/BussProcess'
import CustomerExp from './Components/CustomerExp/CustomerExp'
import Report from './Components/Report/Report'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'

export default function App() {

  const router = createBrowserRouter([{path:"",element:<Layout/>,children:[{path:"home",element:<Home/>},{index:true , element:<Home/>},
  {path:"contact-us",element:<ContactTab/>},
  {path:"about-us",element:<AboutUs/>},
  {path:"vision",element:<Vission/>},
  {path:"FAQ",element:<FAQ/>},
  {path:"managementConsultancy",element:<Management/>},
  {path:"HRConsultancy",element:<HR/>},
  {path:"socialMediaManagement",element:<SocialMedia/>},
  {path:"DigitalTransformation",element:<Digital/>},
  {path:"BusinessDevelopment",element:<BussDev/>},
  {path:"BusinessProcess",element:<BussProcess/>},
  {path:"CustomerExperience",element:<CustomerExp/>},
  {path:"reportAndAnalytics",element:<Report/>},



]}])
  return <RouterProvider router={router}>





  </RouterProvider>
  
  
  
  
}
