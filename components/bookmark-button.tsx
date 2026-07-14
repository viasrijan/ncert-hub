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
        'flex items-center gap-2 rounded-xl px-4 py-3 text-base font-bold transition-all duration-200',
        bookmarked
          ? 'bg-orange text-white shadow-md'
          : 'border-2 border-border text-muted-foreground hover:text-foreground hover:border-orange/40',
      )}
    >
      <Bookmark className={cn('h-[18px] w-[18px]', bookmarked && 'fill-current')} />
      {bookmarked ? 'Saved' : 'Save'}
    </button>
  )
}
