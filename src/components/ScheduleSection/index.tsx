'use client'

import { motion } from 'framer-motion'

import { fadeUp, hoverLift, stagger } from '@/data/motion'

import styles from './ScheduleSection.module.css'

const schedule = [
  {
    title: 'Competitive Team',
    days: [
      { day: 'Mon', time: '5–8 PM' },
      { day: 'Wed', time: '5–8 PM' },
      { day: 'Thu', time: '5–7 PM' },
      { day: 'Fri', time: '5–7 PM' },
    ],
  },
  {
    title: 'Beginners (5–7 y.o)',
    days: [
      { day: 'Mon', time: '5–7 PM' },
      { day: 'Tue', time: '5–7 PM' },
      { day: 'Fri', time: '5–7 PM' },
    ],
  },
  {
    title: 'Performance (REC)',
    days: [
      { day: 'Tue', time: '6–8 PM' },
      { day: 'Wed', time: '5–7 PM' },
      { day: 'Thu', time: '5–7 PM' },
    ],
  },
  {
    title: 'Little Stars (2.5–4 y.o)',
    days: [{ day: 'Tue', time: '5–6 PM' }],
  },
]

export function ScheduleSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Schedule 2024–2025</h2>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.wrapper}
      >
        {schedule.map((group) => (
          <motion.article key={group.title} {...hoverLift} className={styles.card}>
            <motion.div {...fadeUp}>
              <h3>{group.title}</h3>

              <div className={styles.days}>
                {group.days.map((d, index) => (
                  <div key={index} className={styles.day}>
                    <div className={styles.circle}>{d.day}</div>

                    <span>{d.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
