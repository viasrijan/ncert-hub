'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getBook, toRoman } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'
import { BookCard } from '@/components/book-card'

export function RecentsStrip() {
  const { recents } = useRecents()
  if (recents.length === 0) return null

  const recentBooks = recents
    .slice(0, 8)
    .map((r) => {
      const book = getBook(r.bookId)
      if (!book) return null
      return book
    })
    .filter(Boolean)

  if (recentBooks.length === 0) return null

  return (
    <section aria-labelledby="recents-heading" className="flex flex-col items-center gap-10 animate-fade-in-up animate-delay-100">
      <div className="flex flex-col items-center gap-2">
        <h2 id="recents-heading" className="font-display text-2xl font-bold tracking-tight md:text-3xl text-center text-foreground">
          Continue reading
        </h2>
        <Link href="/bookmarks" className="group flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-gold/70">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full">
        {recentBooks.map((book) => (<BookCard key={book.id} book={book} />))}
      </div>
    </section>
  )
}
