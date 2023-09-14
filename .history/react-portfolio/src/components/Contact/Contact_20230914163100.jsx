import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul>
            <li>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:imaginedbybryan@gmail.com">imaginedbybryan@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin" />
                <a href="https://www.linkedin.com/in/bryanlordeus/">Bryan Lordeus</a>
            </li>
            <li>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                <a href="https://github.com/blordeus">blordeus</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
