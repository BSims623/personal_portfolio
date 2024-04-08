import React from 'react'
import { projectsData } from '../utils/projectsData'
import ProjectCard from './ProjectCard'

const ProjectsContainer = () => {
    return (
        <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center w-100' style={{ maxWidth: '960px' }}>
            {projectsData.map((x, i) => {
                return <ProjectCard
                    key={i}
                    img={x.img}
                    title={x.title}
                    url={x.url}
                    github={x.github}
                    description={x.description}
                    skills={x.skills}
                />
            })}
        </div>
    )
}

export default ProjectsContainer