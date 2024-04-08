import { useRef, useState } from 'react'
import './App.css'
import { Navbar, Landing, About, Projects, Contact, ContactTwo } from './components'

function App() {
  const landingRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className=''>
      <Navbar landingRef={landingRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Landing landingRef={landingRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      {/* <Contact contactRef={contactRef}/> */}
      <ContactTwo contactRef={contactRef} />
    </div>
  )
}

export default App
