import { create } from 'storybook/internal/theming'

export default create({
  base: 'dark',
  brandTitle: 'n3wth.AI Components',
  brandUrl: 'https://newth.ai',
  brandImage: '/logo-custom.svg', // Custom ASCII block logo
  brandTarget: '_self',

  // UI
  appBg: '#0a0a0a',
  appContentBg: '#111111',
  appBorderColor: '#333333',
  appBorderRadius: 4,

  // Typography
  fontBase: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#9CA3AF',
  barSelectedColor: '#ffffff',
  barHoverColor: '#ffffff',
  barBg: '#0a0a0a',

  // Form colors
  inputBg: '#1a1a1a',
  inputBorder: '#333333',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,

  // Colors
  colorPrimary: '#3b82f6',
  colorSecondary: '#8b5cf6',
})
