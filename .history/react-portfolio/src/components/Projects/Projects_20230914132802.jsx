import React from 'react'

import projects from '../../data/projects.json'

const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project) => {
                return (
                    <div key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.skills.map((skill) => {
                                return <li key={skill}>{skill}</li>
                            })}
                        </ul>
                        <div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects
