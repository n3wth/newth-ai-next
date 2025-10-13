import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { getPostBySlug, getPublishedPosts } from '@/data/blog-posts'
import { BlogCard } from '@/components/BlogCard'
import { ShareButton } from '@/components/ShareButton'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getPublishedPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || post.description,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = getPublishedPosts()
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const categoryColors = {
    technical: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    product: 'bg-green-500/20 text-green-400 border-green-500/30',
    design: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    ai: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    personal: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  }

  const shareUrl = `https://newth.ai/blog/${post.slug}`
  const shareText = `${post.title} by ${post.author.name}`

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Header */}
        <div className="relative pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Writing
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span
                className={`inline-flex px-3 py-1 text-sm font-medium rounded-full border ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">{post.description}</p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author.name}</span>
              </div>
              <ShareButton url={shareUrl} title={shareText} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-6 lg:px-8 pb-16">
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-gray-300 leading-relaxed [&>h1]:text-white [&>h1]:text-3xl [&>h1]:font-medium [&>h1]:mt-12 [&>h1]:mb-6 [&>h2]:text-white [&>h2]:text-2xl [&>h2]:font-medium [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-medium [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-purple-500/50 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-400 [&>code]:bg-white/10 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-purple-300 [&>pre]:bg-white/5 [&>pre]:border [&>pre]:border-white/10 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>a]:text-purple-400 [&>a]:underline [&>a]:underline-offset-2 hover:[&>a]:text-purple-300"
              dangerouslySetInnerHTML={{
                __html: (() => {
                  // First, handle code blocks to protect them
                  const processedContent = post.content.replace(/```[\s\S]*?```/g, (match) => {
                    return `<pre><code>${match.replace(/```/g, '').trim()}</code></pre>`
                  })

                  // Split into lines and process
                  const lines = processedContent.split('\n')
                  const htmlLines = []
                  let currentParagraph = []

                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim()

                    // Check for headers
                    if (line.startsWith('#')) {
                      // Close any open paragraph
                      if (currentParagraph.length > 0) {
                        htmlLines.push(`<p>${currentParagraph.join(' ')}</p>`)
                        currentParagraph = []
                      }

                      // Convert markdown header to HTML
                      if (line.startsWith('###### ')) {
                        htmlLines.push(`<h6>${line.substring(7)}</h6>`)
                      } else if (line.startsWith('##### ')) {
                        htmlLines.push(`<h5>${line.substring(6)}</h5>`)
                      } else if (line.startsWith('#### ')) {
                        htmlLines.push(`<h4>${line.substring(5)}</h4>`)
                      } else if (line.startsWith('### ')) {
                        htmlLines.push(`<h3>${line.substring(4)}</h3>`)
                      } else if (line.startsWith('## ')) {
                        htmlLines.push(`<h2>${line.substring(3)}</h2>`)
                      } else if (line.startsWith('# ')) {
                        htmlLines.push(`<h1>${line.substring(2)}</h1>`)
                      }
                    } else if (line === '') {
                      // Empty line - close paragraph if exists
                      if (currentParagraph.length > 0) {
                        htmlLines.push(`<p>${currentParagraph.join(' ')}</p>`)
                        currentParagraph = []
                      }
                    } else if (line.startsWith('<pre>') || line.startsWith('<code>')) {
                      // Code block - add directly
                      if (currentParagraph.length > 0) {
                        htmlLines.push(`<p>${currentParagraph.join(' ')}</p>`)
                        currentParagraph = []
                      }
                      htmlLines.push(line)
                    } else if (line.startsWith('- ')) {
                      // List item
                      if (currentParagraph.length > 0) {
                        htmlLines.push(`<p>${currentParagraph.join(' ')}</p>`)
                        currentParagraph = []
                      }
                      htmlLines.push(`<li>${line.substring(2)}</li>`)
                    } else {
                      // Regular text - add to current paragraph
                      currentParagraph.push(line)
                    }
                  }

                  // Close any remaining paragraph
                  if (currentParagraph.length > 0) {
                    htmlLines.push(`<p>${currentParagraph.join(' ')}</p>`)
                  }

                  return htmlLines.join('')
                })(),
              }}
            />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-t border-white/5">
            <h2 className="text-2xl font-medium text-white mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
