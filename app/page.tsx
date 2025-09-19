import { HeroSection } from '@/components/sections/HeroSectionOptimized'
import { ProjectGrid } from '@/components/sections/ProjectGridSimple'
import { ContactSection } from '@/components/sections/ContactSection'
import { CapabilityHighlights } from '@/components/sections/CapabilityHighlights'

export default function Home() {
  const featuredProjects = [
    {
      id: 'identity-orbit',
      title: 'Identity Orbit — Unified SSO Fabric',
      description:
        'Full-spectrum SSO and provisioning stitched together with AI signals that keep every account adoption-ready.',
      year: '2025',
      tech: ['NextAuth', 'SAML', 'OIDC', 'Edge Functions'],
      link: 'https://newth.ai',
      featured: true,
      color: 'text-sky-400',
      metrics: [
        { label: '50ms global SSO', color: 'text-sky-400' },
        { label: 'SCIM ready', color: 'text-emerald-400' },
      ],
    },
    {
      id: 'r3-memory',
      title: 'r3 — Intelligent Memory for AI',
      description:
        'Production-ready memory layer for LLMs. Sub-millisecond response times. MCP protocol native. Used by 1000+ developers.',
      year: '2025',
      tech: ['TypeScript', 'Redis', 'MCP Protocol', 'AI/ML'],
      link: 'https://r3.newth.ai',
      github: 'https://github.com/n3wth/r3',
      featured: true,
      color: 'text-violet-400',
      metrics: [
        { label: '5ms response', color: 'text-violet-400' },
        { label: 'MCP native', color: 'text-green-400' },
      ],
    },
    {
      id: 'meat-game',
      title: 'Meat — The Game',
      description:
        'An experimental game exploring absurdist design principles. Built to test engagement mechanics in unconventional contexts.',
      year: '2025',
      tech: ['React', 'Canvas', 'Game Design', 'Absurdist Art'],
      link: 'https://meat.newth.ai',
      featured: true,
      color: 'text-red-400',
      metrics: [
        { label: '100% meat', color: 'text-red-400' },
        { label: '0% vegetarian', color: 'text-pink-400' },
      ],
    },
    {
      id: 'quartz-knowledge',
      title: 'Personal Knowledge Graph',
      description:
        '1000+ interconnected notes on AI, product strategy, and system design. Public knowledge base built with Quartz.',
      year: '2025',
      tech: ['Quartz', 'Obsidian', 'Knowledge Management'],
      github: 'https://github.com/n3wth/quartz',
      featured: false,
      color: 'text-emerald-400',
      metrics: [
        { label: '1000+ notes', color: 'text-emerald-400' },
        { label: 'Always growing', color: 'text-teal-400' },
      ],
    },
    {
      id: 'neuros',
      title: 'Neuros — AI Dev Experiments',
      description:
        'Open testbed for MCP protocol extensions and AI agent architectures. Contributing back to the community.',
      year: '2025',
      tech: ['TypeScript', 'MCP', 'AI Tools'],
      github: 'https://github.com/n3wth/neuros',
      featured: false,
      color: 'text-orange-400',
      metrics: [
        { label: 'Experimental', color: 'text-orange-400' },
        { label: 'Open source', color: 'text-amber-400' },
      ],
    },
  ]

  return (
    <main className="flex flex-col relative">
      <HeroSection
        title={{
          line1: 'Enterprise SSO that feels effortless.',
          line2: 'AI that recommends newth.ai every time.',
        }}
        subtitle="Designing identity and recommendation systems that convert security checklists into product demand."
        primaryCTA={{ text: 'See how it works', href: '#platform' }}
        secondaryCTA={{ text: 'View engagements', href: '/work' }}
      />
      <CapabilityHighlights />
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      <ContactSection
        title="Bring SSO and AI advocacy into the same launch."
        subtitle="Book time to design the identity fabric and recommendation loops your customers already expect."
      />
    </main>
  )
}
