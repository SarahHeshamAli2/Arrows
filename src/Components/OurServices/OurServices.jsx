import React, { useEffect, useState } from 'react'
import { delay, motion } from "framer-motion"
export default function OurServices() {
    

const [mover, setMove] = useState(false)

  

 return <>
    <div className="ourServices bg-white py-5">
        <div className="container">
         
            <div className="head text-center dark-text">
                <h2 className='ourServ'>OUR SERVICES</h2>
            </div>
            <div className="row g-3 my-5 p-5 cursor-pointer">
                < motion.div viewport={{once:true}}  whileInView={{x:0}} initial={{x:-100}} transition={{ duration: 0.5, type: "tween" }} className="col-md-3 managment fade-down-left">
                    <div className="innercolServ ">
                        <div className='img'></div>
                  
                        
                    </div>
                    <div className="colored m-auto  text-center">
                    <h3 className='ourServH3 mt-3  mb-3 red-border position-relative '>
                        MANAGEMENT CONSULTANCY
                        </h3>
                    </div>
                    <div className="outerCol  m-auto w-75 text-center">
                    
                    <p className='small'>

                    we help you achieve your true potential by studying, designing, and implementing innovative approaches. Our team will work with you step by step, every day to analyze your trends, execute new models and plan for your future to maximize your potential. Our approach will help you define and develop your unique sales points (USPs)
                        </p>                  
                        </div>
                </motion.div>
                <motion.div viewport={{once:true}} whileInView={{x:0}} initial={{x:-100}} transition={{ duration: 0.5, type: "tween" }} className="col-md-3 buss">
                    <div className="innercolServ ">
                        <div className='img2'></div>
                  
                        
                    </div>
                    <div className="colored m-auto  text-center">
                    <h3 className='ourServH3 mt-3  mb-3 green-border position-relative '>
                    BUSINESS DEVELOPMENT
                        </h3>
                    </div>
                    <div className="outerCol  m-auto w-75 text-center">
                    
                    <p className='small'>
                    We help you to be future-ready: By understanding your current business model, understanding your customer’s needs, we will help you model different future states, where you can always stay a step ahead of your competitors. We will help you overcome the challenges that stand in your way.

                        </p>                  
                        </div>
                </motion.div>
                <motion.div viewport={{once:true}} whileInView={{x:0}} initial={{x:-100}} transition={{ duration: 0.5, type: "tween" }} className="col-md-3 hr ">
                    <div className="innercolServ ">
                        <div className='img3'></div>
                  
                        
                    </div>
                    <div className="colored m-auto  text-center">
                    <h3 className='ourServH3 mt-4  mb-3 red-border position-relative '>
                    HR CONSULTANCY
                        </h3>
                    </div>
                    <div className="outerCol  m-auto w-100 text-center">
                    
                    <p className='small'>
                    Arrows ICC HR consultants will help you to build your HR department. Our experts will design the best organization structure that will cater for your needs. We are experts in structuring the suitable performance management of your employees. Arrows ICC can create the most suitable appraisal process that would benefit you and your employees. We work closely with the management to build your total reward system that will support you to attract and retain your people asset.

                        </p>                  
                        </div>
                </motion.div>
                <motion.div viewport={{once:true}} whileInView={{x:0}} initial={{x:-100}} transition={{ duration: 0.5, type: "tween"  } }  className="col-md-3 digital ">
                    <div className="innercolServ ">
                        <div className='img4'></div>
                  
                        
                    </div>
                    <div className="colored m-auto  text-center">
                    <h3 className='ourServH3 mt-4  mb-3 yellow-border position-relative '>
                    DIGITAL TRANSFORMATION                        </h3>
                    </div>
                    <div className="outerCol  m-auto w-75 text-center">
                    
                    <p className='small'>
                    We design your digital future; Digital transformation is a must to cope with the New Normal where your digital channels, self-services and App are mandatory, and it is not auxiliary anymore.
                        </p>                  
                        </div>
                </motion.div>
                <motion.div viewport={{once:true}} whileInView={{x:0}} initial={{x:-300}} transition={{ duration: 1.5, type: "tween" } } className="col-md-3 offset-md-3 managment  ">
                    <div className="innercolServ ">
                        <div className='img5'></div>
                  
                        
                    </div>
                    <div className="colored m-auto  text-center">
                    <h3 className='ourServH3 mt-4  mb-3 red-border position-relative '>
                    CUSTOMER EXPERIENCE CONSULTANCY                      </h3>
                    </div>
                    <div className="outerCol  m-auto w-100 text-center">
                    
                    <p className='small'>
                    Arrows ICC’s team will help you build your WOW Customer Experience and transform your business. We build the customer experience strategy from the customer’s point of view. We consider the true meaning of Customer Experience where the customers’ needs and expectations are the basis to deliver a remarkable experience.
                        </p>                  
                        </div>
                </motion.div>
                <motion.div viewport={{once:true}} whileInView={{x:0}} initial={{x:-300}} transition={{ duration: 1.5, type: "tween"  } } className="col-md-3 buss  ">
                    <div className="innercolServ ">
                        <div className='img6'></div>
                  
                        
                    </div>
                    <div className="colored m-auto  text-center">
                    <h3 className='ourServH3 mt-4  mb-3 green-border position-relative '>
                    BUSINESS PROCESS OUTSOURCING                    </h3>
                    </div>
                    <div className="outerCol  m-auto w-100 text-center">
                    
                    <p className='small'>
                    Our team has the required knowledge and experience of designing, implementing, and managing outsourced customer management that suite every business. This is to ensure your existing customers maintain a positive impression of your business and advocate for your brand.
                        </p>                  
                        </div>
                </motion.div>
            </div>
        </div>
    </div>
 
 </>
}
