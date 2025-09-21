interface SearchResult {
  id: number
  title: string
  description: string
}

export const searchAPI = {
  search: async (query: string): Promise<SearchResult[]> => {
    // Mock implementation for development
    // In production, this would call actual search API
    if (!query) return []

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))

    // Return mock results
    return [
      { id: 1, title: `Result for "${query}"`, description: 'Sample description 1' },
      { id: 2, title: `Another result for "${query}"`, description: 'Sample description 2' }
    ]
  }
}