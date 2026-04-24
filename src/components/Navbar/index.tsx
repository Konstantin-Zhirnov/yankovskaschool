'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from './Navbar.module.css'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const onClose = () => {
    setOpen(false)
  }

  const onToggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <img src="/images/yankovska_school.png" alt="logo" />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          <Link href="/" onClick={onClose} className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className={pathname === '/about' ? styles.active : ''}
          >
            About Us
          </Link>

          <Link
            href="/founder"
            onClick={onClose}
            className={pathname === '/founder' ? styles.active : ''}
          >
            Our Founder
          </Link>

          <Link
            href="/programs"
            onClick={onClose}
            className={pathname === '/programs' ? styles.active : ''}
          >
            Programs
          </Link>

          <Link
            href="/gallery"
            onClick={onClose}
            className={pathname === '/gallery' ? styles.active : ''}
          >
            Gallery
          </Link>

          <Link href="/#contact" onClick={onClose}>
            Contact Us
          </Link>
        </nav>

        <button className={styles.burger} onClick={onToggle}>
          ☰
        </button>
      </div>
    </header>
  )
}
