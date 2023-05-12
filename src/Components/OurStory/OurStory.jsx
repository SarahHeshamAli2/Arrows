import React from 'react'
import { delay, motion } from "framer-motion"

export default function OurStory() {
    var x = window.matchMedia("(max-width: 900px)")

return <>
<div className='ourStory py-5 text-center text-white'>
    {
        x.matches ? <div className="container">
                    <h2>Our Story</h2>
                    <p className='ourStoryP w-75 my-5 m-auto'>Arrows ICC Founder and Managing Director Hany Elkholy is an entrepreneur holding a master’s degree in international business and a bachelor degree in computer and information systems. Hany is a Business Executive with +25 years of experience across a broad range of strategic and operational management successful assignments mainly on the scope of Customer Care operation management, HR transformation, Strategic transformation, Program management and Strategic Organization Development in leading organizations within the mobile telecommunications, IT, and Banking sectors. Mr. Elkholy demonstrated success record consistently delivering against strategic objectives and key business metrics, including Cost Optimization, Employees Engagement and Development, Organization Design & Development, Customer Base Growth, Revenue targets, Effectiveness, Customer Experience, Retention, internal and external Customer Value Management and Risk Management. With a strong passion for exceptional customer experience and service, Hany ensures the service we provide is always unparalleled</p>



        </div> :    <motion.div viewport={{once:true}} whileInView={{x:0 , opacity:1}} initial={{x:-100 , opacity:0}} transition={{ duration: 1.5, type: "tween" }} className="container">
        <h2>Our Story</h2>
        <p className='ourStoryP w-75 my-5 m-auto'>Arrows ICC Founder and Managing Director Hany Elkholy is an entrepreneur holding a master’s degree in international business and a bachelor degree in computer and information systems. Hany is a Business Executive with +25 years of experience across a broad range of strategic and operational management successful assignments mainly on the scope of Customer Care operation management, HR transformation, Strategic transformation, Program management and Strategic Organization Development in leading organizations within the mobile telecommunications, IT, and Banking sectors. Mr. Elkholy demonstrated success record consistently delivering against strategic objectives and key business metrics, including Cost Optimization, Employees Engagement and Development, Organization Design & Development, Customer Base Growth, Revenue targets, Effectiveness, Customer Experience, Retention, internal and external Customer Value Management and Risk Management. With a strong passion for exceptional customer experience and service, Hany ensures the service we provide is always unparalleled</p>
    </motion.div>
    }

</div>


</>
}
