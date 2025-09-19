import ProjectsPageContent from './ProjectsPageContent'
import { generateSEO } from '@/lib/metadata'

export const metadata = generateSEO({
  title: 'Projects Portfolio',
  description:
    "Browse Oliver Newth's open-source tools, AI experiments, and production-ready web applications built for high-impact teams.",
  path: '/projects',
})

export default function ProjectsPage() {
  return <ProjectsPageContent />
}
