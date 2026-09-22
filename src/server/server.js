// Minimal backend that receives the contact form and emails it to you.
//
// SETUP:
//   1. cd server
//   2. npm install
//   3. Copy .env.example to .env and fill in real SMTP credentials
//      (Gmail users: use an "App Password", not your normal password:
//      https://myaccount.google.com/apppasswords)
//   4. npm start
//
// The server listens on http://localhost:5000 by default.
// The React app's Contact.jsx calls POST /api/contact on this server.

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const TO_EMAIL = process.env.TO_EMAIL || 'sapnaml4004@mail.com'

const NAME_MAX_LEN = 30
const MESSAGE_MAX_LEN = 1000
const NAME_REGEX = /^[A-Za-z][A-Za-z '-]*$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ name, email, message }) {
  const errors = {}
  const n = (name || '').trim()
  const e = (email || '').trim()
  const m = (message || '').trim()

  if (!n) errors.name = 'Name is required.'
  else if (n.length > NAME_MAX_LEN) errors.name = `Name must be ${NAME_MAX_LEN} characters or fewer.`
  else if (!NAME_REGEX.test(n)) errors.name = 'Name contains invalid characters.'

  if (!e) errors.email = 'Email is required.'
  else if (!EMAIL_REGEX.test(e)) errors.email = 'Invalid email address.'

  if (!m) errors.message = 'Message is required.'
  else if (m.length > MESSAGE_MAX_LEN) errors.message = `Message must be ${MESSAGE_MAX_LEN} characters or fewer.`

  return errors
}

// Configure your SMTP transport. Works with Gmail, Outlook, or any SMTP
// provider (SendGrid, Mailgun, etc). See .env.example for the variables.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for others
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  const errors = validate({ name, email, message })

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed.', errors })
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `New message from ${name.trim()} (portfolio contact form)`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br/>')}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

app.listen(PORT, () => {
  console.log(`Contact form server running on http://localhost:${PORT}`)
})
