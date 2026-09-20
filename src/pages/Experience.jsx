import { Briefcase, CalendarDays } from 'lucide-react'
import { experiences } from '../data/content'
import { GlowBlob } from '../components/Decorative'

export default function Experience() {
  return (
    <div className="relative section-container py-16 md:py-20">
      <GlowBlob className="w-[400px] h-[400px] top-0 -left-40" />

      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Experience
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
        Where I've <span className="text-accent">worked</span>
      </h1>
      <p className="text-muted max-w-xl mb-12">
        Internships and practical work that shaped my full stack development skills.
      </p>

      <div className="relative pl-8 md:pl-10">
        {/* Vertical line */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-accent/20" aria-hidden="true" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-accent shadow-glow-sm ring-4 ring-bg" />
              <div className="card-base card-hover p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <h3 className="font-semibold text-offwhite">{exp.role}</h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-accent/90 mb-4">{exp.org}</p>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
