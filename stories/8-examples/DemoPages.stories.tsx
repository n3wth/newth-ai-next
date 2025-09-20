import type { Meta, StoryObj } from '@storybook/nextjs'
import DemosIndex from '@/app/demos/page'
import LogoEffectsPage from '@/app/demos/logo-effects/page'
import BackgroundsDemo from '@/app/demos/backgrounds-demo/page'
import HeroNoHeader from '@/app/demos/hero-no-header/page'

const meta = {
  title: 'Examples/Pages/Demos',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const DemoIndex: Story = {
  render: () => <DemosIndex />,
  parameters: {
    docs: {
      description: {
        story: 'Demo index page showing all available demos',
      },
    },
  },
}

export const LogoEffects: Story = {
  render: () => <LogoEffectsPage />,
  parameters: {
    docs: {
      description: {
        story: 'Logo animation effects with ASCII art and keyframe testing',
      },
    },
  },
}

export const BackgroundEffects: Story = {
  render: () => <BackgroundsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'All background effects showcase with live switching',
      },
    },
  },
}

export const HeroStandalone: Story = {
  render: () => <HeroNoHeader />,
  parameters: {
    docs: {
      description: {
        story: 'Hero section without navigation header',
      },
    },
  },
}
