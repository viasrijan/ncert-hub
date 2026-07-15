'use client'

import Link from 'next/link'
import { Bookmark } from 'lucide-react'
import type { Book } from '@/lib/catalog'
import { useBookmarks } from '@/lib/library-store'
import { cn } from '@/lib/utils'
import { getSubjectGradient } from '@/lib/subject-gradients'

export function BookCard({ book, showClass = false }: { book: Book; showClass?: boolean }) {
  const { bookmarks, toggleBookmark } = useBookmarks()
  const bookmarked = bookmarks.includes(book.id)
  const { gradient, icon: Icon } = getSubjectGradient(book.subject)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm shadow-card transition-colors duration-200 w-[260px] max-w-full">
      <Link
        href={`/book/${book.id}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ background: gradient }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-white/30" strokeWidth={1.5} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex flex-1 flex-col items-center text-center gap-1.5 p-4">
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white text-pretty">
            {book.title}
          </h3>
          <p className="mt-auto pt-1 text-[14px] font-semibold text-white/60">
            {book.chapters.length} {book.chapters.length === 1 ? 'chapter' : 'chapters'}
          </p>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => toggleBookmark(book.id)}
        aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        aria-pressed={bookmarked}
        className={cn(
          'absolute right-3 top-3 rounded-full p-2.5 backdrop-blur-md transition-colors duration-200',
          bookmarked
            ? 'bg-gold text-black shadow-elevated opacity-100'
            : 'bg-background/60 text-white/50 opacity-0 hover:text-white focus-visible:opacity-100 group-hover:opacity-100 hover:bg-background/80',
        )}
      >
        <Bookmark className={cn('h-[18px] w-[18px]', bookmarked && 'fill-current')} />
      </button>
    </div>
  )
}
