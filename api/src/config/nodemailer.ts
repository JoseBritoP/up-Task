import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const config = () => {
  return {
    host: process.env.SMTP_HOST!,
    port: +process.env.SMTP_PORT!,
    auth: {
      user: process.env.SMTP_AUTH_USER!,
      pass: process.env.SMTP_AUTH_PASS!
    }
  }
}

export const transport = nodemailer.createTransport(config());