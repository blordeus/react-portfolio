import React from 'react'

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
                <img src={getImageUrl} alt="" />
                <a href="mailto:imaginedbybryan@gmail.com">Email</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
