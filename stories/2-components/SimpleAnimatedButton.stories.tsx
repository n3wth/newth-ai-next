import type { Meta, StoryObj } from '@storybook/nextjs'
import { SimpleAnimatedButton } from '@/components/ui/SimpleAnimatedButton'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

const meta = {
  title: 'Components/Buttons/Simple Animated',
  component: SimpleAnimatedButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Lightweight animated button with hover effects'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof SimpleAnimatedButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary'
  }
}

export const WithIcons: Story = {
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
  )
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SimpleAnimatedButton size="sm">Small</SimpleAnimatedButton>
      <SimpleAnimatedButton size="md">Medium</SimpleAnimatedButton>
      <SimpleAnimatedButton size="lg">Large</SimpleAnimatedButton>
    </div>
  )
}