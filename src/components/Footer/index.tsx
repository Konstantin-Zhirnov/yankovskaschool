'use client'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div>© {new Date().getFullYear()} Yankovska School of Rhythmic Gymnastics</div>

        <a
          href="https://create-website"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Web Solutions
        </a>
      </div>
    </footer>
  )
}
