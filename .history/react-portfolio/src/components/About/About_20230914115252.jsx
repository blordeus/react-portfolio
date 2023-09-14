import React from 'react'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img src={getImageUrl("about/aboutImage.png")} alt="Img" />
        <ul>
          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized websites
              </p>
            </div>
          </li>
          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div>
              <h3>UI Designer</h3>
              <p>
                I have experience developing fast and optimized
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About
