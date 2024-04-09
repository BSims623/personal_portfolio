import React, { useState } from 'react'
import { projectsData } from '../utils/projectsData'
import ProjectCard from './ProjectCard'

const indexArray = Array.from({ length: projectsData.length }, (_, index) => {
    return index
});

const maxIndex = indexArray.length - 1;

const ProjectsContainer = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const [visible, setVisible] = useState([0, 1, 2]);

    const incrementIndex = () => {
        if (projectIndex < maxIndex) {
            setProjectIndex(projectIndex + 1)
        } else {
            setProjectIndex(0)
        }
        handleVisible(projectIndex + 1)
    };

    const decrementIndex = () => {
        if (projectIndex > 0) {
            setProjectIndex(projectIndex - 1)
        } else {
            setProjectIndex(maxIndex)
        }
        handleVisible(projectIndex - 1)
    };

    const handleVisible = (i) => {
        if (i > maxIndex) {
            setVisible([0, 1, 2])
        } else if (i < 0) {
            setVisible([maxIndex - 2, maxIndex - 1, maxIndex])
        } else if (i > visible[0] + 2) {
            setVisible(visible.map((x) => x + 1))
        } else if (i < visible[2] - 2) {
            setVisible(visible.map((x) => x - 1))
        }
    };

    const handleIsVisible = (i) => {
        if (visible.indexOf(i) === -1) {
            return ''
        } else {
            return 'd-lg-block'
        }
    };



    return (
        <div className='w-100' style={{ maxWidth: '960px' }}>
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                {projectsData.map((x, i) => {
                    const isVisible = handleIsVisible(i)
                    return <ProjectCard
                        key={x.title}
                        cardIndex={i}
                        projectIndex={projectIndex}
                        isVisible={isVisible}
                        img={x.img}
                        title={x.title}
                        url={x.url}
                        github={x.github}
                        description={x.description}
                        skills={x.skills}
                    />
                })}
            </div>
            <div className="d-flex justify-content-center align-items-center py-3 px-2 mx-auto" style={{ width: '300px' }}>
                <div className="rounded-circle contact-link border border-warning d-flex justify-content-center align-items-center me-auto" onClick={() => decrementIndex()}>
                    <i className="btn-icon fa-solid fa-arrow-left"></i>
                </div>
                {indexArray.map((x) => {
                    return x === projectIndex ? <i key={x} className="fa-solid fa-circle text-warning mx-1"></i> : <i key={x} className="fa-regular fa-circle text-warning mx-1" onClick={() => { setProjectIndex(x); handleVisible(x); }}></i>
                })}
                <div className="rounded-circle contact-link border border-warning d-flex justify-content-center align-items-center ms-auto" onClick={() => incrementIndex()}>
                    <i className="btn-icon fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>

    )
}

export default ProjectsContainer