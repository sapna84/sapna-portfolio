import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { profile, heroTech, featureCards, notes } from '../data/content'
import { CircleAvatar } from '../components/Avatar'
import { HandNote, CurveLine, CornerArrow, GlowBlob } from '../components/Decorative'
import Icon from '../components/Icon'

export default function Home() {
  return (
    <div className="relative">
      <GlowBlob className="w-[500px] h-[500px] -top-20 -left-40" />
      <GlowBlob className="w-[400px] h-[400px] top-40 -right-32" />

      {/* Hero */}
      <section className="section-container relative pt-16 md:pt-24 pb-20">
        <CurveLine className="hidden md:block -top-4 left-0" />
        <HandNote className="hidden md:block absolute top-8 left-0 max-w-[160px]" rotate={-6}>
          {notes.hero}
        </HandNote>
        <div className="hidden md:flex items-start gap-1 absolute top-14 right-0 flex-col text-right">
          <HandNote rotate={4}>{notes.heroCorner.split(' • ').join('\n')}</HandNote>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center pt-16 md:pt-8">
          <div>
            <p className="text-accent font-medium flex items-center gap-2 mb-4">
              {profile.greeting} <span aria-hidden="true">👋</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Full Stack <span className="text-accent">Developer</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-md mb-8 leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-full hover:shadow-glow transition-shadow"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-offwhite/20 text-offwhite font-medium px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <CircleAvatar className="w-64 h-64 md:w-72 md:h-72" />
          </div>
        </div>

        {/* Tech strip */}
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 justify-center md:justify-start border-y border-accent/10 py-6">
          {heroTech.map((t) => (
            <div key={t.name} className="flex items-center gap-2.5 text-offwhite/80">
              <Icon name={t.icon} className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section className="section-container pb-24">
        <div className="grid sm:grid-cols-3 gap-5">
          {featureCards.map((f) => (
            <div key={f.title} className="card-base card-hover p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon name={f.icon} className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-offwhite mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
