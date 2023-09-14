import React, {useState} from 'react'

import styles from "./NavBar.module.css"
import { getImageUrl } from '../utils'

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Bryan Lordeus</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={getImageUrl("na")} alt="" />
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
