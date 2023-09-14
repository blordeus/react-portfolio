import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className=''>
        <h1>Hello World, I'm Bryan</h1>
        <p>I'm a front-end developer with 3 years of experience using HTML, CSS, JavaScript, and React.</p>
        <a href='mailto:imaginedbybryan@gmail.com'>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")}></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
