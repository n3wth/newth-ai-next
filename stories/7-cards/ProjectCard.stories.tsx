import type { Meta, StoryObj } from '@storybook/nextjs'
import { ProjectCard } from '@/components/ProjectCard'

const meta = {
  title: 'Components/Cards/Project',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Interactive project card with hover effects and metrics'
      }
    }
  }
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    project: {
      id: 'example-project',
      title: 'Example Project',
      description: 'A showcase project demonstrating modern web development techniques',
      year: '2024',
      tech: ['React', 'TypeScript', 'Tailwind'],
      featured: false,
      color: 'text-blue-400'
    }
  }
}

export const Featured: Story = {
  args: {
    project: {
      id: 'featured-project',
      title: 'Featured AI Project',
      description: 'Production-ready AI solution with advanced capabilities and real-time processing',
      year: '2024',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
      color: 'text-violet-400',
      metrics: [
        { label: '99.9% uptime', color: 'text-green-400' },
        { label: '<5ms latency', color: 'text-blue-400' }
      ]
    }
  }
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl">
      <ProjectCard
        project={{
          id: 'project-1',
          title: 'E-commerce Platform',
          description: 'Full-stack solution with payment processing',
          year: '2024',
          tech: ['Next.js', 'Stripe', 'PostgreSQL'],
          featured: true,
          color: 'text-emerald-400',
          metrics: [
            { label: '10K+ users', color: 'text-emerald-400' },
            { label: '$1M+ processed', color: 'text-green-400' }
          ]
        }}
      />
      <ProjectCard
        project={{
          id: 'project-2',
          title: 'Data Analytics Dashboard',
          description: 'Real-time visualization and reporting',
          year: '2024',
          tech: ['React', 'D3.js', 'WebSockets'],
          featured: false,
          color: 'text-orange-400'
        }}
      />
    </div>
  )
}