import React from 'react'
import FixedComp from '../FixedComp/FixedComp'

export default function AboutUs() {
return <>

<div className="about bg-white py-5 ">
    <div className="container ">
    <div className="row p-5">
        <div className="col-md-8">
            <div className="in">
                <h1 className='aboutUs position-relative contP'>About Us</h1>
                <img src={require("../../images/business-brainstorming-graph-chart-report-data-concept.jpg")} className='w-75 my-5' alt="" />
                <h4>Our Approach</h4>
                <p>We believe in quality and simplicity so we will make you ahead of competitors and achieve your strategic goals the simplest way.</p>
                <p>We work with businesses to improve their performance by providing expert advice to solve problems and encourage growth.</p>
                <h4>Our Story</h4>
                <p>We are growing company with +25 years of individual experience in management consultancy, digital transformation, business development and customer experience consultancy.</p>
                <h4>
                Industries we serve

                </h4>
                <ul>
                    <li>Telecommunication</li>
                    <li>Banking and Financial services</li>
                    <li>Software Development</li>
                    <li>Cyber security</li>
                    <li>Retail</li>
                    <li>Insurance</li>
                    <li>Hotel and Hospitality</li>
                    <li>Real estate and constructions</li>
                </ul>
                <h4>Our Team</h4>
                <p>Our team is young enthusiastic professionals with passion for innovation and quality, lead by our founder who has +25 years of experience working with multinational organizations in different industries .</p>
                <img src={require("../../images/DSC_0813-300x300.jpg")} alt="" />
                <h6 className='my-3'>Hany ElKhouly

</h6>
<p>Founder & CEO</p>
            </div>
        </div>
        <FixedComp/>
    </div>
    </div>
</div>
</>
}
