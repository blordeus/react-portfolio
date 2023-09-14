import React from 'react'

import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        {skills.map((skill) => (
          <div key={skill.title}>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
          </div><h3>{skill.title}</h3>

        ))}
      </div>
    </section>
  )
}

export default Experience
