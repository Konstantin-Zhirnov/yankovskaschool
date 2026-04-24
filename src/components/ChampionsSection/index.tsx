'use client'

import { motion } from 'framer-motion'

import { Wrapper } from '@/components/Wrapper'

import styles from './ChampionsSection.module.css'

export const ChampionsSection = () => {
  const champions = [
    { year: '1984', name: 'Lori Fung', src: 'images/champions/flag-of-Canada.png' },
    { year: '1988', name: 'Marina Lobach', src: 'images/champions/flag_of_the_Soviet_Union.png' },
    { year: '1992', name: 'Alexandra Timoshenko', src: 'images/champions/flag-of-Ukraine.png' },
    { year: '1996', name: 'Ekaterina Serebrianskaya', src: 'images/champions/flag-of-Ukraine.png' },
    { year: '2000', name: 'Yulia Barsukova', src: 'images/champions/flag-of-Russia.png' },
    { year: '2004', name: 'Alina Kabaeva', src: 'images/champions/flag-of-Russia.png' },
    { year: '2008', name: 'Evgenia Kanaeva', src: 'images/champions/flag-of-Russia.png' },
    { year: '2012', name: 'Evgenia Kanaeva', src: 'images/champions/flag-of-Russia.png' },
    { year: '2016', name: 'Margarita Mamun', src: 'images/champions/flag-of-Russia.png' },
    { year: '2020', name: 'Linoy Ashram', src: 'images/champions/flag-of-Israel.png' },
  ]

  return (
    <Wrapper classes={styles.mb}>
      <h3 className={styles.champTitle}>Here some olympic champions throughout the years:</h3>

      <div className={styles.champions}>
        {champions.map((c, i) => (
          <motion.div
            key={c.year}
            className={styles.champion}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>{c.year}</span>

            <p>{c.name}</p>

            <img className={styles.img} src={c.src} alt={c.name} />
          </motion.div>
        ))}
      </div>
    </Wrapper>
  )
}
