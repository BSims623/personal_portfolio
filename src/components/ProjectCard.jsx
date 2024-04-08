import React from 'react'
import tenziesImage from '../assets/images/tenzies-project.png'

const ProjectCard = (props) => {
    return (
        <div className='border border-warning mt-3' style={{ width: '300px', height: '420px', position: 'relative' }}>
            <a href={props.url}><img src={props.img} alt={props.alt} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /></a>
            <div className="d-flex justify-content-evenly py-3">
                <a className="btn btn-warning" href={props.url} target='_blank'>Website</a>
                <a className="btn btn-warning" href={props.github} target='_blank'>&lt;Source Code/&gt;</a>
            </div>
            <div className='d-flex container-fluid' style={{ height: '100px' }}>
                <p className='project-description text-light'>{props.description}</p>
            </div>
            <div className='d-flex p-2 flex-wrap justify-content-center w-100' style={{ position: 'absolute', bottom: '0' }}>
                {props.skills.map((x, i) => {
                    return <span key={x + i} className='text-warning mx-2 mb-1'>{x}</span>
                })}
            </div>
        </div>
    )
}

export default ProjectCard