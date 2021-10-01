import { useEffect } from 'react'

import Button from '../components/button/Button'
import Header from '../layouts/header/Header'
import Main from '../layouts/main/Main'
import styles from '../styles/Home.module.scss'

export default function Home() {

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
            <div className={styles.title}>
              <span className={styles.innerTextYellow}>Ui / Ux <span className={styles.color}>Designer</span></span>
              <span className={styles.innerTextBlack}>And Psycologest</span>
            </div>
            <img className={styles.leftImage} src={require('../public/group215.png')} />
            <div className={styles.description}>
              <span className={styles.textBold}>Elham Parvizi</span>
              <p className={styles.innerDescription}>
                I Am a Ui / Ux Designer And Psycologest With Several Years Experience.
                I Like Design Because It Causes Creativity To Grow And Creates New Ideas.
              </p>
              <div className={styles.buttonContainer}>
                <Button href='/portfolio' title='My Portfolio' />
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <img className={styles.rightImage} src={require('../public/group216.png')} />
          </div>
        </div>
      </div>
    </Main>
  )
}
