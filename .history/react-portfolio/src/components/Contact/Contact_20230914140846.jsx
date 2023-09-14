import React from 'react'

import styles from './Contact.module.css'
const Contact = () => {
  return (
    <footer>
        <div>
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button>Send</button>
          </form>
        </div>
    </footer>
  )
}

export default Contact
