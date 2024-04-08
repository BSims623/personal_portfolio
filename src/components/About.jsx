import React from 'react'
import aboutImage from '../assets/images/about-image.jpg'

const About = ({ aboutRef }) => {

    return (
        <section ref={aboutRef} id='about-section' className='container-sm py-5 border border-warning' style={{ maxWidth: '960px', background: 'var(--primary-black)' }}>
            <h1 className='text-center text-light'>About Me</h1>
            <img className='rounded-circle d-block mx-auto mt-3' style={{ objectFit: 'cover' }} width={200} height={200} src={aboutImage} alt="A picture of Brian." />
            <p className='mt-3 text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam enim dolores inventore rerum dignissimos odio consequatur sint expedita, vero quae in suscipit aut praesentium corporis. Animi nobis eveniet alias minus.
                Repellendus quis nesciunt expedita dolore magnam quas dolores quod? Quo iure odit, praesentium quibusdam esse placeat earum vero ipsam, numquam reiciendis commodi, iusto qui perferendis dolore aliquam illum exercitationem tenetur!</p>
        </section>
    )
}

export default About