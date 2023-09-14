import React from 'react'

import skills from '../../data/skills.json'
import <utils className="js"></utils>

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        {skills.map(skill => (
          <div key={skill.title}>
            <h3>{skill.title}</h3>
            <img src={skill.imageSrc} alt={skill.title} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
