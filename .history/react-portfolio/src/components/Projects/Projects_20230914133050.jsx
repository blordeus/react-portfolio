import React from 'react'

import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'

const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project) => {
                return (
                    <div key={project.id}>
                        <img 
                        src={getImageUrl(project.imageSrc)}
                        alt={`Image of $`}/>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.skills.map((skill) => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                        <div>
                            <a href={project.demo}>Demo</a>
                            <a href={project.source}>Source</a> 
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects
