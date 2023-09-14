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
            <h3>I'm a frontend developer with experience in building responsive and optimi websites</h3>
            <p></p>
            </div> 
        </ul>
        </div>
    </section>
  )
}

export default About
