import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.container}>Projects</h2>
        <div className={styles.container}>
            {projects.map((project, id) => {
                return <ProjectCard key={id} project={project}/>
            })}
        </div>
    </section>
  )
}

export default Projects