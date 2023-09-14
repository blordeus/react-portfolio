import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
        src={getImageUrl("about/aboutImage.png")} 
        alt="About Image" 
        className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.container}>
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
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor Icon" />
            <div>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages using Adobe Sketch and Figma
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About
