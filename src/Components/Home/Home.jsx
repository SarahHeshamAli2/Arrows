import React, { useEffect } from 'react'
import OurServices from '../OurServices/OurServices'
import OurStory from '../OurStory/OurStory'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import MeetTheTeam from '../MeetTheTeam/MeetTheTeam'
import ContactUs from '../ContactUs/ContactUs'
import "./loading.css"
import $ from "jquery"


export default function Home() {
  $(document).ready (()=>{
    $(".spind").slideUp(1000,function(){
      $("body").css("overflow","auto")
    })
  
  })

 return <>
  <div className=" justify-content-center align-items-center vh-100  position-fixed top-0 end-0 start-0 bottom-0 spind">
<span class="loader "></span>

</div>
 <header >
    
    <div className="headerContent  ">
        
    <div className="headerLayer d-flex justify-content-center align-items-center ">
        <p className='h1 headerP w-50 ' >OUR PROMISE IS TO MAKE IT HAPPEN... LET’S GET GOING.</p>
    </div>
    </div>
 </header>
 <OurServices/>
   <OurStory/>
   <WhoWeAre/>
   <MeetTheTeam/>
   <ContactUs/>
 </>
}
