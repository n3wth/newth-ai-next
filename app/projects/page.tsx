'use client'

import { useState, useEffect } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectCardSkeleton } from '@/components/ProjectCardSkeleton'
import { projects, getAllTags } from '@/lib/projects'
import { Search } from 'lucide-react'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for consistent experience
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const allTags = getAllTags()

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = !selectedTag || project.tags.includes(selectedTag)
    const matchesStatus = !statusFilter || project.status === statusFilter

    return matchesSearch && matchesTag && matchesStatus
  })

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Header */}
        <div className="relative pt-32 pb-16 border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-normal text-white mb-4">All Projects</h1>
            <p className="text-gray-400 text-lg max-w-3xl">
              Explore my collection of open-source tools, AI experiments, and web applications.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 border-b border-white/5">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50"
              />
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setStatusFilter(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !statusFilter
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'active'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('experimental')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'experimental'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Experimental
              </button>
              <button
                onClick={() => setStatusFilter('archived')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === 'archived'
                    ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                Archived
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                !selectedTag
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              All Tags
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {isLoading ? (
            <>
              <div className="h-5 w-48 bg-white/10 rounded animate-pulse mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
            </>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No projects found matching your criteria.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-400 mb-8">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
