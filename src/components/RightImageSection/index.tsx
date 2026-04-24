'use client'

import { FC, ReactNode } from 'react'

import { Wrapper } from '@/components/Wrapper'
import { Reveal } from '@/components/Reveal'

import styles from './RightImageSection.module.css'

interface IProps {
  src: string
  title: string
  children: ReactNode
}

export const RightImageSection: FC<IProps> = ({ src, title, children }) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <Reveal>
          <h2 className={styles.title}>{title}</h2>
        </Reveal>

        <div className={styles.grid}>
          <div>{children}</div>

          <div className={styles.media}>
            <img src={src} alt="Yankovska School of Rhythmic Gymnastics" className={styles.image} />

            <div className={styles.overlay} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
