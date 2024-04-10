import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className={props.cardIndex === props.projectIndex ? 'selected-card mt-3' : `mt-3 d-none ${props.isVisible}`} style={{ width: '300px', height: '420px', position: 'relative' }}>
            <a href={props.url} target='_blank' aria-label={props.ariaLabelWebLink}><img src={props.img} alt={props.alt} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /></a>
            <div className="d-flex justify-content-evenly py-3">
                <a className="btn btn-blue" href={props.url} target='_blank' aria-label={props.ariaLabelWebLink}>Website</a>
                <a className="btn btn-blue" href={props.github} target='_blank' aria-label={props.ariaLabelGitLink}>&lt;Source Code/&gt;</a>
            </div>
            <div className='d-flex container-fluid' style={{ height: '100px' }}>
                <p className='project-description text-light'>{props.description}</p>
            </div>
            <div className='d-flex p-2 flex-wrap justify-content-center w-100' style={{ position: 'absolute', bottom: '0' }}>
                {props.skills.map((x, i) => {
                    return <span key={x + i} className='text-blue mx-2 mb-1'>{x}</span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard