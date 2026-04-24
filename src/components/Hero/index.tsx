'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Wrapper } from '@/components/Wrapper'

import styles from './Hero.module.css'
import { useEffect, useState } from 'react'

export function Hero() {
  const [imgSrc, setImgSrc] = useState('/images/rhythmic_gymnastics.jpg')

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setImgSrc('/images/rhythmic-gymnastics-nanaimo.jpg')
      } else {
        setImgSrc('/images/rhythmic_gymnastics-canada.jpg')
      }
    }

    updateImage()
    window.addEventListener('resize', updateImage)

    return () => window.removeEventListener('resize', updateImage)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={imgSrc}
          alt="Rhythmic Gymnastics"
          fill
          priority
          className={styles.bgImg}
          sizes="100vw"
        />

        <div className={styles.overlay} />
      </div>

      <Wrapper classes={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Where Elegance Meets Excellence</h1>

          <p className={styles.subtitle}>
            Rhythmic gymnastics is one of the most elegant sport disciplines, blending elements of
            gymnastics, dance, and hand apparatus manipulation. At Yankovska School of Rhythmic
            Gymnastics, we offer programs for all levels, providing a unique opportunity for
            athletes to develop their skills, have fun, and stay active for life.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primary} href="#contact">
              Join Us
            </Link>

            <Link className={styles.secondary} href="/programs">
              Explore Programs
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </section>
  )
}
