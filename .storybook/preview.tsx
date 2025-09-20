import type { Preview } from '@storybook/nextjs'
import { Decorator } from '@storybook/react'
import { useEffect } from 'react'
import React from 'react'
import './storybook-globals.css'
import '../app/styles/components.css'
import './preview-docs.css'

const WithThemeDecorator: Decorator = (Story) => {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    // Always use dark theme
    html.classList.add('dark')
    body.classList.add('dark')

    return () => {
      // Cleanup if needed
      html.classList.remove('dark')
      body.classList.remove('dark')
    }
  }, [])

  // Apply dark theme style for the story container
  const storyContainerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '1rem',
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
    storySort: (a: [string, { kind: string }], b: [string, { kind: string }]) => {
      // Define the main category order
      const categoryOrder = [
        'Welcome',
        'Getting Started',
        'Brand',
        'Foundations',
        'Components',
        'Backgrounds',
        'Layout',
        'Sections',
        'Examples',
      ]

      // Get the story paths
      const aPath = a[1].kind.split('/')
      const bPath = b[1].kind.split('/')

      // Get main categories
      const aCat = aPath[0]
      const bCat = bPath[0]

      // Compare main categories
      const aIndex = categoryOrder.indexOf(aCat)
      const bIndex = categoryOrder.indexOf(bCat)

      if (aIndex !== bIndex) {
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
      }

      // Within same category, Overview always comes first
      const aName = aPath[aPath.length - 1]
      const bName = bPath[bPath.length - 1]

      if (aName === 'Overview') return -1
      if (bName === 'Overview') return 1

      // Otherwise alphabetical
      return aName.localeCompare(bName)
    },
  },
  globalTypes: {},
  decorators: [WithThemeDecorator],
  tags: ['autodocs'],
}

export default preview
