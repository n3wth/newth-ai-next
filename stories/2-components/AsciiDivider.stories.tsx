import type { Meta, StoryObj } from '@storybook/nextjs'
import { AsciiDivider } from '@/components/ui/AsciiDivider'

const meta = {
  title: 'Components/Typography/ASCII Divider',
  component: AsciiDivider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'ASCII art divider for terminal-style interfaces'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['simple', 'double', 'heavy', 'dashed', 'wave', 'zigzag']
    }
  }
} satisfies Meta<typeof AsciiDivider>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <div>
        <p className="text-gray-400 mb-2">Simple:</p>
        <AsciiDivider variant="simple" />
      </div>
      <div>
        <p className="text-gray-400 mb-2">Double:</p>
        <AsciiDivider variant="double" />
      </div>
      <div>
        <p className="text-gray-400 mb-2">Heavy:</p>
        <AsciiDivider variant="heavy" />
      </div>
      <div>
        <p className="text-gray-400 mb-2">Dashed:</p>
        <AsciiDivider variant="dashed" />
      </div>
      <div>
        <p className="text-gray-400 mb-2">Wave:</p>
        <AsciiDivider variant="wave" />
      </div>
      <div>
        <p className="text-gray-400 mb-2">Zigzag:</p>
        <AsciiDivider variant="zigzag" />
      </div>
    </div>
  )
}

export const Simple: Story = {
  args: {
    variant: 'simple'
  }
}

export const Wave: Story = {
  args: {
    variant: 'wave'
  }
}