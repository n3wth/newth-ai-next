import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/Navigation'

describe('Navigation', () => {
  it('renders the logo', () => {
    render(<Navigation />)
    expect(screen.getByText('█▄ █ █▀▀ █ █ █ ▀█▀ █ █')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navigation />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<Navigation />)
    expect(screen.getByText('Projects')).toHaveAttribute('href', '/#projects')
    expect(screen.getByText('Work')).toHaveAttribute('href', '/work')
    expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/n3wth')
    expect(screen.getByText('LinkedIn')).toHaveAttribute('href', 'https://linkedin.com/in/newth')
  })

  it('opens external links in new tab', () => {
    render(<Navigation />)
    expect(screen.getByText('GitHub')).toHaveAttribute('target', '_blank')
    expect(screen.getByText('LinkedIn')).toHaveAttribute('target', '_blank')
  })

  it('renders mobile menu button', () => {
    render(<Navigation />)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })
})
