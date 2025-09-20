import { Metadata } from 'next'

const siteConfig = {
  name: 'Oliver Newth',
  url: 'https://newth.ai',
  description:
    'Building ML infrastructure that powers billions of predictions daily. Open source contributor. Side project enthusiast.',
  author: 'Oliver Newth',
  twitter: '@olivernewth',
  github: 'https://github.com/n3wth',
  linkedin: 'https://linkedin.com/in/olivernewth',
}

export function generateSEO({
  title,
  description,
  image,
  path = '',
  type = 'website',
}: {
  title?: string
  description?: string
  image?: string
  path?: string
  type?: 'website' | 'article'
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - AI Developer`
  const pageDescription = description || siteConfig.description
  const pageUrl = `${siteConfig.url}${path}`
  const pageImage = image || '/og-image.png'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'AI',
      'Machine Learning',
      'Software Engineering',
      'MCP Protocol',
      'Open Source',
      'Developer Tools',
    ],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      type: type,
      locale: 'en_US',
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: siteConfig.twitter,
      images: [pageImage],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export { siteConfig }
