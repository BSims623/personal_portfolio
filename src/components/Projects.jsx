import React from 'react'
import ProjectsContainer from './ProjectsContainer'

const Projects = ({ projectsRef }) => {
    return (
        <section ref={projectsRef} className='d-flex flex-column align-items-center py-5'>
            <h1 className="text-light">Projects</h1>
            <ProjectsContainer />
        </section>
    )
}

export default Projects