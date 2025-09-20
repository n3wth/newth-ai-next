import type { Meta, StoryObj } from '@storybook/nextjs'
import { ProjectGrid } from '@/components/sections/ProjectGridSimple'

const meta = {
  title: 'Sections/Project Grid',
  component: ProjectGrid,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Grid layout for displaying project cards'
      }
    }
  }
} satisfies Meta<typeof ProjectGrid>

export default meta
type Story = StoryObj<typeof meta>

const sampleProjects = [
  {
    id: 'ai-memory',
    title: 'AI Memory Layer',
    description: 'Production-ready memory system for LLMs with sub-millisecond response times',
    year: '2024',
    tech: ['TypeScript', 'Redis', 'MCP Protocol'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    color: 'text-violet-400',
    metrics: [
      { label: '5ms response', color: 'text-violet-400' },
      { label: '1000+ users', color: 'text-green-400' }
    ]
  },
  {
    id: 'data-viz',
    title: 'Data Visualization Platform',
    description: 'Interactive dashboards for complex data analysis',
    year: '2024',
    tech: ['React', 'D3.js', 'WebGL'],
    featured: false,
    color: 'text-blue-400'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solution',
    description: 'Full-stack marketplace with real-time inventory',
    year: '2024',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    featured: true,
    color: 'text-emerald-400',
    metrics: [
      { label: '99.9% uptime', color: 'text-green-400' }
    ]
  }
]

export const Default: Story = {
  args: {
    projects: sampleProjects
  }
}

export const SingleProject: Story = {
  args: {
    projects: [sampleProjects[0]]
  }
}

export const ManyProjects: Story = {
  args: {
    projects: [...sampleProjects, ...sampleProjects].map((p, i) => ({
      ...p,
      id: `${p.id}-${i}`
    }))
  }
}