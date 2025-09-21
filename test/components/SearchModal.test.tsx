import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SearchModal } from '@/components/SearchModal'

// Mock the search API
vi.mock('@/lib/api', () => ({
  searchAPI: {
    search: vi.fn()
  }
}))

import { searchAPI } from '@/lib/api'

describe('SearchModal', () => {
  const mockOnClose = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders when isOpen is true', () => {
    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <SearchModal isOpen={false} onClose={mockOnClose} />
    )

    expect(container.firstChild).toBeNull()
  })

  it('calls onClose when close button is clicked', () => {
    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalled()
  })

  it('calls onClose when Escape key is pressed', () => {
    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(mockOnClose).toHaveBeenCalled()
  })

  it('performs search when input changes', async () => {
    const mockSearchResults = [
      { id: 1, title: 'Result 1', description: 'Description 1' },
      { id: 2, title: 'Result 2', description: 'Description 2' }
    ]

    vi.mocked(searchAPI.search).mockResolvedValue(mockSearchResults)

    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    const input = screen.getByPlaceholderText(/Search/i)
    fireEvent.change(input, { target: { value: 'test query' } })

    await waitFor(() => {
      expect(searchAPI.search).toHaveBeenCalledWith('test query')
    })
  })

  it('displays loading state during search', async () => {
    vi.mocked(searchAPI.search).mockImplementation(() =>
      new Promise(resolve => setTimeout(() => resolve([]), 100))
    )

    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    const input = screen.getByPlaceholderText(/Search/i)
    fireEvent.change(input, { target: { value: 'test' } })

    await waitFor(() => {
      expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    })
  })

  it('displays search results', async () => {
    const mockResults = [
      { id: 1, title: 'Test Result', description: 'Test description' }
    ]

    vi.mocked(searchAPI.search).mockResolvedValue(mockResults)

    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    const input = screen.getByPlaceholderText(/Search/i)
    fireEvent.change(input, { target: { value: 'test' } })

    await waitFor(() => {
      expect(screen.getByText('Test Result')).toBeInTheDocument()
      expect(screen.getByText('Test description')).toBeInTheDocument()
    })
  })

  it('displays no results message when search returns empty', async () => {
    vi.mocked(searchAPI.search).mockResolvedValue([])

    render(
      <SearchModal isOpen={true} onClose={mockOnClose} />
    )

    const input = screen.getByPlaceholderText(/Search/i)
    fireEvent.change(input, { target: { value: 'nonexistent' } })

    await waitFor(() => {
      expect(screen.getByText(/No results found/i)).toBeInTheDocument()
    })
  })
})