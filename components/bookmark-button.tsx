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
        'flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-bold transition-all duration-200',
        bookmarked
          ? 'bg-gold text-white shadow-md'
          : 'bg-card/80 text-muted-foreground hover:text-foreground hover:bg-card',
      )}
    >
      <Bookmark className={cn('h-4 w-4', bookmarked && 'fill-white text-white')} />
      <span className={cn(bookmarked && 'text-white')}>{bookmarked ? 'Saved' : 'Save'}</span>
    </button>
  )
}
