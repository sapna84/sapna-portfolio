import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Download, Menu, X, Code2 } from 'lucide-react'
import { profile } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4 md:px-6">
      <nav className="section-container">
        <div className="flex items-center justify-between gap-4 rounded-full border border-accent/15 bg-bg-soft/80 backdrop-blur-md px-4 md:px-6 py-3 shadow-[0_0_0_1px_rgba(168,233,90,0.05)]">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <Code2 className="w-5 h-5 text-accent" strokeWidth={2.2} />
            <span className="font-semibold text-offwhite tracking-tight">{profile.name}</span>
          </NavLink>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-sm font-medium pb-1 transition-colors ${
                      isActive ? 'text-accent' : 'text-offwhite/80 hover:text-offwhite'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accent rounded-full shadow-glow-sm" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right actions (desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-offwhite/70 hover:text-accent transition-colors">
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-offwhite/70 hover:text-accent transition-colors">
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full border border-accent/40 text-accent text-sm font-medium px-4 py-2 hover:bg-accent hover:text-bg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-offwhite p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-accent/15 bg-bg-soft/95 backdrop-blur-md px-5 py-5 flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-accent' : 'text-offwhite/80'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-5 pt-2 border-t border-accent/10">
              <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-offwhite/70">
                <Github className="w-5 h-5" />
              </a>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-offwhite/70">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="ml-auto flex items-center gap-2 rounded-full border border-accent/40 text-accent text-sm font-medium px-4 py-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
