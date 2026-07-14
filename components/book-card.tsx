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
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link
        href={`/book/${book.id}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={assetPath(book.cover || '/covers/general.png')}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex flex-1 flex-col items-center text-center gap-1.5 p-4">
          {showClass && (
            <p className="flex items-center gap-2 text-[13px] font-bold text-muted-foreground uppercase tracking-wider">
              <span className="inline-flex items-center justify-center rounded-lg bg-orange/10 px-2 py-1 text-[11px] font-extrabold text-orange">
                {toRoman(book.classNum)}
              </span>
              {book.subject}
            </p>
          )}
          {!showClass && (
            <p className="text-[13px] font-bold text-muted-foreground uppercase tracking-wider">
              {book.subject}
            </p>
          )}
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-card-foreground text-pretty">
            {book.title}
          </h3>
          <p className="mt-auto pt-1 text-[14px] font-semibold text-muted-foreground/80">
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
          'absolute right-3 top-3 rounded-full p-2.5 backdrop-blur-md transition-all duration-200',
          bookmarked
            ? 'bg-orange text-white shadow-lg opacity-100 scale-105'
            : 'bg-background/60 text-muted-foreground opacity-0 hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100 hover:bg-background/80',
        )}
      >
        <Bookmark className={cn('h-[18px] w-[18px]', bookmarked && 'fill-current')} />
      </button>
    </div>
  )
}
