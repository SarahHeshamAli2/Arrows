import React, { useEffect } from 'react'
import $ from "jquery"
import { Link } from 'react-router-dom';

export default function Navbar() {
function toggleActiveClass() {
    $(".nav-link").click(function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
     });
}
  
useEffect(()=>{
 toggleActiveClass()
},[])
  return <>
  
<div id="topheader">
<nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
    <Link className="navbar-brand" href="#"><img src={require("../../images/cropped-Screen-Shot-2017-07-18-at-7.30.30-PM-6.png")} alt="websiteLogo" style={{width:"80" , height:"65px"}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active borderBottom" aria-current="page">Home</Link>
        </li>
 
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu navDropDown">
            <li><Link className="dropdown-item">Management Consultancy</Link></li>
            <li><Link className="dropdown-item">HR Consultancy</Link></li>
            <li><Link className="dropdown-item">Social Media Management</Link></li>
            <li><Link className="dropdown-item">Digital Transformation</Link></li>
            <li><Link className="dropdown-item">Business Development</Link></li>
            <li><Link className="dropdown-item">Business Process Outsourcing</Link></li>
            <li><Link className="dropdown-item">Customer Experience Consultancy</Link></li>
            <li><Link className="dropdown-item">Reporting and Analytics</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page">Vision and Mission</Link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
  
</div>

  </>
}
