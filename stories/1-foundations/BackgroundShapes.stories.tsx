import type { Meta, StoryObj } from '@storybook/nextjs'

const meta: Meta = {
  title: 'Foundations/Background Shapes',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta
type Story = StoryObj

const ShapeShowcase = ({ className, label }: { className: string; label: string }) => (
  <div className="relative w-full h-screen bg-black overflow-hidden">
    <div className={`${className} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
    <div className="absolute bottom-8 left-8 text-white/60 font-mono text-sm">{label}</div>
  </div>
)

export const AsciiCube: Story = {
  render: () => (
    <ShapeShowcase className="shape-ascii-cube" label=".shape-ascii-cube - 3D ASCII grid cube" />
  ),
}

export const AsciiPyramid: Story = {
  render: () => (
    <ShapeShowcase
      className="shape-ascii-pyramid"
      label=".shape-ascii-pyramid - 3D pyramid with glitch"
    />
  ),
}

export const GlitchSmoke: Story = {
  render: () => (
    <ShapeShowcase
      className="shape-glitch-smoke"
      label=".shape-glitch-smoke - Rising smoke with glitch"
    />
  ),
}

export const AsciiGrid: Story = {
  render: () => (
    <ShapeShowcase className="shape-ascii-grid" label=".shape-ascii-grid - 3D perspective grid" />
  ),
}

export const DigitalRain: Story = {
  render: () => (
    <ShapeShowcase className="shape-digital-rain" label=".shape-digital-rain - Matrix-style rain" />
  ),
}

export const WireframeSphere: Story = {
  render: () => (
    <ShapeShowcase
      className="shape-wireframe-sphere"
      label=".shape-wireframe-sphere - Rotating wireframe"
    />
  ),
}

export const GlitchTrail: Story = {
  render: () => (
    <ShapeShowcase className="shape-glitch-trail" label=".shape-glitch-trail - RGB shadow trail" />
  ),
}

export const AllShapes: Story = {
  name: 'All ASCII Glitch Shapes',
  render: () => (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="background-shapes">
        <div className="shape-ascii-cube" style={{ top: '10%', left: '5%' }} />
        <div className="shape-glitch-smoke" style={{ top: '60%', right: '10%' }} />
        <div className="shape-ascii-grid" style={{ bottom: '20%', left: '30%' }} />
        <div className="shape-wireframe-sphere" style={{ top: '30%', right: '25%' }} />
        <div className="shape-glitch-trail" style={{ bottom: '10%', right: '40%' }} />
        <div className="shape-digital-rain" style={{ top: '45%', left: '15%' }} />
        <div className="shape-ascii-pyramid" style={{ top: '15%', right: '45%' }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Background Shapes</h1>
          <p className="text-white/60">Blocky geometric animations</p>
        </div>
      </div>
    </div>
  ),
}

export const AnimatedBackground: Story = {
  name: 'Animated Background Example',
  render: () => (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="background-shapes">
        <div className="shape-ascii-cube" style={{ top: '-150px', left: '-100px' }} />
        <div className="shape-glitch-smoke" style={{ bottom: '-50px', right: '-200px' }} />
        <div className="shape-wireframe-sphere" style={{ top: '40%', left: '70%' }} />
        <div className="shape-digital-rain" style={{ top: '60%', left: '10%' }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="glass-panel p-12 rounded-2xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Your Content Here</h1>
          <p className="text-white/80 mb-8">Shapes animate in the background</p>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  ),
}
