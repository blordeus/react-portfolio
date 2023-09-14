import React from 'react'

import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        {skills.map((skill) => (
          <div key={skill.title}>
            <h3>{skill.title}</h3>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
          </div>
        ))}
      </div>
      <ul>
        {
            history.map((historyItem) => {
                return <li key={history.title}>
                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation}`} />
                    </li>
            })
        }
      </ul>
    </section>
  )
}

export default Experience
