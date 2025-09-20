import type { Meta, StoryObj } from '@storybook/nextjs'
import Home from '@/app/page'

const meta = {
  title: 'Examples/Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete home page with all sections',
      },
    },
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
