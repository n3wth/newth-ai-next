import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { ContactSectionProps } from '@/lib/types'

export function ContactSection({
  title = 'Ready to ship something amazing?',
  subtitle = 'I work with teams that move fast and dream big.',
}: ContactSectionProps) {
  return (
    <section className="py-32 bg-black" role="region" aria-labelledby="contact-heading">
      <Container>
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-sans tracking-tight"
          >
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            role="group"
            aria-label="Social media links"
          >
            <Button
              href={socialLinks.github}
              external
              variant="primary"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </Button>
            <Button
              href={socialLinks.linkedin}
              external
              variant="secondary"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <a
              href="https://storybook.newth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="View my component library on Storybook (opens in new tab)"
            >
              Component Library →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
