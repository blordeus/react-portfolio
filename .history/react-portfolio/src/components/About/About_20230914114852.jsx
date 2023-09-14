import React from 'react'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img 
        src={getImageUrl("about/aboutImage.png")} 
        alt="Img"
        />
        <ul>
         <li><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" /></li>  
         <div>
            
            </div> 
        </ul>
        </div>
    </section>
  )
}

export default About
