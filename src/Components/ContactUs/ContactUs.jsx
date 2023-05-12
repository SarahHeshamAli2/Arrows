import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import $ from "jquery"
import { useFormik } from 'formik'
import * as Yup from "yup"


import "./contactUs.css"

export default function ContactUs() {
    


    const [loading, setloading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        setloading(true)
      e.preventDefault();
        
      emailjs.sendForm('service_1xczq9c', 'template_fr7iqqg', form.current, 'Q2KG0C2ewXdBTlUGQ')
     
        .then((result) => {
          
            console.log(result.text);
            console.log("succ");
            setloading(false)
            $(".succMsg").fadeIn(1000,function(){
                setTimeout(() => {
                    $(".succMsg").fadeOut(1000)
                }, 1000);
            })

        }, (error) => {
            setloading(false)
            console.log(error.text);
            $(".failMsg").fadeIn(1000,function(){
                setTimeout(() => {
                    $(".failMsg").fadeOut(1000)
                }, 1000);
            })
        });
    };
 return <>
 <div className="contact text-white text-center py-5">
    <div className="container">
        <h2 className='contactUs py-3 rounded'>Contact Us</h2>
            <div className='w-75 m-auto py-5'>
            <form  ref={form} onSubmit={sendEmail}>
            <div className="inputs  justify-content-center">
            <input type="text"name="user_name" id="uName" placeholder='Enter Your Name'  className='form-control  ' required />
        <input type="email"  name="user_email" id="" placeholder='Enter Your Email'  className='form-control userEmail'  required/>
        <input type="text"  name="user_subject" id="" placeholder='Subject'  className='form-control '/>
            </div>
            <textarea name="message" id="" cols="30" rows="10" className='form-control my-3 ' placeholder='Enter your message here' required></textarea>

        {loading ?        <button  type="button"  className='btn formBtn btn-lg float-end'><i className="fa-solid fa-spinner fa-spin"></i></button>
:        <button type="submit" value="Send" className='btn formBtn btn-lg float-end'>Send Message</button>
}

        
        </form>
        <div className="alert alert-success succMsg" style={{display:"none"}}>
                Your Message is sent !
            </div>
        <div className="alert alert-danger failMsg" style={{display:"none"}}>
                An error has occured , please try again later
            </div>
            </div>
    </div>
 </div>
 
 
 </>
}
