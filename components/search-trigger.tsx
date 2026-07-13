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
      className="flex w-full max-w-md items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Search className="size-4 shrink-0" />
      <span className="flex-1">Search books and chapters...</span>
      <kbd className="hidden rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground md:inline-block">
        &#8984;K
      </kbd>
    </button>
  )
}
