import type { Meta, StoryObj } from '@storybook/nextjs'
import { HeroSection } from '@/components/sections/HeroSectionOptimized'

const meta = {
  title: 'Sections/Hero',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full-screen hero section with animated background',
      },
    },
  },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomContent: Story = {
  args: {
    title: {
      line1: 'Building the future',
      line2: 'one line at a time.',
    },
    subtitle: 'Full-stack developer passionate about creating exceptional digital experiences.',
    primaryCTA: {
      text: 'View Projects',
      href: '#projects',
    },
    secondaryCTA: {
      text: 'Contact Me',
      href: '#contact',
    },
  },
}
