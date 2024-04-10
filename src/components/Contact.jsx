import React from 'react'

const Contact = ({ contactRef }) => {
    return (
        <section ref={contactRef} className='contact-section py-5 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-light'>Contact</h1>
            <div className="mt-2  d-flex justify-content-center">
                <a href="mailto:briansims326@gmail.com" aria-label='Email'><div className="mx-3 rounded-circle contact-link d-flex justify-content-center align-items-center"><i className="btn-icon fa-solid fa-envelope"></i></div></a>
                <a href="https://github.com/BSims623" target='_blank' aria-label='Github'><div className="mx-3 rounded-circle contact-link d-flex justify-content-center align-items-center"><i className="btn-icon fa-brands fa-github"></i></div></a>
                <a href="https://www.linkedin.com/in/brian-sims-210747293/" target='_blank' aria-label='LinkedIn'><div className="mx-3 rounded-circle contact-link d-flex justify-content-center align-items-center"><i className="btn-icon fa-brands fa-linkedin-in"></i></div></a>
            </div>
        </section>
    )
}

export default Contact