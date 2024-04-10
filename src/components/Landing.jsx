import React, { useEffect, useState } from 'react'
import landingImage from '../assets/images/landing-image.webp'


const Landing = ({ landingRef }) => {
    const [quotesList, setQuotesList] = useState({})
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                let quoteIndex = Math.floor(Math.random() * data.length)
                setQuotesList(data)
                setQuote(data[quoteIndex].text)
                setAuthor(data[quoteIndex].author.split(',')[0])
            })
    }, [])

    return (
        <section ref={landingRef} id='Landing' className='d-flex justify-content-center align-items-end pb-0 container-fluid' style={{ width: '100vw', height: '94vh', backgroundImage: `url(${landingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mb-5">
                <div className='d-flex'><i className="align-self-start fa-sharp fa-solid fa-quote-left text-light"></i><p className="quote-text align-self-end text-light my-0 ms-2">{quote}</p></div>
                <p className="quote-text text-light text-end">- {author}</p>
            </div>
        </section>
    )
}

export default Landing