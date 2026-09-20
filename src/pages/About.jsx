import { MapPin, GraduationCap, Mail } from 'lucide-react'
import { profile, notes } from '../data/content'
import { FramedAvatar } from '../components/Avatar'
import { HandNote, GlowBlob } from '../components/Decorative'
import Icon from '../components/Icon'

export default function About() {
  return (
    <div className="relative section-container py-16 md:py-20">
      <GlowBlob className="w-[400px] h-[400px] top-0 -right-40" />

      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        About Me
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left: text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A little <span className="text-accent">about me</span>
          </h1>
          <div className="space-y-4 text-muted leading-relaxed">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-accent/10">
            <div className="flex items-center gap-2 text-sm text-offwhite/80">
              <MapPin className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-muted">Location</p>
                {profile.location}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-offwhite/80">
              <GraduationCap className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-muted">Education</p>
                {profile.degree}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-offwhite/80">
              <Mail className="w-4 h-4 text-accent" />
              <div>
                <p className="text-xs text-muted">Email</p>
                {profile.email}
              </div>
            </div>
          </div>
        </div>

        {/* Right: image + quick facts */}
        <div className="relative">
          <HandNote className="hidden md:block absolute -top-8 right-2" rotate={6}>
            {notes.about}
          </HandNote>
          <FramedAvatar className="w-full max-w-sm mx-auto md:mx-0 md:ml-auto" />

          <div className="card-base mt-8 p-6 max-w-sm mx-auto md:mx-0 md:ml-auto">
            <h3 className="text-accent font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              {profile.quickFacts.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={f.icon} className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-offwhite">{f.label}</p>
                    <p className="text-sm text-muted">{f.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
