import type { Meta, StoryObj } from '@storybook/nextjs'
import { SimpleAnimatedButton } from '@/components/ui/SimpleAnimatedButton'
import { Mail, Sparkles } from 'lucide-react'

const meta = {
  title: 'Components/Buttons/Simple Animated',
  component: SimpleAnimatedButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Lightweight animated button with hover effects',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style variant',
      table: {
        type: { summary: '"primary" | "secondary" | "ghost"' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: {
        type: { summary: '() => void' },
        category: 'Events',
      },
    },
  },
} satisfies Meta<typeof SimpleAnimatedButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
  },
}

export const WithIcons: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex gap-4">
      <SimpleAnimatedButton variant="primary">
        <Sparkles className="mr-2 h-4 w-4" />
        AI Powered
      </SimpleAnimatedButton>
      <SimpleAnimatedButton variant="secondary">
        Contact Us
        <Mail className="ml-2 h-4 w-4" />
      </SimpleAnimatedButton>
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <SimpleAnimatedButton className="text-sm py-1.5 px-3">Small</SimpleAnimatedButton>
      <SimpleAnimatedButton>Medium</SimpleAnimatedButton>
      <SimpleAnimatedButton className="text-lg py-3 px-6">Large</SimpleAnimatedButton>
    </div>
  ),
}
