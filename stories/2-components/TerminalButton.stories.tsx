import type { Meta, StoryObj } from '@storybook/nextjs'
import { TerminalButton } from '@/components/ui/TerminalButton'
import { ArrowRight, Download, Github } from 'lucide-react'

const meta = {
  title: 'Components/Buttons/Terminal',
  component: TerminalButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Terminal-style button with typewriter effect and ASCII border'
      }
    }
  },
  argTypes: {
    href: {
      control: 'text'
    },
    icon: {
      control: false
    }
  }
} satisfies Meta<typeof TerminalButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Execute Command'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Deploy Project',
    icon: <ArrowRight size={16} />
  }
}

export const AsLink: Story = {
  args: {
    children: 'View Documentation',
    href: '/docs'
  }
}

export const GitHubLink: Story = {
  args: {
    children: 'View Source',
    href: 'https://github.com',
    icon: <Github size={16} />
  }
}

export const DownloadAction: Story = {
  args: {
    children: 'Download CLI',
    icon: <Download size={16} />,
    onClick: () => alert('Download started!')
  }
}