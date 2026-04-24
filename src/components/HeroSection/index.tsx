import { FC } from 'react'

import { Wrapper } from '@/components/Wrapper'

import styles from './HeroSection.module.css'

interface IProps {
  title: string
}

export const HeroSection: FC<IProps> = ({ title }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <Wrapper classes={styles.title_color}>
        <h1 className={styles.title}>{title}</h1>
      </Wrapper>
    </section>
  )
}
