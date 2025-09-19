'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left side - Navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
            <Link href={`mailto:${socialLinks.email}`} className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side - Social Links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href={socialLinks.github}
              className="text-sm text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              className="text-sm text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">
            © {currentYear} Oliver Newth. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}