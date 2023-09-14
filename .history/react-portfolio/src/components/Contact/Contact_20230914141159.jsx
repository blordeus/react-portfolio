import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <footer>
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
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:imaginedbybryan@gmail.com">imaginedbybryan@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:imaginedbybryan@gmail.com">imaginedbybryan@gmail.com</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
