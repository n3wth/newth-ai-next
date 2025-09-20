export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  tech?: string[] // Alias for tags, for backward compatibility
  featured: boolean
  status: 'active' | 'experimental' | 'archived'
  year?: string
  color?: string
  link?: string
  github?: string
  demo?: string
  stats?: {
    stars?: number
    downloads?: number
    users?: number
  }
  metrics?: Array<{
    label: string
    value?: string | number
    color?: string
  }>
  image?: string
  category?: 'web' | 'mobile' | 'desktop' | 'cli' | 'library' | 'other'
}

export interface ContactInfo {
  email: string
  github?: string
  linkedin?: string
  twitter?: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export interface NavItem {
  href: string
  text: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  external?: boolean
}

export interface ContactSectionProps {
  title?: string
  subtitle?: string
}

export interface HeroSectionProps {
  title?: {
    line1: string
    line2: string
  }
  subtitle?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export interface ProjectGridProps {
  projects: Project[]
  showFeaturedOnly?: boolean
  maxItems?: number
  className?: string
}

export interface SocialLinks {
  github: string
  linkedin: string
  twitter?: string
  email?: string
}

export interface HeroContent {
  title: {
    line1: string
    line2: string
  }
  subtitle: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}
