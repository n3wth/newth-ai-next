import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Left side - Copyright */}
          <p className="text-sm text-gray-400 order-2 sm:order-1">
            © {currentYear} Oliver Newth. All rights reserved.
          </p>

          {/* Right side - Navigation and Social Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm order-1 sm:order-2">
            <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
            <Link
              href={`mailto:${socialLinks.email}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <span className="text-gray-600">|</span>
            <a
              href={socialLinks.github}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
