'use client'

import { useState } from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Wrapper } from '@/components/Wrapper'
import { Reveal } from '@/components/Reveal'

import styles from './ContactSection.module.css'

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().default(''),
})

type ContactForm = yup.InferType<typeof schema>

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, reset } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true)

    const body = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          reset()

          toast.success('Message delivered!')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section id="contact" className={styles.section}>
      <Wrapper>
        <Reveal>
          <h2 className={styles.title}>Contact Us</h2>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.left}>
            <Reveal>
              <h3 className={styles.leftTitle}>Get In Touch</h3>
            </Reveal>

            <Reveal>
              <div className={styles.item}>
                <p className={styles.label}>Phone</p>

                <a className={styles.link} href="tel:+17785846061">
                  778-584-6061
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className={styles.item}>
                <p className={styles.label}>Address</p>

                <p
                  className={styles.value}
                >{`Main location École Pauline Haarer Elementary School\n' +
                    '400 Campbell St, Nanaimo, BC V9R 3G7`}</p>
              </div>
            </Reveal>

            <Reveal>
              <div className={styles.item}>
                <p className={styles.label}>Email</p>

                <a className={styles.link} href="mailto:yankovskaschool@gmail.com">
                  yankovskaschool@gmail.com
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/yankovskaschoolrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="http://fb.com/yankovskaschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                className={styles.input}
                placeholder="Name"
                id="name"
                {...register('name')}
                autoComplete="off"
              />

              <input
                className={styles.input}
                placeholder="Email Address"
                id="email"
                {...register('email')}
                autoComplete="off"
              />

              <textarea
                className={styles.textarea}
                placeholder="Message"
                rows={6}
                id="message"
                {...register('message')}
                autoComplete="off"
              />

              <button className={styles.submit} type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
            </form>
          </Reveal>
        </div>
      </Wrapper>
    </section>
  )
}
