import React from 'react'
import FixedComp from '../FixedComp/FixedComp'

export default function FAQ() {
 return <>
 
 
<div className="about bg-white py-5 ">
    <div className="container ">
    <div className="row p-5">
        <div className="col-md-8">
            <div className="in">
                <h1 className='aboutUs position-relative contP'>FAQ</h1>
                <img src={require("../../images/5672795.jpg")} className='w-50 my-5' alt="" />
                <h5>How does a management consulting project work?</h5>
                <p>As they are usually providing advice on a specific issue, the work of a strategy consultant tends to involve a lot of data analysis. A project will usually go as follows:</p>
           
                <ul>
                    <li>Problem definition – What problem are we trying to solve?
</li>
                    <li>Approach – How are we going to investigate this problem?</li>
                    <li>Data gathering – Find out everything we can about the issue</li>
                    <li>Data Analysis – What does our data show?
</li>
                    <li>Advice – What is the best solution according to our data and expertise?
</li>
                    <li>Implementation – Enact positive change based on the recommendations
</li>
                
                </ul>
                <h5>How can i book My free 45Mins consultation?</h5>
           
                <ul>
                    <li>Just send us an e-mail and our team will get back to you with the available slots for the free consultations.

</li>
                    <li>once we agree on the suitable time.
</li>
                    <li>we will send you a zoom meeting invite
</li>

                
                </ul>
                <h5>what is the cost for the Management consultation?

</h5>
                <p>After the free consultation and understanding your needs, the team will send you an initial project scope including an estimated cost for the project.</p>
                <h5>How can i pay the cost of my consultation?



</h5>
                <p>Usually it is done via bank transfer to the company account, details will be provided in the project scope and invoicing process.

</p>
           
           
            </div>
        </div>
        <FixedComp/>
    </div>
    </div>
</div>
 
 </>
}
