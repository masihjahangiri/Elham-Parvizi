import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Header.module.scss'

function Header() {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Ui/Ux Designer</h2>
      <div className={styles.headerLinks}>
        {router.pathname !== '/' ?
          <Link href="/">
            <a className={styles.headerLink, router.pathname === '/' && styles.active}>Home</a>
          </Link> : null
        }
        <Link href="/about">
          <a className={styles.headerLink, router.pathname === '/about' && styles.active}>About Me</a>
        </Link>
        <Link href="/contact">
          <a className={styles.headerLink, router.pathname === '/contact' && styles.active}>Contact Me</a>
        </Link>
        <Link href="/portfolio">
          <a className={styles.headerLink, router.pathname === '/portfolio' && styles.active}>Portfolio</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
