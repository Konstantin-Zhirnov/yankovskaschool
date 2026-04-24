import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'yankovskaschool@gmail.com',
      subject: 'Message from website',
      html: `<div><b>Message from website: https://yankovskaschool.com/</b></div>
        <p>
          <b>Name:</b> ${body.name}<br/>
          <b>Email:</b> ${body.email}<br/>
          <b>Message:</b> ${body.message}<br/>
        </p>`,
    })

    return NextResponse.json({ message: 'Success!' })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
