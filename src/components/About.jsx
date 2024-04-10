import React from 'react'
import aboutImage from '../assets/images/about-image.jpg'

const About = ({ aboutRef }) => {

    return (
        <section ref={aboutRef} id='about-section' className='container-sm py-5 border border-warning' style={{ maxWidth: '960px', background: 'var(--primary-black)' }}>
            <h1 className='text-center text-light'>Brian Sims</h1>
            <h2 className="text-center text-light">Software Developer</h2>
            <img className='rounded-circle d-block mx-auto mt-3' style={{ objectFit: 'cover' }} width={200} height={200} src={aboutImage} alt="A picture of Brian Sims." />
            <p className='mt-3 text-light'>In December 2022 I wrote my first lines of code on freeCodeCamp and was hooked! The more I learn the funner it gets. Since then I have been working through certifications and taking dives into various topics. I enjoy the endless learning, possibilities, problem solving, and building. I started seeing the relationships between programming and various jobs I've worked in the past. Such as manufacturing, where we were always working to simplify and automate tasks with reproducable results. When I'm not coding I like climbing, fishing, and backpacking.</p>
        </section>
    )
}

export default About