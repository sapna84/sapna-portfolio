import { Github, Linkedin, Heart } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="section-container py-10 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-accent/10 pt-6">
        <p className="text-sm text-muted flex items-center gap-1.5">
          © {new Date().getFullYear()} {profile.name}. Built with
          <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
          and lots of coffee.
        </p>
        <div className="flex items-center gap-5">
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
            <Github className="w-[18px] h-[18px]" />
          </a>
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
