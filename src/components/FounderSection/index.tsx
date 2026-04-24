import Link from 'next/link'

import { Wrapper } from '@/components/Wrapper'
import { Reveal } from '@/components/Reveal'

import styles from './FounderSection.module.css'

export const FounderSection = () => {
  return (
    <section className={styles.section}>
      <Wrapper>
        <div className={styles.grid}>
          <div className={styles.text_container}>
            <Reveal>
              <p className={styles.eyebrow}>Meet Our Founder</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className={styles.title}>Sasha Yankovska</h2>
            </Reveal>

            <div className={`${styles.media} ${styles.mediaMobile}`}>
              <img src="/images/founder/founder.jpg" alt="Sasha Yankovska" className={styles.img} />

              <div className={styles.overlay} />
            </div>

            <Reveal delay={0.1}>
              <p className={styles.text}>
                Sasha Yankovska began her gymnastics career at age 5 and trained at the Olympic
                Reserve School. She is a multiple prize-winner and champion of international
                tournaments, achieving the title of Master of Sports of Ukraine by age 16.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className={styles.text}>
                Since starting her coaching career in Canada in 2012, Sasha has been dedicated to
                passing on her extensive knowledge and passion for rhythmic gymnastics to young
                athletes.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link className={styles.cta} href="/founder">
                Read Sasha’s Full Story
              </Link>
            </Reveal>
          </div>

          <div className={`${styles.media} ${styles.mediaDesktop}`}>
            <img src="/images/founder/founder.jpg" alt="Sasha Yankovska" className={styles.img} />

            <div className={styles.overlay} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
