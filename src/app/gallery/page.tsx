'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { HeroSection } from '@/components/HeroSection'

import styles from './Gallery.module.css'

const images = [
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-8.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-5.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-10.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-11.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-7.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-4.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-15.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-14.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-1.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-13.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-6.jpg',
  '/images/gallery/top-rhythmic-gymnastics-club-nanaimo-canada-11.jpg',
]

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  const showFullScreen = (img: string) => () => {
    setActive(img)
  }

  const hideFullScreen = () => {
    setActive(null)
  }

  useEffect(() => {
    if (!active) return

    const prev = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prev
    }
  }, [active])

  return (
    <>
      <HeroSection title="Contact Us" />

      <section>
        <div className={styles.grid}>
          {images.map((img, i) => (
            <motion.img
              key={`${img}-${i}`}
              src={img}
              alt="Yankovska School of Rhythmic Gymnastics"
              onClick={showFullScreen(img)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            />
          ))}
        </div>

        {active && (
          <div className={styles.lightbox} onClick={hideFullScreen}>
            <img src={active} alt="Yankovska School of Rhythmic Gymnastics" />
          </div>
        )}
      </section>
    </>
  )
}
