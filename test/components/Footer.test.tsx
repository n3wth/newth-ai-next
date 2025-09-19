import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />)
    expect(screen.getByText('© 2025 Oliver Newth. All rights reserved.')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<Footer />)
    expect(screen.getByText('Projects')).toHaveAttribute('href', '/#projects')
    expect(screen.getByText('Work')).toHaveAttribute('href', '/work')
    expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/n3wth')
    expect(screen.getByText('LinkedIn')).toHaveAttribute('href', 'https://linkedin.com/in/newth')
  })
})
