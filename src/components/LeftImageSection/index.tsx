'use client'

import { FC, ReactNode } from 'react'

import { Wrapper } from '@/components/Wrapper'
import { Reveal } from '@/components/Reveal'

import styles from './LeftImageSection.module.css'

interface IProps {
  src: string
  title: string
  children: ReactNode
}

export const LeftImageSection: FC<IProps> = ({ src, title, children }) => {
  return (
    <section className={styles.section}>
      <Wrapper>
        <Reveal>
          <h2 className={styles.title}>{title}</h2>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.media}>
            <img src={src} alt="Yankovska School of Rhythmic Gymnastics" className={styles.img} />

            <div className={styles.overlay} />
          </div>

          <div>{children}</div>
        </div>
      </Wrapper>
    </section>
  )
}
