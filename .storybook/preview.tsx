import type { Preview } from '@storybook/nextjs-vite'
import { Decorator } from '@storybook/react'
import { useEffect } from 'react'
import React from 'react'
import './storybook-globals.css'
import '../app/styles/components.css'
import './preview-docs.css'

const WithThemeDecorator: Decorator = (Story, context) => {
  const { theme } = context.globals

  useEffect(() => {
    const html = document.documentElement
    // Remove all theme classes
    html.classList.remove('light', 'dark', 'cyberpunk')
    // Add the new theme class
    html.classList.add(theme)
    // Also apply to the body to ensure consistency
    document.body.classList.remove('light', 'dark', 'cyberpunk')
    document.body.classList.add(theme)
  }, [theme])

  // Apply dark theme as a default style for the story container
  const storyContainerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: theme === 'light' ? '#0a0a0a' : '#ffffff',
    padding: '1rem',
    transition: 'color 0.3s ease',
  }

  return (
    <div style={storyContainerStyle}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0a0a0a',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
      manual: false,
    },
    layout: 'centered',
    chromatic: {
      viewports: [375, 768, 1440],
    },
    storySort: {
      order: [
        'Introduction',
        'Foundations',
        ['Colors', 'Typography', 'Spacing', 'Grid', 'Layout'],
        'Components',
        ['UI', 'Backgrounds', 'Layout', 'Navigation', 'Cards'],
        'Sections',
        'Examples',
      ],
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'cyberpunk', title: 'Cyberpunk', icon: 'lightning' },
        ],
        showName: true,
      },
    },
  },
  decorators: [WithThemeDecorator],
  tags: ['autodocs'],
}

export default preview
