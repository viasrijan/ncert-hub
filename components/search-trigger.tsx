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
      className="flex w-full max-w-md items-center gap-3 rounded-xl border border-border gradient-card-light dark:gradient-card-dark px-4 py-3.5 text-left text-sm font-medium text-muted-foreground transition-all duration-150 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Search className="size-5 shrink-0" />
      <span className="flex-1">Search books and chapters...</span>
      <kbd className="hidden rounded-lg border border-border bg-muted px-2 py-1 font-mono text-xs font-semibold text-muted-foreground md:inline-block">
        &#8984;K
      </kbd>
    </button>
  )
}
