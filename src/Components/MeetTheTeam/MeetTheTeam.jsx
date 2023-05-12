import React from 'react'

export default function MeetTheTeam() {
return <>
    <div className="meet bg-white text-center dark-text py-5">
        <div className="container">
            <h2 className='my-2'>MEET THE TEAM</h2>
            <figure className='profilePicture position-relative my-4'>
                <img src={require("../../images/DSC_0178-2-002-150x150.jpg")} alt="" className='w-100 h-100' />
                <div className="profileLayer d-flex justify-content-center align-items-center ">
        <p className='profileP '>
        Hany Elkholy, founder of Arrows ICC is a leader with more than 25 years of experience holding different positions within various industries..</p>
                </div>
            </figure>
        <div className='my-2'>
        <h4>HANY ELKHOLY</h4>
            <div className='redBrdr'></div>
        </div>
            <span>Founder</span>
            <div className="socialIcons fs-5 cursor-pointer">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter px-3"></i>
            <i className="fa-brands fa-behance"></i>
            <i className="fa-brands fa-dribbble px-3"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
    </div>




</>
}
