'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Bookmark, Clock, Trash2 } from 'lucide-react'
import { getBook, toRoman } from '@/lib/catalog'
import { useBookmarks, useRecents } from '@/lib/library-store'
import { BookCard } from '@/components/book-card'
import { assetPath } from '@/lib/utils'

export function BookmarksView() {
  const { bookmarks } = useBookmarks()
  const { recents, clearRecents } = useRecents()

  const savedBooks = bookmarks
    .map((id) => getBook(id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b))

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 md:py-12">
      {/* Saved books */}
      <section aria-labelledby="saved-heading" className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Bookmark className="size-5 text-primary" />
          <h1 id="saved-heading" className="font-sans text-2xl font-extrabold tracking-tight">
            Saved books
          </h1>
        </div>
        {savedBooks.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border py-12 text-center">
            <p className="text-base font-bold">No saved books yet</p>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-muted-foreground">
              Tap the bookmark icon on any textbook to keep it here for quick access.
            </p>
            <Link
              href="/classes"
              className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Browse classes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {savedBooks.map((book) => (
              <BookCard key={book.id} book={book} showClass />
            ))}
          </div>
        )}
      </section>

      {/* Recently read */}
      <section aria-labelledby="recents-heading" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="size-5 text-primary" />
            <h2 id="recents-heading" className="text-lg font-extrabold">
              Recently read
            </h2>
          </div>
          {recents.length > 0 && (
            <button
              type="button"
              onClick={clearRecents}
              className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground transition-colors duration-150 hover:text-destructive"
            >
              <Trash2 className="size-4" /> Clear
            </button>
          )}
        </div>
        {recents.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm font-medium text-muted-foreground">
            Chapters you open will show up here.
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border gradient-card-light dark:gradient-card-dark">
            {recents.map((r) => {
              const book = getBook(r.bookId)
              if (!book) return null
              const chapter = book.chapters.find((c) => c.pdfCode === r.pdfCode)
              if (!chapter) return null
              return (
                <li key={r.pdfCode}>
                  <Link
                    href={`/read/${r.pdfCode}`}
                    className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-secondary"
                  >
                    <div className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={assetPath(book.cover || '/covers/general.png')}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{chapter.title}</p>
                      <p className="truncate text-xs font-medium text-muted-foreground">
                        {book.title} · Class {toRoman(book.classNum)}
                      </p>
                    </div>
                    <time
                      dateTime={new Date(r.openedAt).toISOString()}
                      className="shrink-0 text-xs font-medium text-muted-foreground"
                    >
                      {formatRelative(r.openedAt)}
                    </time>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

function formatRelative(ts: number): string {
  const diff = Date.now() - ts
  const mins = Math.floor(diff / 60_000)
  if (mins < 1) return 'now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}
