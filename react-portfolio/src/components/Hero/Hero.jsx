import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World, I'm Bryan</h1>
        <p className={styles.description}>I'm a front-end developer with 4 years of experience using HTML, CSS, JavaScript, and React.</p>
        <a className={styles.contactBtn} href='mailto:imaginedbybryan@gmail.com'>Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/profile-pic.jpg")}></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
