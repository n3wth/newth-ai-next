'use client'

import { memo } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Clock, Calendar, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BlogPost } from '@/lib/types'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  className?: string
}

export const BlogCard = memo(function BlogCard({
  post,
  featured = false,
  className,
}: BlogCardProps) {
  const categoryColors = {
    technical: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    product: 'bg-green-500/20 text-green-400 border-green-500/30',
    design: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    ai: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    personal: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className={cn('group relative', className)}>
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div
          className={cn(
            'relative h-full rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1',
            featured ? 'p-8' : 'p-6'
          )}
        >
          {/* Featured indicator */}
          {featured && (
            <div className="absolute -top-2 -right-2">
              <span className="inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </div>
          )}

          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-3">
              <span
                className={cn(
                  'inline-flex px-2 py-1 text-xs font-medium rounded-full border',
                  categoryColors[post.category]
                )}
              >
                {post.category}
              </span>
              <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </div>

            <h3
              className={cn(
                'font-medium text-white mb-2 group-hover:text-gray-100 transition-colors',
                featured ? 'text-2xl' : 'text-lg'
              )}
            >
              {post.title}
            </h3>
          </div>

          {/* Description */}
          <p className={cn('text-gray-400 mb-4 line-clamp-3', featured ? 'text-base' : 'text-sm')}>
            {post.excerpt || post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, featured ? 4 : 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10"
              >
                <Tag className="h-2.5 w-2.5" />
                {tag}
              </span>
            ))}
            {post.tags.length > (featured ? 4 : 3) && (
              <span className="px-2 py-1 text-xs font-medium rounded-lg text-gray-500">
                +{post.tags.length - (featured ? 4 : 3)} more
              </span>
            )}
          </div>

          {/* Meta information */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">By {post.author.name}</div>
          </div>

          {/* Image overlay for featured posts */}
          {featured && post.image && (
            <div className="absolute inset-0 rounded-xl overflow-hidden opacity-5 group-hover:opacity-10 transition-opacity">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
            </div>
          )}
        </div>
      </Link>
    </article>
  )
})
