import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BOOKS, toRoman } from '@/lib/catalog'
import { BookCard } from '@/components/book-card'
import { RecentsStrip } from '@/components/recents-strip'
import { SearchTrigger } from '@/components/search-trigger'

const FEATURED_IDS = ['jemh1', 'jesc1', 'lemh1', 'leph1', 'kebo1', 'jeff1', 'iemh1', 'hesc1']

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => BOOKS.find((b) => b.id === id)).filter(
    (b): b is NonNullable<typeof b> => Boolean(b),
  )
  const totalChapters = BOOKS.reduce((n, b) => n + b.chapters.length, 0)

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-12 md:px-8 md:py-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 animate-fade-in-up">
        {/* Stats pill */}
        <div className="flex items-center gap-3 rounded-full border border-border/40 bg-card/60 px-7 py-3.5 text-base font-bold text-white uppercase tracking-wider backdrop-blur-sm shadow-sm">
          <span>{BOOKS.length} TEXTBOOKS</span>
          <span className="text-border/60">·</span>
          <span>{totalChapters.toLocaleString()} CHAPTERS</span>
        </div>

        <h1 className="max-w-3xl font-display text-2xl font-normal leading-relaxed tracking-tight md:text-3xl text-balance text-white">
          Welcome to <strong className="font-bold">NCERT Hub</strong>.
          <br />
          An <em className="italic underline decoration-gold/40 underline-offset-4">unofficial library</em> for <strong className="font-bold">NCERT books</strong>.
        </h1>

        {/* Search */}
        <div className="flex justify-center w-full mt-4">
          <SearchTrigger />
        </div>

        {/* Quick jump */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <span className="text-sm font-semibold text-white/50">Jump to:</span>
          {[6, 8, 10, 12].map((c) => (
            <Link
              key={c}
              href={`/classes/${c}`}
              className="rounded-full border border-border/40 bg-card/60 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-gold/50 hover:text-gold hover:shadow-md hover:scale-105 active:scale-95"
            >
              Class {toRoman(c)}
            </Link>
          ))}
          <Link
            href="/classes"
            className="rounded-full border border-gold/30 bg-gold/5 px-5 py-3 text-sm font-bold text-gold transition-all duration-200 hover:bg-gold/10 hover:scale-105 active:scale-95"
          >
            All classes →
          </Link>
        </div>
      </section>

      <RecentsStrip />

      {/* Featured books */}
      <section aria-labelledby="featured-heading" className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 id="featured-heading" className="font-display text-2xl font-bold tracking-tight md:text-3xl text-center text-white">
            Popular textbooks
          </h2>
          <Link
            href="/classes"
            className="group flex items-center gap-2 text-base font-semibold text-white/60 transition-colors hover:text-white"
          >
            View all <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} showClass />
          ))}
        </div>
      </section>
    </div>
  )
}
