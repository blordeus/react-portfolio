import React from 'react'
import styles from './'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project, id) => {
                return <ProjectCard key={id} project={project}/>
            })}
        </div>
    </section>
  )
}

export default Projects
