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
            <div className={styles.linkContainer}>
              <img className={styles.mailLogo} src={require('../public/mail.svg')} />
              <span className={styles.linkStyle}>e.parvizii.67@gmail.com</span>
            </div>
            <div className={styles.linkContainer}>
              <img className={styles.paperLogo} src={require('../public/paper-airplane.svg')} />
              <span className={styles.linkStyle}>@elham parvizi</span>
            </div>
            <div className={styles.linkContainer}>
              <img className={styles.phoneLogo} src={require('../public/phone.svg')} />
              <span className={styles.linkStyle}>09120195321</span>
            </div>
            <div className={styles.linkContainer}>
              <img className={styles.locationLogo} src={require('../public/location-marker.svg')} />
              <span className={styles.linkStyle}>Iran, Tehran</span>
            </div>
            <div className={styles.linkContainer}>
              <img className={styles.subtractLogo} src={require('../public/subtract.svg')} />
              <span className={styles.linkStyle}>https://dribbble.com/elhamparvizi/boosts</span>
            </div>
            <div className={styles.linkContainer}>
              <img className={styles.inLogo} src={require('../public/in.svg')} />
              <span className={styles.linkStyle}>https://dribbble.com/elhamparvizi/boosts</span>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Contact
