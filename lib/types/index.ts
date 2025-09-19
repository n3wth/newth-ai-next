export interface Project {
  id: string
  title: string
  description: string
  year: string
  tech: string[]
  link?: string
  github?: string
  featured?: boolean
  color: string
  metrics?: {
    label: string
    color?: string
  }[]
}

export interface NavItem {
  href: string
  text: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}