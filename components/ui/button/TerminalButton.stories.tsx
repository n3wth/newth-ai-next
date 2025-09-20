import type { Meta, StoryObj } from '@storybook/nextjs'
import { TerminalButton } from '@/components/ui/TerminalButton'

const meta = {
  title: 'Components/Buttons/Terminal',
  component: TerminalButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Terminal-style button with typewriter effect and ASCII border',
      },
    },
  },
  argTypes: {
    href: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TerminalButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Execute Command',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Deploy Project',
  },
}

export const AsLink: Story = {
  args: {
    children: 'View Documentation',
    href: '/docs',
  },
}

export const GitHubLink: Story = {
  args: {
    children: 'View Source',
    href: 'https://github.com',
  },
}

export const DownloadAction: Story = {
  args: {
    children: 'Download CLI',
    onClick: () => alert('Download started!'),
  },
}
