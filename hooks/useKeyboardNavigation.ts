import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useKeyboardNavigation() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      // Command/Ctrl + K for search (if implemented)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        console.log('Search triggered')
      }

      // Alt + H for home
      if (e.altKey && e.key === 'h') {
        e.preventDefault()
        router.push('/')
      }

      // Alt + P for projects
      if (e.altKey && e.key === 'p') {
        e.preventDefault()
        router.push('/projects')
      }

      // Alt + W for work
      if (e.altKey && e.key === 'w') {
        e.preventDefault()
        router.push('/work')
      }

      // Escape to go back
      if (e.key === 'Escape') {
        e.preventDefault()
        router.back()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])
}