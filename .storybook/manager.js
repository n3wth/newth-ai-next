import { addons } from '@storybook/manager-api';

addons.setConfig({
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
  },
  // Set the default page to the welcome docs
  panelPosition: 'bottom',
  initialPath: '/docs/welcome--docs',
});