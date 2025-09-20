import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../stories/Welcome.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.mdx',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: [{ from: '../public', to: '/' }],
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  `,
  features: {
    buildStoriesJson: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
