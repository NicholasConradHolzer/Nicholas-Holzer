import React from "react";

export default function ProjMod(props){
    let {project} = props

    return(
        <div className="project-panel">
        {/* <div className="project-card"> */}
            <a className="projectPortal" href={project.linkDeployed}>
            {/* <a className="pic" href={project.linkDeployed}> */}
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.alt} />
            </a>
            <p>{project.description}</p>
            {/* <a href={project.linkGithub}>{project.title}</a> */}
        </div>
    )
}