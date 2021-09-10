import React from 'react'
import Link from 'next/link'

import styles from './Button.module.scss'

function Button({ title, href }) {
  return (
    <Link href={href}>
      <button className={styles.buttonn}>{title}</button>
    </Link>
  )
}

export default Button
