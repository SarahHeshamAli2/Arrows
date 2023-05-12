import React from 'react'
import { delay, motion } from "framer-motion"

export default function OurClients() {
return <>

<div className='ourClients position-relative my-5  py-4 '> 
    <h4 className='ouP text-center'>Our Clients</h4>

</div>
<motion.div viewport={{once:true}} whileInView={{x:0 , opacity:1}} initial={{x:150 , opacity:0}} transition={{ duration: 1.5, type: "tween" }} className="ourClientsImgs w-75 m-auto my-5 ">
        <span>
        <img src={require("../../images/cust1-e1628861795271.png")} alt="" />

        </span>
        <span>
        <img src={require("../../images/cust-2-e1628861862123.jpg")} alt="" />

        </span>
        <span>
        <img src={require("../../images/cust3-e1628861910199.png")} alt="" />

        </span>
        <span>        <img src={require("../../images/cust4-e1628861948288.png")} alt="" />
</span>
<span>
    
<img src={require("../../images/cust5-e1628861997210.jpg")} alt="" />

    </span>        

    <span>
    <img src={require("../../images/cust7-e1628862114256.png")} alt="" />
    </span>
    <span>
    <img src={require("../../images/cust8-2-e1628862281755.jpg")} alt="" />

    </span>
    <span>
    <img src={require("../../images/logo-medrite-2.jpg")} alt="" />

    </span>
    <span>
    <img src={require("../../images/AIT.jpg")} alt="" />

    </span>
    <span>
    <img src={require("../../images/skyfive-arabia-logo-300x76.png")} alt="" />

    </span>
    </motion.div>


</>
}
