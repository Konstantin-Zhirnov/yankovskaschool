import Image from 'next/image'
import Link from 'next/link'

import { Wrapper } from '@/components/Wrapper'
import { Reveal } from '@/components/Reveal'

import styles from './ProgramsSection.module.css'

const items = [
  {
    number: '01',
    title: 'Recreational Program',
    description:
      'Introducing basic techniques and apparatus in a fun, engaging way. Perform at home events like Christmas and Summer Shows.',
    image: '/images/programs/recreational-program.jpg',
    focus: '60% 38%',
  },
  {
    number: '02',
    title: 'Beginners Program',
    description:
      'A fun introduction to rhythmic gymnastics and choreography, fostering hand-eye coordination, flexibility, and strength.',
    image: '/images/programs/beginners-program.jpg',
    focus: '60% 30%',
  },
  {
    number: '03',
    title: 'Interclub Program',
    description:
      'Bridging the gap between recreational and competitive levels, focusing on a variety of skills and performing at multiple events.',
    image: '/images/programs/interclub_program.jpg',
    focus: '60% 10%',
  },
  {
    number: '04',
    title: 'Competitive Program',
    description:
      'Advanced techniques and competitions at local, regional, national, and international levels, with scholarship opportunities for high achievers.',
    image: '/images/programs/competitive-program.jpg',
    focus: '60% 20%',
  },
]

export function ProgramsSection() {
  return (
    <section className={styles.section}>
      <Wrapper>
        <Reveal>
          <h2 className={styles.title}>Our Programs</h2>
        </Reveal>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.3}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.img}
                    style={{ objectPosition: item.focus }}
                  />

                  <div className={styles.overlay} />
                </div>

                <div className={styles.body}>
                  <p className={styles.number}>{item.number}</p>

                  <h3 className={styles.cardTitle}>{item.title}</h3>

                  <p className={styles.desc}>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.footer}>
            <Link className={styles.cta} href="/programs">
              Explore Our Programs
            </Link>
          </div>
        </Reveal>
      </Wrapper>
    </section>
  )
}
