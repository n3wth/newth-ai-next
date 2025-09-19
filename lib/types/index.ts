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

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
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
  className?: string
}

export interface ContactSectionProps {
  title?: string
  subtitle?: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export interface ButtonProps {
  href: string
  external?: boolean
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export interface NewsletterSignupProps {
  className?: string
}

export interface ProjectCardProps {
  project: Project
  className?: string
}

export interface AnimatedLogoProps {
  className?: string
}

export interface InteractiveHeroProps {
  className?: string
}

export interface DynamicBackgroundProps {
  className?: string
}

export interface WarpBackgroundProps {
  beamsPerSide?: number
  beamSize?: number
  perspective?: number
  beamDelayMax?: number
  beamDelayMin?: number
  beamDuration?: number
  gridColor?: string
  className?: string
  children: React.ReactNode
}

export interface GradientOrbsProps {
  className?: string
}

export interface MeteorsProps {
  number?: number
  className?: string
}

export interface CustomCursorProps {
  className?: string
}

export interface CompanyIconsProps {
  className?: string
}

export interface AsciiWaveProps {
  className?: string
}

export interface LogoWithPatternProps {
  className?: string
}

export interface TerminalButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export interface TerminalCardProps {
  children: React.ReactNode
  className?: string
}

export interface TerminalHeadingProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export interface AsciiDividerProps {
  className?: string
}

export interface FooterProps {
  className?: string
}

export interface NavigationProps {
  className?: string
}
