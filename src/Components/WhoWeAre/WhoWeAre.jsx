import React from 'react'
import "./custom.css"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { delay, motion } from "framer-motion"
import OurClients from '../OurClients/OurClients'
export default function WhoWeAre() {
    var x = window.matchMedia("(max-width: 900px)")

return <>
<div className="who py-5">
    <div className="container text-white ">
       <div className='text-center'>
       <h2 >WHO WE ARE</h2>
        <p>A team of professionals with different passions and strengths</p>
       </div>
        <div className="row align-items-center py-4 text-center">
            {x.matches ? <div className="col-md-4 px-0">
            <div className="innerWho w-75 m-auto">
                We believe that your business success is our success
                </div>

            </div> :    <motion.div className="col-md-4 px-0" viewport={{once:true}} whileInView={{x:0 , opacity:1}} initial={{x:-300 , opacity:0}} transition={{ duration: 1.5, type: "tween" }}>
                <div className="innerWho w-75 m-auto">
                We believe that your business success is our success
                </div>
            </motion.div>}


            {x.matches ? <div className="col-md-4 px-0 mx-0">
            <div className="innerP w-75 m-auto">
                <p>
                Arrows ICC is a UK based company that specializes in Management Consultancy, Digital Transformation, Customer Care & Customer Experience Consultancy. We are experts in structuring the perfect BPO model for your business. At Arrows ICC we believe that every Interaction with your customer is an opportunity to grow your business. We believe in partnership, so your business success is our success. We provide practical solutions from our vast experience to match your needs. We will enable you to design and manage your customer support functions, so you can focus on growing your business. We have the knowhow and the on-ground experience to achieve the best services for different industries.
                </p>
               </div>

            </div>:        <motion.div viewport={{once:true}} className="col-md-4 px-0 mx-0"   initial={{y:200 }}
    whileInView={{y:0}}
    transition={{ duration: 1, type: "tween" }}>
               <div className="innerP w-75 m-auto">
                <p>
                Arrows ICC is a UK based company that specializes in Management Consultancy, Digital Transformation, Customer Care & Customer Experience Consultancy. We are experts in structuring the perfect BPO model for your business. At Arrows ICC we believe that every Interaction with your customer is an opportunity to grow your business. We believe in partnership, so your business success is our success. We provide practical solutions from our vast experience to match your needs. We will enable you to design and manage your customer support functions, so you can focus on growing your business. We have the knowhow and the on-ground experience to achieve the best services for different industries.
                </p>
               </div>
            </motion.div>}

            {
                x.matches ? <div className="col-md-4">
                      <div className="d-flex  align-items-center ">
                <CircularProgress value={25} color='#e96656' thickness='8px' size='100px'>
  <CircularProgressLabel >25%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>DEFINITION</h5>
    <p className='wP w-75 m-auto'>What problem are we trying to solve?</p>
    </div>

                </div>
                <div className="d-flex my-4   align-items-center">
                <CircularProgress value={50} color='#34d293' thickness='8px' size='100px'>
  <CircularProgressLabel >50%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>DATA GATHERING AND ANALYSIS</h5>
    <p className='wP w-75 m-auto'>Find out everything we can about the your business</p>
    </div>

                </div>
                <div className="d-flex my-4">
                <CircularProgress value={75} color='#3ab0e2' thickness='8px' size='100px'>
  <CircularProgressLabel >75%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>ADVICE</h5>
    <p className='wP w-75 m-auto'>What is the best solution according to our data and expertise</p>
    </div>

                </div>
                <div className="d-flex ">
                <CircularProgress value={100} color='#f7d861' thickness='8px' size='100px'>
  <CircularProgressLabel >100%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>IMPLEMENTATION</h5>
    <p className='wP w-75 m-auto'>Enact positive change based on the recommendations</p>
    </div>

                </div>
                </div> :    <motion.div viewport={{once:true}} whileInView={{x:0 , opacity:1}} initial={{x:60, opacity:0}} transition={{ duration: 1.5, type: "tween" }} className="col-md-4">
                <div className="d-flex  align-items-center ">
                <CircularProgress value={25} color='#e96656' thickness='8px' size='100px'>
  <CircularProgressLabel >25%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>DEFINITION</h5>
    <p className='wP w-75 m-auto'>What problem are we trying to solve?</p>
    </div>

                </div>
                <div className="d-flex my-4   align-items-center">
                <CircularProgress value={50} color='#34d293' thickness='8px' size='100px'>
  <CircularProgressLabel >50%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>DATA GATHERING AND ANALYSIS</h5>
    <p className='wP w-75 m-auto'>Find out everything we can about the your business</p>
    </div>

                </div>
                <div className="d-flex my-4">
                <CircularProgress value={75} color='#3ab0e2' thickness='8px' size='100px'>
  <CircularProgressLabel >75%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>ADVICE</h5>
    <p className='wP w-75 m-auto'>What is the best solution according to our data and expertise</p>
    </div>

                </div>
                <div className="d-flex ">
                <CircularProgress value={100} color='#f7d861' thickness='8px' size='100px'>
  <CircularProgressLabel >100%</CircularProgressLabel>

</CircularProgress>
    <div>
    <h5>IMPLEMENTATION</h5>
    <p className='wP w-75 m-auto'>Enact positive change based on the recommendations</p>
    </div>

                </div>
            </motion.div>
            }
        
    
        
        </div>
        <OurClients/>
    </div>
</div>

</>
}
