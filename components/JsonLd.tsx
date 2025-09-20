export function JsonLdPerson() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Oliver Newth',
    url: 'https://newth.ai',
    image: 'https://newth.ai/og-image.png',
    sameAs: [
      'https://github.com/n3wth',
      'https://linkedin.com/in/olivernewth',
      'https://twitter.com/olivernewth',
    ],
    jobTitle: 'Senior Product Manager',
    worksFor: {
      '@type': 'Organization',
      name: 'Google',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Massachusetts Institute of Technology',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Warwick',
      },
    ],
    knowsAbout: [
      'Machine Learning',
      'AI Infrastructure',
      'Product Management',
      'Software Engineering',
      'Open Source Development',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function JsonLdWebsite() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://newth.ai',
    name: 'Oliver Newth - AI Developer',
    description: 'Building ML infrastructure that powers billions of predictions daily.',
    author: {
      '@type': 'Person',
      name: 'Oliver Newth',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://newth.ai/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function JsonLdProject({
  name,
  description,
  url,
  github,
  dateCreated,
  technologies,
}: {
  name: string
  description: string
  url?: string
  github?: string
  dateCreated: string
  technologies: string[]
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: url || github,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Oliver Newth',
      url: 'https://newth.ai',
    },
    dateCreated,
    keywords: technologies.join(', '),
    ...(github && {
      codeRepository: github,
      programmingLanguage: technologies,
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
