import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-violet-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
