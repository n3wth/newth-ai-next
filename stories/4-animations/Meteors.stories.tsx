import type { Meta, StoryObj } from '@storybook/nextjs'
import { Meteors } from '@/components/Meteors'

const meta = {
  title: 'Components/Animations/Meteors',
  component: Meteors,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Animated meteors falling across the screen',
      },
    },
  },
  argTypes: {
    number: {
      control: { type: 'range', min: 1, max: 50, step: 1 },
      description: 'Number of meteors',
    },
  },
} satisfies Meta<typeof Meteors>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Meteors />
    </div>
  ),
}

export const FewMeteors: Story = {
  render: () => (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Meteors number={5} />
    </div>
  ),
}

export const ManyMeteors: Story = {
  render: () => (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Meteors number={30} />
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
      <Meteors number={10} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Meteor Shower</h1>
      </div>
    </div>
  ),
}
