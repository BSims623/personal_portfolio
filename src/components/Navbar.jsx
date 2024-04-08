import React from 'react'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'var(--primary-black)', position: 'sticky', top: '0', zIndex: 10 }} aria-label="Tenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarsExample08" className="navbar-collapse justify-content-md-center collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={() => props.landingRef.current?.scrollIntoView()}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => props.aboutRef.current?.scrollIntoView()}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => props.projectsRef.current?.scrollIntoView()}>Projects</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => props.contactRef.current?.scrollIntoView()}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar