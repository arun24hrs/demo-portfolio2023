import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link href="/">HOME</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
    </div>
  )
}

export default Navbar