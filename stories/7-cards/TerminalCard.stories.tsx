import type { Meta, StoryObj } from '@storybook/nextjs'
import { TerminalCard } from '@/components/ui/TerminalCard'

const meta = {
  title: 'Components/Cards/Terminal',
  component: TerminalCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        component: 'Terminal-style card with ASCII borders and monospace text'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text'
    }
  }
} satisfies Meta<typeof TerminalCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Terminal Output',
    children: (
      <div className="space-y-2">
        <p className="text-green-400">$ npm run build</p>
        <p className="text-gray-400">Building for production...</p>
        <p className="text-blue-400">✓ Compiled successfully</p>
      </div>
    )
  }
}

export const SystemInfo: Story = {
  args: {
    title: 'System Status',
    children: (
      <div className="space-y-2 font-mono text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">CPU:</span>
          <span className="text-green-400">12%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className="text-yellow-400">67%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Disk:</span>
          <span className="text-red-400">89%</span>
        </div>
      </div>
    )
  }
}

export const CodeBlock: Story = {
  args: {
    title: 'server.js',
    children: (
      <pre className="text-sm text-gray-300">
        <code>{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);`}</code>
      </pre>
    )
  }
}