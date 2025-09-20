import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Docs/Testing',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewMode: 'story',
  },
  tags: ['autodocs', 'testing'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const InteractionTesting: Story = {
  render: () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Header
          title="Testing"
          subtitle="Comprehensive testing with Storybook 9"
          badge="Vitest + Playwright"
        />

        <Section title="Testing Philosophy">
          <div className="grid md:grid-cols-3 gap-6">
            <TestTypeCard
              icon="⚡"
              title="Unit Tests"
              description="Fast, isolated logic tests"
              pros={["Lightning fast", "Easy to maintain", "High coverage"]}
              cons={["Limited browser fidelity", "No visual testing"]}
              tools={["Vitest", "Testing Library"]}
            />
            <TestTypeCard
              icon="🎯"
              title="Component Tests"
              description="Sweet spot for UI testing"
              pros={["Good balance", "Visual + functional", "Real browser"]}
              cons={["Setup complexity", "Moderate speed"]}
              tools={["Storybook Test", "Playwright CT"]}
              recommended
            />
            <TestTypeCard
              icon="🌐"
              title="E2E Tests"
              description="Full user journey tests"
              pros={["Highest confidence", "Real environment", "User flows"]}
              cons={["Slow execution", "Flaky tests", "Hard to maintain"]}
              tools={["Playwright", "Cypress"]}
            />
          </div>
        </Section>

        <Section title="Interactive Component Test">
          <InteractiveDemo />
        </Section>

        <Section title="Test Patterns">
          <div className="space-y-6">
            <TestPattern
              title="Interaction Testing"
              code={`// Button.stories.tsx
import { expect } from '@storybook/test'
import { userEvent, within } from '@storybook/testing-library'

export const Clicked: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await userEvent.click(button)

    await expect(button).toHaveTextContent('Clicked!')
  }
}`}
              description="Simulate user interactions and verify behavior"
            />

            <TestPattern
              title="Accessibility Testing"
              code={`// Card.stories.tsx
export const Accessible: Story = {
  parameters: {
    a11y: {
      config: {
        rules: {
          'color-contrast': { enabled: true }
        }
      }
    }
  }
}`}
              description="Automatically check WCAG violations with axe-core"
            />

            <TestPattern
              title="Visual Regression Testing"
              code={`// Hero.stories.tsx
export const Default: Story = {
  parameters: {
    chromatic: {
      viewports: [320, 768, 1440],
      delay: 500 // Wait for animations
    }
  }
}`}
              description="Catch visual regressions with Chromatic"
            />

            <TestPattern
              title="Theme Testing with Globals"
              code={`// Button.stories.tsx
export const DarkMode: Story = {
  globals: { theme: 'dark' },
  play: async ({ globals }) => {
    expect(globals.theme).toBe('dark')
  }
}`}
              description="Test components in different theme contexts"
            />
          </div>
        </Section>

        <Section title="Running Tests">
          <div className="space-y-4">
            <CommandCard
              command="npm run test-storybook"
              description="Run all Storybook tests in headless mode"
              output="✓ 142 tests passed"
            />
            <CommandCard
              command="npm run test-storybook --watch"
              description="Watch mode - re-run tests on file changes"
              output="Watching for changes..."
            />
            <CommandCard
              command="npm run test-storybook --coverage"
              description="Generate coverage report"
              output="Coverage: 92.3%"
            />
            <CommandCard
              command="npx chromatic --project-token=xxx"
              description="Run visual regression tests"
              output="0 visual changes detected"
            />
          </div>
        </Section>

        <Section title="Test Organization with Tags">
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Using Tags for Test Selection</h3>
            <div className="space-y-3">
              <TagExample tag="smoke" description="Critical path tests" />
              <TagExample tag="regression" description="Full regression suite" />
              <TagExample tag="visual" description="Visual regression tests only" />
              <TagExample tag="a11y" description="Accessibility tests" />
              <TagExample tag="slow" description="Long-running tests" />
              <TagExample tag="flaky" description="Known flaky tests to skip in CI" />
            </div>
            <pre className="mt-4 p-4 bg-black rounded text-xs overflow-x-auto">
              <code className="text-gray-300">{`// Run specific tagged tests
npm run test-storybook --includeTags smoke
npm run test-storybook --excludeTags flaky,slow`}</code>
            </pre>
          </div>
        </Section>

        <Section title="Coverage Reports">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Coverage Metrics</h3>
              <div className="space-y-2">
                <CoverageBar label="Statements" value={92} />
                <CoverageBar label="Branches" value={88} />
                <CoverageBar label="Functions" value={95} />
                <CoverageBar label="Lines" value={91} />
              </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Coverage by Component</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Button</span>
                  <span className="text-green-400">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">WarpBackground</span>
                  <span className="text-green-400">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">HeroSection</span>
                  <span className="text-yellow-400">87%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Footer</span>
                  <span className="text-yellow-400">82%</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  ),
}

