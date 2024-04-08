import React from 'react'

const ContactTwo = ({ contactRef }) => {
    return (
        <section ref={contactRef} className='border-top border-warning py-5 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-light'>Contact</h1>
            <div className="mt-2  d-flex justify-content-center">
                <a href="mailto:briansims326@gmail.com"><div className="mx-3 rounded-circle contact-link border border-warning d-flex justify-content-center align-items-center"><i className="fa-solid fa-envelope"></i></div></a>
                <a href="https://github.com/BSims623" target='_blank'><div className="mx-3 rounded-circle contact-link border border-warning d-flex justify-content-center align-items-center"><i className="fa-brands fa-github"></i></div></a>
                <a href="https://www.linkedin.com/in/brian-sims-210747293/" target='_blank'><div className="mx-3 rounded-circle contact-link border border-warning d-flex justify-content-center align-items-center"><i className="fa-brands fa-linkedin-in"></i></div></a>
                {/* <div className="d-flex align-items-center"><i className="fa-brands fa-square-github text-warning me-2"></i><a href="https://github.com/BSims623" className="text-warning">Github</a></div>
                <div className="d-flex align-items-center"><i className="fa-brands fa-linkedin text-warning me-2"></i><a href="https://www.linkedin.com/in/brian-sims-210747293/" className="text-warning">linkedIn</a></div> */}
            </div>
        </section>
    )
}

export default ContactTwo