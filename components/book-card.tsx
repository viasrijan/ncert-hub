'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bookmark } from 'lucide-react'
import type { Book } from '@/lib/catalog'
import { toRoman } from '@/lib/catalog'
import { useBookmarks } from '@/lib/library-store'
import { cn, assetPath } from '@/lib/utils'

export function BookCard({ book, showClass = false }: { book: Book; showClass?: boolean }) {
  const { bookmarks, toggleBookmark } = useBookmarks()
  const bookmarked = bookmarks.includes(book.id)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border gradient-card-light dark:gradient-card-dark transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
      <Link
        href={`/book/${book.id}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={assetPath(book.cover || '/covers/general.png')}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-3.5">
          <p className="text-sm font-bold text-primary">
            {showClass ? `Class ${toRoman(book.classNum)} · ${book.subject}` : book.subject}
          </p>
          <h3 className="line-clamp-2 text-base font-extrabold leading-snug text-card-foreground text-pretty">
            {book.title}
          </h3>
          <p className="mt-auto pt-1 text-xs font-medium text-muted-foreground">
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
          'absolute right-2.5 top-2.5 rounded-full p-2.5 backdrop-blur transition-all duration-150',
          bookmarked
            ? 'bg-primary text-primary-foreground'
            : 'bg-background/70 text-muted-foreground opacity-0 hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100',
        )}
      >
        <Bookmark className={cn('size-4', bookmarked && 'fill-current')} />
      </button>
    </div>
  )
}
