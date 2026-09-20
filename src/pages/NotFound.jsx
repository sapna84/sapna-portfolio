import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="section-container py-32 text-center">
      <p className="text-accent font-mono text-sm mb-3">404</p>
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-muted mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-full">
        Back to Home
      </Link>
    </div>
  )
}
