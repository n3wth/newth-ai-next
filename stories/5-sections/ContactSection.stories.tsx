import type { Meta, StoryObj } from '@storybook/nextjs'
import { ContactSection } from '@/components/sections/ContactSection'

const meta = {
  title: 'Sections/Contact',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Contact section with social links and call-to-action'
      }
    }
  }
} satisfies Meta<typeof ContactSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithGradientBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-b from-black via-purple-900/10 to-black">
        <Story />
      </div>
    )
  ]
}