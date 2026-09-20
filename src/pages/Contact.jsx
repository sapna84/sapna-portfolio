import { useState } from 'react'
import { Send, Download, CheckCircle2 } from 'lucide-react'
import { contactInfo, profile, notes } from '../data/content'
import { HandNote, GlowBlob } from '../components/Decorative'
import Icon from '../components/Icon'

// To make this form actually send messages when deployed, connect it to a
// form service such as Formspree (https://formspree.io) or EmailJS, and
// replace the handleSubmit logic below with a real request. See README.

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please enter a message.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      // Placeholder: wire this up to Formspree / EmailJS / your API.
      setSent(true)
      setForm({ name: '', email: '', message: '' })
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
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-bg/60 border border-accent/15 rounded-xl px-4 py-2.5 text-sm text-offwhite placeholder:text-muted/70 focus:border-accent outline-none transition-colors"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-offwhite/90 mb-1.5">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full bg-bg/60 border border-accent/15 rounded-xl px-4 py-2.5 text-sm text-offwhite placeholder:text-muted/70 focus:border-accent outline-none transition-colors"
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
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message..."
              className="w-full bg-bg/60 border border-accent/15 rounded-xl px-4 py-2.5 text-sm text-offwhite placeholder:text-muted/70 focus:border-accent outline-none transition-colors resize-none"
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-2.5 rounded-full hover:shadow-glow transition-shadow"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>

          {sent && (
            <p className="flex items-center gap-2 text-sm text-accent pt-1">
              <CheckCircle2 className="w-4 h-4" />
              Thanks! Your message has been noted (connect a form service to deliver it by email).
            </p>
          )}
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
    </div>
  )
}
