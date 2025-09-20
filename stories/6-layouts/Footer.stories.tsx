import type { Meta, StoryObj } from '@storybook/nextjs'
import { Footer } from '@/components/Footer'

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Site footer with social links and copyright',
      },
    },
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <Story />
      </div>
    ),
  ],
}
