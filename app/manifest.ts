import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oliver Newth - AI Developer',
    short_name: 'Newth AI',
    description:
      'Engineering at the intersection of AI and human creativity. Building tools that amplify developer capabilities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['developer', 'portfolio', 'ai', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
  }
}