// Helper Components
function Header({ title, subtitle, badge }: { title: string; subtitle: string; badge?: string }) {
  return (
    <div className="border-b border-gray-800 pb-8">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h1>
        {badge && (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xl text-gray-400">{subtitle}</p>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  )
}

function TestTypeCard({
  icon,
  title,
  description,
  pros,
  cons,
  tools,
  recommended
}: {
  icon: string
  title: string
  description: string
  pros: string[]
  cons: string[]
  tools: string[]
  recommended?: boolean
}) {
  return (
    <div className={`p-6 border rounded-lg ${recommended ? 'border-violet-500 bg-violet-500/10' : 'border-gray-800 bg-gray-900/50'} relative`}>
      {recommended && (
        <span className="absolute -top-3 right-4 px-2 py-1 bg-violet-500 text-white text-xs rounded-full">
          Recommended
        </span>
      )}
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-green-400 font-semibold mb-1">Pros</p>
          <ul className="text-xs text-gray-400 space-y-1">
            {pros.map((pro, i) => (
              <li key={i}>• {pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs text-red-400 font-semibold mb-1">Cons</p>
          <ul className="text-xs text-gray-400 space-y-1">
            {cons.map((con, i) => (
              <li key={i}>• {con}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs text-blue-400 font-semibold mb-1">Tools</p>
          <div className="flex flex-wrap gap-1">
            {tools.map((tool, i) => (
              <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function InteractiveDemo() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <p className="text-sm text-gray-400 mb-4">Interactive test example:</p>
      <div className="flex items-center gap-4">
        <Button
          variant="primary"
          onClick={() => {
            setCount(c => c + 1)
            setMessage(`Clicked ${count + 1} times`)
          }}
          aria-label="Increment counter"
        >
          Count: {count}
        </Button>
        <span className="text-sm text-gray-400" role="status">
          {message}
        </span>
      </div>
      <pre className="mt-4 p-4 bg-black rounded text-xs overflow-x-auto">
        <code className="text-gray-300">{`// This interaction can be tested:
await userEvent.click(button)
await expect(message).toHaveTextContent('Clicked 1 times')`}</code>
      </pre>
    </div>
  )
}

function TestPattern({ title, code, description }: { title: string; code: string; description: string }) {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-900/50">
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <pre className="p-4 bg-black text-xs overflow-x-auto">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  )
}

function CommandCard({ command, description, output }: { command: string; description: string; output: string }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <p className="text-sm text-gray-400 mb-2">{description}</p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-gray-500">$</span>
        <code className="text-sm font-mono text-violet-400">{command}</code>
      </div>
      <div className="text-xs text-green-400 font-mono">{output}</div>
    </div>
  )
}

function TagExample({ tag, description }: { tag: string; description: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="px-2 py-1 bg-violet-500/20 text-violet-400 rounded text-xs font-mono">
        {tag}
      </span>
      <span className="text-sm text-gray-400">{description}</span>
    </div>
  )
}

function CoverageBar({ label, value }: { label: string; value: number }) {
  const color = value >= 90 ? 'bg-green-500' : value >= 70 ? 'bg-yellow-500' : 'bg-red-500'

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}