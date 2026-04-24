import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yankovska School of Rhythmic Gymnastics',
  description:
    'Rhythmic gymnastics is one of the most elegant sport disciplines, blending elements of gymnastics, dance, and hand apparatus manipulation. At Yankovska School of Rhythmic Gymnastics, we offer programs for all levels, providing a unique opportunity for athletes to develop their skills, have fun, and stay active for life.',
  openGraph: {
    title: 'Yankovska School of Rhythmic Gymnastics',
    description:
      'Join the Yankovska School of Rhythmic Gymnastics — programs for all levels! Develop your gymnastic skills, enjoy creative movement, and become part of a vibrant athletic community.',
    url: 'https://yankovskaschool.com/',
    siteName: 'Yankovska School of Rhythmic Gymnastics',
    images: [
      {
        url: 'https://yankovskaschool.com/images/og-image.jpg',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yankovska School of Rhythmic Gymnastics',
    description: 'Elegant rhythmic gymnastics programs for all ages and skill levels.',
    images: ['https://yankovskaschool.com/images/og-image.jpg'],
  },
}

interface IProps {
  children: ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
