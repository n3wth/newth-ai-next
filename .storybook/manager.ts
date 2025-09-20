import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'dark',
  brandTitle: 'n3wth.AI Components',
  brandUrl: 'https://n3wth.ai',
  brandImage: './logo-simple.svg',
  brandTarget: '_self',

  // UI
  appBg: '#0a0a0a',
  appContentBg: '#0f0f0f',
  appPreviewBg: '#000000',
  appBorderColor: 'rgba(255, 255, 255, 0.1)',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Fira Code", "SF Mono", Monaco, monospace',

  // Text colors
  textColor: '#e5e5e5',
  textInverseColor: '#0a0a0a',
  textMutedColor: '#a0a0a0',

  // Toolbar default and active colors
  barTextColor: '#e5e5e5',
  barHoverColor: '#ffffff',
  barSelectedColor: '#9333ea',
  barBg: '#0f0f0f',

  // Form colors
  inputBg: '#1a1a1a',
  inputBorder: 'rgba(255, 255, 255, 0.1)',
  inputTextColor: '#e5e5e5',
  inputBorderRadius: 6,

  // Button colors
  buttonBg: '#1a1a1a',
  buttonBorder: 'rgba(255, 255, 255, 0.1)',
  booleanBg: '#1a1a1a',
  booleanSelectedBg: '#9333ea',

  // Colors
  colorPrimary: '#9333ea',
  colorSecondary: '#3b82f6',
})

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
})
