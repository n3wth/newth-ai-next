import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Docs/Accessibility',
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

export const Guidelines: Story = {
  render: () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Header
          title="Accessibility"
          subtitle="Building inclusive experiences for all users"
          badge="WCAG 2.1 AA"
        />

        <Section title="Core Principles">
          <div className="grid md:grid-cols-2 gap-6">
            <PrincipleCard
              icon="👁"
              title="Perceivable"
              points={[
                'Sufficient color contrast (4.5:1 minimum)',
                'Text alternatives for images',
                'Captions for video content',
                'Responsive text sizing'
              ]}
            />
            <PrincipleCard
              icon="⌨️"
              title="Operable"
              points={[
                'Keyboard accessible',
                'No keyboard traps',
                'Skip links provided',
                'Sufficient time limits'
              ]}
            />
            <PrincipleCard
              icon="📖"
              title="Understandable"
              points={[
                'Clear error messages',
                'Consistent navigation',
                'Predictable functionality',
                'Plain language'
              ]}
            />
            <PrincipleCard
              icon="💪"
              title="Robust"
              points={[
                'Valid HTML markup',
                'ARIA labels where needed',
                'Screen reader compatible',
                'Progressive enhancement'
              ]}
            />
          </div>
        </Section>

        <Section title="Keyboard Navigation">
          <div className="space-y-6">
            <KeyboardDemo />
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Common Keyboard Shortcuts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <KeyBinding shortcut="Tab" description="Move focus forward" />
                <KeyBinding shortcut="Shift + Tab" description="Move focus backward" />
                <KeyBinding shortcut="Enter" description="Activate buttons and links" />
                <KeyBinding shortcut="Space" description="Toggle checkboxes, activate buttons" />
                <KeyBinding shortcut="Arrow Keys" description="Navigate menus and tabs" />
                <KeyBinding shortcut="Escape" description="Close modals and popovers" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Screen Reader Support">
          <div className="space-y-4">
            <CodeExample
              title="Proper Button Labeling"
              good={`<Button aria-label="Save document">
  <SaveIcon />
</Button>`}
              bad={`<Button>
  <SaveIcon />
</Button>`}
            />

            <CodeExample
              title="Descriptive Link Text"
              good={`<a href="/docs">
  Read the documentation
</a>`}
              bad={`<a href="/docs">
  Click here
</a>`}
            />

            <CodeExample
              title="Form Labels"
              good={`<label htmlFor="email">
  Email Address
</label>
<input id="email" type="email" />`}
              bad={`<input
  type="email"
  placeholder="Email"
/>`}
            />
          </div>
        </Section>

        <Section title="Color Contrast">
          <div className="space-y-6">
            <ContrastDemo />
            <div className="grid md:grid-cols-3 gap-4">
              <ContrastCard
                bg="bg-black"
                fg="text-white"
                ratio="21:1"
                status="AAA"
              />
              <ContrastCard
                bg="bg-gray-900"
                fg="text-gray-300"
                ratio="7.5:1"
                status="AA"
              />
              <ContrastCard
                bg="bg-gray-800"
                fg="text-gray-500"
                ratio="3.1:1"
                status="Fail"
              />
            </div>
          </div>
        </Section>

        <Section title="Testing Checklist">
          <div className="space-y-3">
            <ChecklistItem>Navigate entire page using only keyboard</ChecklistItem>
            <ChecklistItem>Test with screen reader (NVDA, JAWS, VoiceOver)</ChecklistItem>
            <ChecklistItem>Verify color contrast ratios</ChecklistItem>
            <ChecklistItem>Check focus indicators are visible</ChecklistItem>
            <ChecklistItem>Validate HTML markup</ChecklistItem>
            <ChecklistItem>Test with browser zoom at 200%</ChecklistItem>
            <ChecklistItem>Verify error messages are descriptive</ChecklistItem>
            <ChecklistItem>Check alt text for images</ChecklistItem>
            <ChecklistItem>Test with keyboard only (no mouse)</ChecklistItem>
            <ChecklistItem>Verify ARIA labels are accurate</ChecklistItem>
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

function PrincipleCard({ icon, title, points }: { icon: string; title: string; points: string[] }) {
  return (
    <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/50">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-gray-400 flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function KeyboardDemo() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <p className="text-sm text-gray-400 mb-4">Try tabbing through these elements:</p>
      <div className="flex gap-4">
        <Button variant="primary">First</Button>
        <Button variant="secondary">Second</Button>
        <Button variant="ghost">Third</Button>
      </div>
    </div>
  )
}

function KeyBinding({ shortcut, description }: { shortcut: string; description: string }) {
  return (
    <div className="flex items-center gap-3">
      <kbd className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-gray-300">
        {shortcut}
      </kbd>
      <span className="text-sm text-gray-400">{description}</span>
    </div>
  )
}

function CodeExample({ title, good, bad }: { title: string; good: string; bad: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-green-400">✓</span>
          <span className="text-sm font-semibold text-green-400">Good: {title}</span>
        </div>
        <pre className="p-4 bg-gray-900 rounded text-xs overflow-x-auto">
          <code className="text-gray-300">{good}</code>
        </pre>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-red-400">✗</span>
          <span className="text-sm font-semibold text-red-400">Bad</span>
        </div>
        <pre className="p-4 bg-gray-900 rounded text-xs overflow-x-auto">
          <code className="text-gray-300">{bad}</code>
        </pre>
      </div>
    </div>
  )
}

function ContrastDemo() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg space-y-4">
      <h3 className="text-lg font-semibold">Live Contrast Examples</h3>
      <div className="space-y-2">
        <div className="p-3 bg-black text-white rounded">
          White on Black - Ratio: 21:1 (AAA)
        </div>
        <div className="p-3 bg-gray-800 text-gray-300 rounded">
          Light Gray on Dark Gray - Ratio: 7.5:1 (AA)
        </div>
        <div className="p-3 bg-violet-600 text-white rounded">
          White on Violet - Ratio: 6.7:1 (AA)
        </div>
      </div>
    </div>
  )
}

function ContrastCard({ bg, fg, ratio, status }: { bg: string; fg: string; ratio: string; status: string }) {
  const statusColors = {
    'AAA': 'text-green-400 border-green-400/50',
    'AA': 'text-yellow-400 border-yellow-400/50',
    'Fail': 'text-red-400 border-red-400/50'
  }

  return (
    <div className={`p-4 border rounded-lg ${statusColors[status as keyof typeof statusColors]}`}>
      <div className={`${bg} ${fg} p-3 rounded mb-3`}>
        Sample Text
      </div>
      <div className="space-y-1 text-sm">
        <div>Ratio: <span className="font-mono">{ratio}</span></div>
        <div>Status: <span className="font-semibold">{status}</span></div>
      </div>
    </div>
  )
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 p-3 bg-gray-900/50 rounded hover:bg-gray-900 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-violet-500 focus:ring-violet-500" />
      <span className="text-gray-300">{children}</span>
    </label>
  )
}