import type { Meta, StoryObj } from '@storybook/nextjs'
import { ProjectCard } from '@/components/ProjectCard'

const meta = {
  title: 'Components/Cards/Project',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Interactive project card with hover effects and metrics',
      },
    },
  },
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
      tags: ['React', 'TypeScript', 'Tailwind'],
      tech: ['React', 'TypeScript', 'Tailwind'], // backward compat
      status: 'active' as const,
      featured: false,
      color: 'text-blue-400',
    },
  },
}

export const Featured: Story = {
  args: {
    project: {
      id: 'featured-project',
      title: 'Featured AI Project',
      description:
        'Production-ready AI solution with advanced capabilities and real-time processing',
      year: '2024',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'], // backward compat
      status: 'active' as const,
      link: 'https://example.com',
      github: 'https://github.com',
      featured: true,
      color: 'text-violet-400',
      metrics: [
        { label: '99.9% uptime', color: 'text-green-400' },
        { label: '<5ms latency', color: 'text-blue-400' },
      ],
    },
  },
}

export const Grid: Story = {
  args: {
    project: {
      id: 'default',
      title: 'Project',
      description: 'Description',
      tags: ['Tech'],
      tech: ['Tech'],
      featured: false,
      status: 'active' as const,
    },
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl">
      <ProjectCard
        project={{
          id: 'project-1',
          title: 'E-commerce Platform',
          description: 'Full-stack solution with payment processing',
          year: '2024',
          tags: ['Next.js', 'Stripe', 'PostgreSQL'],
          tech: ['Next.js', 'Stripe', 'PostgreSQL'], // backward compat
          status: 'active' as const,
          featured: true,
          color: 'text-emerald-400',
          metrics: [
            { label: '10K+ users', color: 'text-emerald-400' },
            { label: '$1M+ processed', color: 'text-green-400' },
          ],
        }}
      />
      <ProjectCard
        project={{
          id: 'project-2',
          title: 'Data Analytics Dashboard',
          description: 'Real-time visualization and reporting',
          year: '2024',
          tags: ['React', 'D3.js', 'WebSockets'],
          tech: ['React', 'D3.js', 'WebSockets'], // backward compat
          status: 'active' as const,
          featured: false,
          color: 'text-orange-400',
        }}
      />
    </div>
  ),
}
