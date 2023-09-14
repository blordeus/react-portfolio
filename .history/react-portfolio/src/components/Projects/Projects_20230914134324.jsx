import React from 'react'

import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'

const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
            {projects.map((project) => {
                return <Proje>
            })}
        </div>
    </section>
  )
}

export default Projects
