import React from 'react'

const ContactTwo = ({ contactRef }) => {
    return (
        <section ref={contactRef} className='border-top border-warning py-5 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-light'>Contact</h1>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex align-items-center"><i className="fa-solid fa-envelope text-warning me-2"></i><a href="mailto:briansims326@gmail.com" className="text-warning">briansims326@gmail.com</a></div>
                {/* <div className="d-flex align-items-center"><i className="fa-solid fa-phone text-warning me-2"></i><a href="" className="text-warning">(805)835-1764</a></div> */}
                <div className="d-flex align-items-center"><i className="fa-brands fa-square-github text-warning me-2"></i><a href="https://github.com/BSims623" className="text-warning">Github</a></div>
                <div className="d-flex align-items-center"><i className="fa-brands fa-linkedin text-warning me-2"></i><a href="https://www.linkedin.com/in/brian-sims-210747293/" className="text-warning">linkedIn</a></div>
            </div>
        </section>
    )
}

export default ContactTwo