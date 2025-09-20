import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { ContactSectionProps } from '@/lib/types'

export function ContactSection({
  title = 'Ready to ship something amazing?',
  subtitle = 'I work with teams that move fast and dream big.',
}: ContactSectionProps) {
  return (
    <section className="py-32 bg-black">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-normal mb-6 text-white font-sans">{title}</h2>
          <p className="text-lg text-gray-400 mb-12 font-sans">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href={socialLinks.github} external variant="primary">
              GitHub
            </Button>
            <Button href={socialLinks.linkedin} external variant="secondary">
              LinkedIn
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <a
              href="https://storybook.newth.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Component Library →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
