import { skillGroups, notes } from '../data/content'
import { HandNote, GlowBlob } from '../components/Decorative'
import Icon from '../components/Icon'

export default function Skills() {
  return (
    <div className="relative section-container py-16 md:py-20">
      <GlowBlob className="w-[400px] h-[400px] top-0 -right-40" />

      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        My Skills
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
        Tech I <span className="text-accent">work with</span>
      </h1>
      <p className="text-muted max-w-xl mb-10">
        Here are the technologies, tools and soft skills I use and keep improving.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div key={group.title} className="card-base card-hover p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name={group.icon} className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-semibold text-offwhite">{group.title}</h3>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {group.skills.map((s) => (
                <li key={s.name} className="flex items-center gap-2 text-sm text-offwhite/80">
                  <Icon name={s.icon} className="w-4 h-4 text-accent shrink-0" />
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <HandNote rotate={-4}>{notes.skills}</HandNote>
      </div>
    </div>
  )
}
