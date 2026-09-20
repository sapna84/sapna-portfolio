// Placeholder avatar illustration. Replace the <img> src with the real photo
// at /public/profile.jpg (or /public/profile-2.jpg) once available — the
// component will pick it up automatically, see README for instructions.

export function CircleAvatar({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1.5 rounded-full bg-accent/20 blur-md" aria-hidden="true" />
      <div className="relative rounded-full border-2 border-accent shadow-glow overflow-hidden bg-card aspect-square">
        <PlaceholderIllustration />
      </div>
    </div>
  )
}

export function FramedAvatar({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-1.5 rounded-3xl bg-accent/15 blur-md" aria-hidden="true" />
      <div className="relative rounded-3xl border-2 border-accent shadow-glow overflow-hidden bg-card aspect-[4/5]">
        <PlaceholderIllustration />
      </div>
    </div>
  )
}

function PlaceholderIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14251A" />
          <stop offset="100%" stopColor="#06100B" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#avatarBg)" />
      <circle cx="100" cy="80" r="34" fill="#A8E95A" fillOpacity="0.25" />
      <circle cx="100" cy="80" r="34" stroke="#A8E95A" strokeWidth="1.5" fill="none" />
      <path
        d="M40 190c6-38 34-58 60-58s54 20 60 58"
        fill="#A8E95A"
        fillOpacity="0.18"
        stroke="#A8E95A"
        strokeWidth="1.5"
      />
    </svg>
  )
}
