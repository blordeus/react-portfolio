import React from 'react'

import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className=''>
          <ul>
            <li>
            <a href="#about">About</a>
            </li>
            <li>
            <a href="#experience">Experience</a>
            </li>
            <li>
            <a href="#projects">Projects</a>
            </li>
            <li>
            <a href="#contact">Contact</a>
            </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
