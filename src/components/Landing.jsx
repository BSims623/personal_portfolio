import React from 'react'
import landingImage from '../assets/images/landing-image.jpg'

const Landing = ({ landingRef }) => {
    return (
        <section ref={landingRef} id='Landing' className='d-flex justify-content-center align-items-end pb-4 container-fluid' style={{ width: '100vw', height: '94vh', backgroundImage: `url(${landingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="d-sm-flex">
                <h1 className="text-light">Brian Sims,</h1>
                <h1 className="text-light ms-sm-2">Software Developer</h1>
            </div>
        </section>
    )
}

export default Landing