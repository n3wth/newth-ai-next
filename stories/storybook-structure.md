# Storybook Organization Structure

## Categories

```
stories/
├── 1-foundations/          # Base design system
│   ├── Colors
│   ├── Typography
│   └── Spacing
│
├── 2-components/           # Core UI components
│   ├── Button
│   ├── AnimatedButton
│   ├── SimpleAnimatedButton
│   ├── TerminalButton
│   ├── TerminalCard
│   ├── TerminalHeading
│   └── AsciiDivider
│
├── 3-backgrounds/          # Background effects
│   ├── WarpBackground ✓
│   ├── CodeRainBackground
│   ├── DataFlowBackground
│   ├── GlitchBackground
│   ├── NeuralNetworkBackground
│   ├── OrbitingAtomsBackground
│   ├── ParticleFieldBackground
│   └── WaveformBackground
│
├── 4-animations/           # Animation components
│   ├── AnimatedLogo
│   ├── Meteors
│   ├── GradientOrbs
│   └── AsciiWave
│
├── 5-sections/             # Page sections
│   ├── HeroSection
│   ├── ProjectGrid
│   ├── ContactSection
│   └── CapabilityHighlights
│
├── 6-layouts/              # Layout components
│   ├── Navigation
│   ├── Footer
│   ├── Container
│   └── UnifiedToolbar
│
├── 7-cards/                # Card components
│   ├── ProjectCard
│   └── TerminalCard
│
└── 8-examples/             # Full page examples
    ├── HomePage
    └── DemoPages
```

## Naming Convention

- Numbers prefix for ordering (1-foundations first, 8-examples last)
- Singular for categories (Component, not Components)
- PascalCase for component names
- Descriptive titles in Storybook sidebar
