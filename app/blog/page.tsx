'use client'

import { useState, useEffect } from 'react'
import { BlogCard } from '@/components/BlogCard'
import { getPublishedPosts, getFeaturedPosts } from '@/data/blog-posts'
import { Search, Filter } from 'lucide-react'
import type { BlogPost } from '@/lib/types'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<BlogPost['category'] | 'all'>('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for consistent experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const allPosts = getPublishedPosts()
  const featuredPosts = getFeaturedPosts()

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories: Array<{ value: BlogPost['category'] | 'all'; label: string }> = [
    { value: 'all', label: 'All Posts' },
    { value: 'technical', label: 'Technical' },
    { value: 'product', label: 'Product' },
    { value: 'design', label: 'Design' },
    { value: 'ai', label: 'AI' },
    { value: 'personal', label: 'Personal' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Header */}
        <div className="relative pt-32 pb-16 border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-normal text-white mb-4">Writing</h1>
            <p className="text-gray-400 text-lg max-w-3xl">
              Thoughts on AI, product development, and the intersection of technology and
              creativity.
            </p>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && !searchTerm && selectedCategory === 'all' && !isLoading && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-b border-white/5">
            <h2 className="text-2xl font-medium text-white mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <BlogCard key={post.id} post={post} featured className="h-full" />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 border-b border-white/5">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category.value
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {isLoading ? (
            <>
              <div className="h-5 w-48 bg-white/10 rounded animate-pulse mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="space-y-4">
                      <div className="h-6 bg-white/10 rounded animate-pulse" />
                      <div className="h-4 bg-white/10 rounded animate-pulse" />
                      <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
                        <div className="h-6 w-20 bg-white/10 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No posts found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-400">
                  {searchTerm || selectedCategory !== 'all'
                    ? `${filteredPosts.length} posts found`
                    : `${allPosts.length} posts`}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
