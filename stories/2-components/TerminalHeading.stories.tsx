import type { Meta, StoryObj } from '@storybook/nextjs'
import { TerminalHeading } from '@/components/ui/TerminalHeading'

const meta = {
  title: 'Components/Typography/Terminal Heading',
  component: TerminalHeading,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Terminal-style heading with ASCII art and typewriter effect'
      }
    }
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6]
    }
  }
} satisfies Meta<typeof TerminalHeading>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'Main Terminal Heading',
    level: 1
  }
}

export const H2: Story = {
  args: {
    children: 'Section Heading',
    level: 2
  }
}

export const H3: Story = {
  args: {
    children: 'Subsection Title',
    level: 3
  }
}

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <TerminalHeading level={1}>Level 1 Heading</TerminalHeading>
      <TerminalHeading level={2}>Level 2 Heading</TerminalHeading>
      <TerminalHeading level={3}>Level 3 Heading</TerminalHeading>
      <TerminalHeading level={4}>Level 4 Heading</TerminalHeading>
    </div>
  )
}