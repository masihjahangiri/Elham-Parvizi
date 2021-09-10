import React, { useEffect } from 'react'

import Header from '../layouts/header/Header'
import Main from '../layouts/main/Main'
import Button from '../components/button/Button'
import styles from '../styles/About.module.scss'

function About() {
 
  useEffect(() => {
    document.getElementById('__next').classList.remove('height-auto')
    document.getElementById('__next').classList.add('height-percentage')
  })

  return (
    <Main>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.title}>About Me</div>
            <div>
              <p className={styles.text}>
                As a designer, I would like to create everything in the best possible way​.
                Building valuable products through the interplay of tech and design​.
                We Connect Humans and Digital Product and Services With Using a Bridge,
                The Bridge Name is "Design"</p>
              <div className={styles.buttonContainer}>
                <Button href='/resume' title='Resume' />
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
          <img className={styles.rightImage} src={require('../public/group210.png')} />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default About
