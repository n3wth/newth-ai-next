import { addons } from 'storybook/internal/manager-api'
import theme from './theme'

addons.setConfig({
  theme,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
  },
  // Set the default page to the Welcome page
  panelPosition: 'bottom',
  initialPath: '/story/0-docs-welcome--page',
})
