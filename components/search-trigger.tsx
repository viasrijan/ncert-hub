'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export function SearchTrigger() {
  const router = useRouter()

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        router.push('/search')
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [router])

  return (
    <button
      type="button"
      onClick={() => router.push('/search')}
      className="flex w-full max-w-2xl items-center gap-4 rounded-full border-2 border-border/30 bg-card/80 px-6 py-5 text-left text-lg text-white/50 backdrop-blur-sm transition-colors duration-200 hover:border-gold/40 hover:shadow-card"
    >
      <Search className="h-6 w-6 shrink-0" />
      <span className="flex-1 font-semibold">Search books and chapters...</span>
      <kbd className="hidden rounded-xl border border-border/40 bg-secondary px-3 py-2 font-mono text-sm font-bold text-white/40 md:inline-block">
        ⌘K
      </kbd>
    </button>
  )
}
