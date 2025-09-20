'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  url: string
  title: string
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url,
      })
    } else {
      navigator.clipboard.writeText(url)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      title="Share this post"
    >
      <Share2 className="h-4 w-4" />
      <span>Share</span>
    </button>
  )
}
