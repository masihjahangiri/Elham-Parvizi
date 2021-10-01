import React, { useEffect } from 'react'

import Header from '../layouts/header/Header'
import Main from '../layouts/main/Main'
import styles from '../styles/Contact.module.scss'

function Contact() {

  useEffect(() => {
    document.getElementById('__next').classList.remove('height-auto')
    document.getElementById('__next').classList.add('height-percentage')
  })

  return (
    <Main>
      <div className={styles.container}>
        <Header />
        <div className={styles.title}>
          <span className={styles.textBold}>Contact Me</span>
          <p className={styles.text}>You can contact me this way. Very easy and accessible. </p>
        </div>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <img className={styles.leftImage} src={require('../public/group159.png')} />
          </div>
          <div className={styles.rightSection}>
            <a href="mailto: e.parvizii.67@gmail.com" className={styles.linkContainer}>
              <img className={styles.mailLogo} src={require('../public/mail.svg')} />
              <span className={styles.linkStyle}>e.parvizii.67@gmail.com</span>
            </a>
            <a href="https://t.me/Eli4462" className={styles.linkContainer}>
              <img className={styles.paperLogo} src={require('../public/paper-airplane.svg')} />
              <span className={styles.linkStyle}>@Eli4462</span>
            </a>
            <a href="tel:+989120195321" className={styles.linkContainer}>
              <img className={styles.phoneLogo} src={require('../public/phone.svg')} />
              <span className={styles.linkStyle}>09120195321</span>
            </a>
            <a className={styles.linkContainer}>
              <img className={styles.locationLogo} src={require('../public/location-marker.svg')} />
              <span className={styles.linkStyle}>Iran, Tehran</span>
            </a>
            <a href="https://dribbble.com/elhamparvizi" className={styles.linkContainer}>
              <img className={styles.subtractLogo} src={require('../public/subtract.svg')} />
              <span className={styles.linkStyle}>dribbble.com/elhamparvizi</span>
            </a>
            <a href="https://www.linkedin.com/in/elham-parvizi" className={styles.linkContainer}>
              <img className={styles.inLogo} src={require('../public/in.svg')} />
              <span className={styles.linkStyle}>linkedin.com/in/elham-parvizi</span>
            </a>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Contact
