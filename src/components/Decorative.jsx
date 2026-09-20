// Small decorative SVG elements used across pages: curved lines, leaves and handwritten notes.

export function HandNote({ children, className = '', rotate = -4 }) {
  return (
    <p
      className={`hand-note text-xl md:text-2xl leading-tight select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </p>
  )
}

export function CurveLine({ className = '', flip = false }) {
  return (
    <svg
      className={`deco-curve ${className}`}
      width="220"
      height="140"
      viewBox="0 0 220 140"
      fill="none"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M2 138C40 90 30 40 90 18C140 0 180 30 218 4"
        stroke="#A8E95A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LeafIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 4C13 4 4 12 4 22c0 1 0.9 2 2 2C16 24 24 15 24 4Z"
        fill="#A8E95A"
        fillOpacity="0.18"
        stroke="#A8E95A"
        strokeWidth="1.2"
      />
      <path d="M6 22C10 16 15 11 22 6" stroke="#A8E95A" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  )
}

export function CornerArrow({ className = '' }) {
  return (
    <svg
      className={className}
      width="60"
      height="50"
      viewBox="0 0 60 50"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4C20 10 30 24 26 46"
        stroke="#A8E95A"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      <path d="M26 46L18 38M26 46L20 50" stroke="#A8E95A" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function GlowBlob({ className = '' }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: 'radial-gradient(circle, rgba(168,233,90,0.25), transparent 70%)' }}
      aria-hidden="true"
    />
  )
}
