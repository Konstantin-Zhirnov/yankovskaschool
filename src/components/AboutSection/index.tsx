import Link from 'next/link'

import { Wrapper } from '@/components/Wrapper'
import { Reveal } from '@/components/Reveal'

import styles from './AboutSection.module.css'

export const AboutSection = () => {
  return (
    <section className={styles.section}>
      <Wrapper>
        <div className={styles.grid}>
          <div className={`${styles.media} ${styles.mediaDesktop}`}>
            <img
              src="/images/rhythmic-gymnastics-single.jpg"
              alt="Welcome to Yankovska School"
              className={styles.img}
            />
          </div>

          <div className={styles.text_container}>
            <Reveal>
              <p className={styles.eyebrow}>ABOUT US</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className={styles.title}>
                {`Welcome to Yankovska School \n of Rhythmic Gymnastics`}
              </h2>
            </Reveal>

            <div className={`${styles.media} ${styles.mediaMobile}`}>
              <img
                src="/images/rhythmic-gymnastics-single.jpg"
                alt="Welcome to Yankovska School"
                className={styles.img}
              />
            </div>

            <Reveal delay={0.1}>
              <p className={styles.text}>
                Yankovska School of Rhythmic Gymnastics was established in 2021 by Sasha Yankovska,
                a celebrated gymnast with a passion for the sport.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className={styles.text}>
                Located in the heart of Nanaimo, BC, we pride ourselves on having custom-made
                gymnastics equipment, ensuring a safe, professional, and enjoyable training
                environment for all our athletes.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Link className={styles.cta} href="/about">
                Learn More About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
