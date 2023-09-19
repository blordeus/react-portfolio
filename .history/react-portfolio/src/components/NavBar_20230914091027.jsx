import React, {useState} from 'react'

import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Bryan Lordeus</a>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
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