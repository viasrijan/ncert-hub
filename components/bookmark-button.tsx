'use client'

import { Bookmark } from 'lucide-react'
import { useBookmarks } from '@/lib/library-store'
import { cn } from '@/lib/utils'

export function BookmarkButton({ bookId }: { bookId: string }) {
  const { bookmarks, toggleBookmark } = useBookmarks()
  const bookmarked = bookmarks.includes(bookId)

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(bookId)}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this book'}
      className={cn(
        'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold transition-colors duration-150',
        bookmarked
          ? 'bg-primary text-primary-foreground'
          : 'border border-border text-muted-foreground hover:text-foreground',
      )}
    >
      <Bookmark className={cn('size-4', bookmarked && 'fill-current')} />
      {bookmarked ? 'Saved' : 'Save'}
    </button>
  )
}
