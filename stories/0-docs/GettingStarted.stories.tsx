import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Docs/Getting Started',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewMode: 'story',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Installation: Story = {
  render: () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Header
          title="Getting Started"
          subtitle="Everything you need to start using the N3WTH Design System"
        />

        <Section title="Installation">
          <CodeBlock
            language="bash"
            code={`# Using npm
npm install @newth/design-system

# Using yarn
yarn add @newth/design-system

# Using pnpm
pnpm add @newth/design-system`}
          />
        </Section>

        <Section title="Basic Setup">
          <p className="text-gray-400 mb-4">
            Import the CSS and components in your application:
          </p>
          <CodeBlock
            language="jsx"
            code={`import '@newth/design-system/styles.css'
import { Button, WarpBackground } from '@newth/design-system'

function App() {
  return (
    <WarpBackground>
      <Button variant="primary">
        Get Started
      </Button>
    </WarpBackground>
  )
}`}
          />
        </Section>

        <Section title="TypeScript Support">
          <p className="text-gray-400 mb-4">
            Full TypeScript support with exported types:
          </p>
          <CodeBlock
            language="typescript"
            code={`import type { ButtonProps } from '@newth/design-system'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}`}
          />
        </Section>

        <Section title="Required Dependencies">
          <div className="grid md:grid-cols-2 gap-6">
            <DependencyCard
              title="React"
              version="^18.0.0"
              description="React 18 or higher required for concurrent features"
            />
            <DependencyCard
              title="Tailwind CSS"
              version="^3.0.0"
              description="Utility-first CSS framework for styling"
            />
            <DependencyCard
              title="Framer Motion"
              version="^10.0.0"
              description="Production-ready animation library"
            />
            <DependencyCard
              title="TypeScript"
              version="^5.0.0"
              description="Optional but recommended for type safety"
            />
          </div>
        </Section>

        <Section title="Next Steps">
          <div className="grid md:grid-cols-3 gap-4">
            <NextStepCard
              icon="📖"
              title="Read the Docs"
              description="Learn about components and patterns"
            />
            <NextStepCard
              icon="🎨"
              title="Explore Components"
              description="Browse our component library"
            />
            <NextStepCard
              icon="🚀"
              title="View Examples"
              description="See real-world implementations"
            />
          </div>
        </Section>
      </div>
    </div>
  ),
}

export const Configuration: Story = {
  render: () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Header
          title="Configuration"
          subtitle="Customize the design system to match your brand"
        />

        <Section title="Theme Configuration">
          <CodeBlock
            language="jsx"
            code={`// theme.config.js
export default {
  colors: {
    primary: '#8b5cf6',
    secondary: '#3b82f6',
    accent: '#10b981',
  },
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  spacing: {
    unit: 8, // Base spacing unit in pixels
  },
  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
  },
}`}
          />
        </Section>

        <Section title="Component Defaults">
          <p className="text-gray-400 mb-4">
            Override default props globally:
          </p>
          <CodeBlock
            language="jsx"
            code={`import { ThemeProvider } from '@newth/design-system'

const config = {
  components: {
    Button: {
      variant: 'secondary',
      size: 'lg',
    },
    Card: {
      bordered: true,
    },
  },
}

function App() {
  return (
    <ThemeProvider config={config}>
      {/* Your app */}
    </ThemeProvider>
  )
}`}
          />
        </Section>
      </div>
    </div>
  ),
}

// Helper Components
function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b border-gray-800 pb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-400">{subtitle}</p>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  )
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative group">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-xs text-gray-400">
          Copy
        </button>
      </div>
      <pre className="p-6 bg-gray-900 rounded-lg overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  )
}

function DependencyCard({ title, version, description }: { title: string; version: string; description: string }) {
  return (
    <div className="p-4 border border-gray-800 rounded-lg bg-gray-900/50">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-white">{title}</h3>
        <span className="text-xs font-mono text-violet-400">{version}</span>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

function NextStepCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/50 hover:border-gray-700 transition-colors">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}