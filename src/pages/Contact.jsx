import { useState } from 'react'
import { Send, Download, CheckCircle2, XCircle, X } from 'lucide-react'
import { contactInfo, profile, notes } from '../data/content'
import { HandNote, GlowBlob } from '../components/Decorative'
import Icon from '../components/Icon'

// Backend endpoint that actually sends the email (see /server folder).
// During local dev this points at your Express server; in production,
// set VITE_API_URL in your .env to your deployed backend URL.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const NAME_MAX_LEN = 30
const MESSAGE_MAX_LEN = 1000
// Letters, spaces, apostrophes and hyphens only (covers names like "Mary-Jane" or "O'Brien")
const NAME_REGEX = /^[A-Za-z][A-Za-z '-]*$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending
  const [modal, setModal] = useState(null) // null | { type: 'success' | 'error', message: string }

  function validate() {
    const e = {}

    const name = form.name.trim()
    if (!name) {
      e.name = 'Please enter your name.'
    } else if (name.length > NAME_MAX_LEN) {
      e.name = `Name must be ${NAME_MAX_LEN} characters or fewer.`
    } else if (!NAME_REGEX.test(name)) {
      e.name = 'Please enter a valid name (no numbers or special characters).'
    }

    const email = form.email.trim()
    if (!email) {
      e.email = 'Please enter your email.'
    } else if (!EMAIL_REGEX.test(email)) {
      e.email = 'Please enter a valid email address.'
    }

    const message = form.message.trim()
    if (!message) {
      e.message = 'Please enter a message.'
    } else if (message.length > MESSAGE_MAX_LEN) {
      e.message = `Message must be ${MESSAGE_MAX_LEN} characters or fewer.`
    }

    return e
  }

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    // clear that field's error as soon as the user starts fixing it
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong sending your message.')
      }

      setModal({
        type: 'success',
        message: "Thanks! Your message has been sent — I'll get back to you soon.",
      })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setModal({
        type: 'error',
        message: err.message || 'Could not send your message. Please try again in a moment.',
      })
    } finally {
      setStatus('idle')
    }
  }

  return (
    <div className="relative section-container py-16 md:py-20">
      <GlowBlob className="w-[400px] h-[400px] top-0 -right-40" />

      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Get in Touch
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
        Let's <span className="text-accent">connect</span>
      </h1>
      <p className="text-muted max-w-xl mb-12">
        Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Form card */}
        <form onSubmit={handleSubmit} noValidate className="md:col-span-3 card-base p-6 md:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-offwhite/90 mb-1.5">
              Name *
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              maxLength={NAME_MAX_LEN}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              className={`w-full bg-bg/60 border rounded-xl px-4 py-2.5 text-sm text-offwhite placeholder:text-muted/70 outline-none transition-colors ${
                errors.name ? 'border-red-400/60 focus:border-red-400' : 'border-accent/15 focus:border-accent'
              }`}
            />
            <div className="flex items-center justify-between mt-1">
              {errors.name ? (
                <p className="text-xs text-red-400">{errors.name}</p>
              ) : (
                <span />
              )}
              <span className="text-[11px] text-muted/70">
                {form.name.length}/{NAME_MAX_LEN}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-offwhite/90 mb-1.5">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              className={`w-full bg-bg/60 border rounded-xl px-4 py-2.5 text-sm text-offwhite placeholder:text-muted/70 outline-none transition-colors ${
                errors.email ? 'border-red-400/60 focus:border-red-400' : 'border-accent/15 focus:border-accent'
              }`}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-offwhite/90 mb-1.5">
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              maxLength={MESSAGE_MAX_LEN}
              placeholder="Your message..."
              aria-invalid={!!errors.message}
              className={`w-full bg-bg/60 border rounded-xl px-4 py-2.5 text-sm text-offwhite placeholder:text-muted/70 outline-none transition-colors resize-none ${
                errors.message ? 'border-red-400/60 focus:border-red-400' : 'border-accent/15 focus:border-accent'
              }`}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-2.5 rounded-full hover:shadow-glow transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Contact info card */}
        <div className="md:col-span-2 card-base p-6 md:p-8 relative flex flex-col">
          <h3 className="font-semibold text-offwhite mb-5">Contact Info</h3>
          <ul className="space-y-5 flex-1">
            {contactInfo.map((c) => (
              <li key={c.label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon name={c.icon} className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="text-sm text-offwhite hover:text-accent transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-offwhite">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-5 mt-5 border-t border-accent/10">
            <p className="text-xs text-muted mb-2">Resume</p>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-accent/40 text-accent text-sm font-medium px-4 py-2 rounded-full hover:bg-accent hover:text-bg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <HandNote className="absolute -bottom-2 -right-2 hidden md:block" rotate={-6}>
            {notes.contact}
          </HandNote>
        </div>
      </div>

      {modal && <ContactModal modal={modal} onClose={() => setModal(null)} />}
    </div>
  )
}

function ContactModal({ modal, onClose }) {
  const isSuccess = modal.type === 'success'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="card-base relative w-full max-w-sm p-6 md:p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-muted hover:text-offwhite transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isSuccess ? 'bg-accent/10' : 'bg-red-400/10'
          }`}
        >
          {isSuccess ? (
            <CheckCircle2 className="w-6 h-6 text-accent" />
          ) : (
            <XCircle className="w-6 h-6 text-red-400" />
          )}
        </div>

        <h3 className="text-lg font-semibold text-offwhite mb-2">
          {isSuccess ? 'Message Sent' : 'Something Went Wrong'}
        </h3>
        <p className="text-sm text-muted mb-6">{modal.message}</p>

        <button
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-semibold px-6 py-2.5 rounded-full hover:shadow-glow transition-shadow w-full"
        >
          {isSuccess ? 'Close' : 'Try Again'}
        </button>
      </div>
    </div>
  )
}

