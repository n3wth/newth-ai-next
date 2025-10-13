import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/lib/config/social'
import { ContactSectionProps } from '@/lib/types'

export function ContactSection({
  title = 'Want to build something together?',
  subtitle = "I'm always interested in new challenges and collaborations.",
}: ContactSectionProps) {
  return (
    <section className="py-32 bg-black mt-20" role="region" aria-labelledby="contact-heading">
      <Container>
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-normal mb-6 text-white font-sans"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-400 mb-12 font-sans">{subtitle}</p>

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
        </div>
      </Container>
    </section>
  )
}
