import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Typography system and text styles',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => (
    <div className="bg-black min-h-screen">
      <div className="space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white">Heading 1</h1>
          <h2 className="text-5xl font-bold text-white">Heading 2</h2>
          <h3 className="text-4xl font-bold text-white">Heading 3</h3>
          <h4 className="text-3xl font-semibold text-white">Heading 4</h4>
          <h5 className="text-2xl font-semibold text-white">Heading 5</h5>
          <h6 className="text-xl font-semibold text-white">Heading 6</h6>
        </div>
      </div>
    </div>
  ),
}

export const Gradients: Story = {
  render: () => (
    <div className="bg-black min-h-screen">
      <div className="space-y-6 p-8">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          Violet Gradient
        </h2>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Blue Gradient
        </h2>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Green Gradient
        </h2>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
          Pink Gradient
        </h2>
        <h2 className="text-5xl font-bold bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Multi-Color Gradient
        </h2>
      </div>
    </div>
  ),
}

export const BodyText: Story = {
  render: () => (
    <div className="bg-black min-h-screen">
      <div className="space-y-6 p-8 max-w-3xl">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Large</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            This is large body text used for important introductions and hero content. It provides
            excellent readability while maintaining visual hierarchy.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Regular</h3>
          <p className="text-base text-gray-300 leading-relaxed">
            Regular body text is the foundation of content presentation. It balances readability
            with information density, making it perfect for articles, descriptions, and general
            content areas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Small</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Small text is used for supporting information, captions, and metadata. It provides
            additional context without competing with primary content.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Extra Small</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Extra small text is reserved for labels, timestamps, and tertiary information that needs
            to be present but not prominent.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const Monospace: Story = {
  render: () => (
    <div className="bg-black min-h-screen">
      <div className="space-y-6 p-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white mb-4">Terminal Text</h3>
          <p className="font-mono text-green-400">$ npm install @newth/design-system</p>
          <p className="font-mono text-gray-400">+ @newth/design-system@1.0.0</p>
          <p className="font-mono text-blue-400">✓ Installation complete</p>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <pre className="font-mono text-sm text-gray-300">
            {`const config = {
  theme: 'cyberpunk',
  animations: true,
  performance: 'optimized'
}`}
          </pre>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-gray-500">SHA: a1b2c3d4e5f6g7h8i9j0</p>
          <p className="font-mono text-xs text-gray-500">Build: 2024.1.0-stable</p>
          <p className="font-mono text-xs text-gray-500">Status: READY</p>
        </div>
      </div>
    </div>
  ),
}

export const TextStyles: Story = {
  render: () => (
    <div className="bg-black min-h-screen">
      <div className="space-y-8 p-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Font Weights</h3>
            <div className="space-y-2">
              <p className="text-lg font-thin text-white">Thin (100)</p>
              <p className="text-lg font-light text-white">Light (300)</p>
              <p className="text-lg font-normal text-white">Regular (400)</p>
              <p className="text-lg font-medium text-white">Medium (500)</p>
              <p className="text-lg font-semibold text-white">Semibold (600)</p>
              <p className="text-lg font-bold text-white">Bold (700)</p>
              <p className="text-lg font-black text-white">Black (900)</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Text Colors</h3>
            <div className="space-y-2">
              <p className="text-lg text-white">Primary White</p>
              <p className="text-lg text-gray-300">Light Gray</p>
              <p className="text-lg text-gray-400">Medium Gray</p>
              <p className="text-lg text-gray-500">Dark Gray</p>
              <p className="text-lg text-violet-400">Accent Violet</p>
              <p className="text-lg text-blue-400">Accent Blue</p>
              <p className="text-lg text-green-400">Accent Green</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
