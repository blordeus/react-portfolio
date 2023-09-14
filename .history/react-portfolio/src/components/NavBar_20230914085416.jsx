import React from 'react'

import styles from ".Nav"

const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="/">Portfolio</a>
        <div>
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
