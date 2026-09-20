import * as icons from 'lucide-react'

// Renders a lucide-react icon by its string name, e.g. <Icon name="Github" />
export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.8 }) {
  const Cmp = icons[name] || icons.Circle
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
