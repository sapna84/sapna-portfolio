import { useState, useMemo } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { projects, projectCategories } from '../data/content'
import { GlowBlob } from '../components/Decorative'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div className="relative section-container py-16 md:py-20">
      <GlowBlob className="w-[400px] h-[400px] top-0 -left-40" />

      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        My Projects
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Some of my work</h1>
      <p className="text-muted max-w-xl mb-8">
        Here are a few projects I've built, including academic projects, internships and live client work.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === cat
                ? 'bg-accent text-bg border-accent'
                : 'border-offwhite/15 text-offwhite/70 hover:border-accent/40 hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.name} className="card-base card-hover overflow-hidden flex flex-col">
            <div
              className="h-40 flex items-center justify-center relative"
              style={{ background: `linear-gradient(135deg, ${p.color}22, #0B1510)` }}
            >
              <span className="text-2xl font-bold" style={{ color: p.color }}>
                {p.name}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-offwhite">{p.name}</h3>
                <span className="text-[11px] uppercase tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {p.tag}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex items-center gap-4 pt-3 border-t border-accent/10">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-offwhite/80 hover:text-accent transition-colors"
                  >
                    {l.type === 'github' ? <Github className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">No projects in this category yet.</p>
      )}
    </div>
  )
}
