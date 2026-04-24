'use client'

import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type RevealProps = PropsWithChildren<{
  delay?: number
  y?: number
  duration?: number
}>

export function Reveal({ children, delay = 0, y = 14, duration = 0.55 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
