import NewsletterPageContent from './NewsletterPageContent'
import { generateSEO } from '@/lib/metadata'

export const metadata = generateSEO({
  title: 'Newsletter for AI Builders',
  description:
    'Subscribe for weekly updates on AI development, new tools, and experiments from Oliver Newth—no spam, just practical insights.',
  path: '/newsletter',
})

export default function NewsletterPage() {
  return <NewsletterPageContent />
}
