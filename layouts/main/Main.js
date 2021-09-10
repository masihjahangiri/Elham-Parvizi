import React from 'react'

import styles from './Main.module.scss'

function Main(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>

  )
}

export default Main
