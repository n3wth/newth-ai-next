import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Docs/Design Tokens',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    viewMode: 'story',
  },
  tags: ['autodocs', 'design-system'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <Header
          title="Design Tokens"
          subtitle="Consistent design system foundation"
          badge="v1.0.0"
        />

        <Section title="Color System">
          <div className="space-y-6">
            <ColorPalette
              name="Primary"
              colors={[
                { name: 'violet-50', value: '#f5f3ff' },
                { name: 'violet-100', value: '#ede9fe' },
                { name: 'violet-200', value: '#ddd6fe' },
                { name: 'violet-300', value: '#c4b5fd' },
                { name: 'violet-400', value: '#a78bfa' },
                { name: 'violet-500', value: '#8b5cf6' },
                { name: 'violet-600', value: '#7c3aed' },
                { name: 'violet-700', value: '#6d28d9' },
                { name: 'violet-800', value: '#5b21b6' },
                { name: 'violet-900', value: '#4c1d95' },
              ]}
            />

            <ColorPalette
              name="Neutral"
              colors={[
                { name: 'gray-50', value: '#fafafa' },
                { name: 'gray-100', value: '#f4f4f5' },
                { name: 'gray-200', value: '#e4e4e7' },
                { name: 'gray-300', value: '#d4d4d8' },
                { name: 'gray-400', value: '#a1a1aa' },
                { name: 'gray-500', value: '#71717a' },
                { name: 'gray-600', value: '#52525b' },
                { name: 'gray-700', value: '#3f3f46' },
                { name: 'gray-800', value: '#27272a' },
                { name: 'gray-900', value: '#18181b' },
              ]}
            />

            <ColorPalette
              name="Semantic"
              colors={[
                { name: 'success', value: '#10b981' },
                { name: 'warning', value: '#f59e0b' },
                { name: 'error', value: '#ef4444' },
                { name: 'info', value: '#3b82f6' },
              ]}
            />
          </div>
        </Section>

        <Section title="Typography">
          <div className="space-y-6">
            <div className="p-6 bg-gray-900 rounded-lg space-y-4">
              <TypeScale size="6xl" weight="bold" text="Display" />
              <TypeScale size="5xl" weight="bold" text="Heading 1" />
              <TypeScale size="4xl" weight="semibold" text="Heading 2" />
              <TypeScale size="3xl" weight="semibold" text="Heading 3" />
              <TypeScale size="2xl" weight="medium" text="Heading 4" />
              <TypeScale size="xl" weight="medium" text="Heading 5" />
              <TypeScale size="lg" weight="normal" text="Body Large" />
              <TypeScale size="base" weight="normal" text="Body Regular" />
              <TypeScale size="sm" weight="normal" text="Body Small" />
              <TypeScale size="xs" weight="normal" text="Caption" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FontStack
                name="Sans Serif"
                fonts={['Inter', 'system-ui', '-apple-system', 'sans-serif']}
                sample="The quick brown fox jumps over the lazy dog"
              />
              <FontStack
                name="Monospace"
                fonts={['JetBrains Mono', 'Consolas', 'Monaco', 'monospace']}
                sample="const code = { quality: 'high' }"
              />
            </div>
          </div>
        </Section>

        <Section title="Spacing">
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="space-y-3">
              <SpacingScale name="0" value="0px" />
              <SpacingScale name="1" value="4px" />
              <SpacingScale name="2" value="8px" />
              <SpacingScale name="3" value="12px" />
              <SpacingScale name="4" value="16px" />
              <SpacingScale name="5" value="20px" />
              <SpacingScale name="6" value="24px" />
              <SpacingScale name="8" value="32px" />
              <SpacingScale name="10" value="40px" />
              <SpacingScale name="12" value="48px" />
              <SpacingScale name="16" value="64px" />
              <SpacingScale name="20" value="80px" />
              <SpacingScale name="24" value="96px" />
            </div>
          </div>
        </Section>

        <Section title="Breakpoints">
          <div className="grid md:grid-cols-3 gap-4">
            <BreakpointCard
              name="Mobile"
              min="0"
              max="639px"
              prefix="sm"
              devices={['iPhone', 'Android']}
            />
            <BreakpointCard
              name="Tablet"
              min="640px"
              max="1023px"
              prefix="md"
              devices={['iPad', 'Surface']}
            />
            <BreakpointCard
              name="Desktop"
              min="1024px"
              max="∞"
              prefix="lg"
              devices={['Laptop', 'Desktop']}
            />
          </div>
        </Section>

        <Section title="Animation">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Duration</h3>
              <div className="space-y-2">
                <AnimationToken name="instant" value="0ms" />
                <AnimationToken name="fast" value="150ms" />
                <AnimationToken name="normal" value="300ms" />
                <AnimationToken name="slow" value="500ms" />
                <AnimationToken name="slower" value="1000ms" />
              </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Easing</h3>
              <div className="space-y-2">
                <AnimationToken name="ease-in" value="cubic-bezier(0.4, 0, 1, 1)" />
                <AnimationToken name="ease-out" value="cubic-bezier(0, 0, 0.2, 1)" />
                <AnimationToken name="ease-in-out" value="cubic-bezier(0.4, 0, 0.2, 1)" />
                <AnimationToken name="spring" value="cubic-bezier(0.5, 1.5, 0.5, 1)" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Shadows">
          <div className="grid md:grid-cols-4 gap-4">
            <ShadowExample name="sm" value="0 1px 2px rgba(0,0,0,0.05)" />
            <ShadowExample name="md" value="0 4px 6px rgba(0,0,0,0.1)" />
            <ShadowExample name="lg" value="0 10px 15px rgba(0,0,0,0.1)" />
            <ShadowExample name="xl" value="0 20px 25px rgba(0,0,0,0.1)" />
          </div>
        </Section>

        <Section title="Border Radius">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <RadiusExample name="none" value="0" />
            <RadiusExample name="sm" value="2px" />
            <RadiusExample name="md" value="4px" />
            <RadiusExample name="lg" value="8px" />
            <RadiusExample name="xl" value="12px" />
            <RadiusExample name="2xl" value="16px" />
            <RadiusExample name="3xl" value="24px" />
            <RadiusExample name="full" value="9999px" />
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
          <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm font-semibold">
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

function ColorPalette({ name, colors }: { name: string; colors: { name: string; value: string }[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {colors.map(({ name, value }) => (
          <div key={name} className="space-y-2">
            <div
              className="h-16 rounded-lg border border-gray-800"
              style={{ backgroundColor: value }}
            />
            <div className="text-xs space-y-1">
              <div className="text-gray-400">{name}</div>
              <div className="font-mono text-gray-500">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypeScale({ size, weight, text }: { size: string; weight: string; text: string }) {
  const sizeClasses: Record<string, string> = {
    '6xl': 'text-6xl',
    '5xl': 'text-5xl',
    '4xl': 'text-4xl',
    '3xl': 'text-3xl',
    '2xl': 'text-2xl',
    'xl': 'text-xl',
    'lg': 'text-lg',
    'base': 'text-base',
    'sm': 'text-sm',
    'xs': 'text-xs',
  }

  const weightClasses: Record<string, string> = {
    bold: 'font-bold',
    semibold: 'font-semibold',
    medium: 'font-medium',
    normal: 'font-normal',
  }

  return (
    <div className="flex items-baseline justify-between">
      <span className={`${sizeClasses[size]} ${weightClasses[weight]} text-white`}>
        {text}
      </span>
      <span className="text-xs text-gray-500 font-mono ml-4">
        {size} / {weight}
      </span>
    </div>
  )
}

function FontStack({ name, fonts, sample }: { name: string; fonts: string[]; sample: string }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h4 className="text-sm font-semibold text-violet-400 mb-2">{name}</h4>
      <p className="text-white mb-3" style={{ fontFamily: fonts.join(', ') }}>
        {sample}
      </p>
      <code className="text-xs text-gray-400">{fonts.join(', ')}</code>
    </div>
  )
}

function SpacingScale({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-400 w-8">{name}</span>
      <div
        className="bg-violet-500 h-4 rounded"
        style={{ width: value }}
      />
      <span className="text-xs text-gray-500 font-mono">{value}</span>
    </div>
  )
}

function BreakpointCard({
  name,
  min,
  max,
  prefix,
  devices
}: {
  name: string
  min: string
  max: string
  prefix: string
  devices: string[]
}) {
  return (
    <div className="p-4 border border-gray-800 rounded-lg bg-gray-900/50">
      <h3 className="font-semibold text-white mb-2">{name}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Range:</span>
          <span className="text-white font-mono">{min} - {max}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Prefix:</span>
          <span className="text-violet-400 font-mono">{prefix}:</span>
        </div>
        <div className="pt-2 border-t border-gray-700">
          <span className="text-gray-500 text-xs">{devices.join(' • ')}</span>
        </div>
      </div>
    </div>
  )
}

function AnimationToken({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{name}</span>
      <span className="font-mono text-gray-300">{value}</span>
    </div>
  )
}

function ShadowExample({ name, value }: { name: string; value: string }) {
  return (
    <div className="space-y-2">
      <div
        className="h-20 bg-white rounded-lg"
        style={{ boxShadow: value }}
      />
      <div className="text-xs">
        <div className="text-gray-400">{name}</div>
        <div className="font-mono text-gray-500 break-all">{value}</div>
      </div>
    </div>
  )
}

function RadiusExample({ name, value }: { name: string; value: string }) {
  return (
    <div className="space-y-2">
      <div
        className="h-16 bg-violet-500"
        style={{ borderRadius: value }}
      />
      <div className="text-xs text-center">
        <div className="text-gray-400">{name}</div>
        <div className="font-mono text-gray-500">{value}</div>
      </div>
    </div>
  )
}