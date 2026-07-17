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
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
      <section className="flex flex-col items-center text-center gap-10 animate-fade-in-up">
        <div className="flex items-center gap-2 sm:gap-3 rounded-full bg-card/60 px-4 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-foreground uppercase tracking-wider backdrop-blur-sm shadow-card">
          <span className="num-gold">{BOOKS.length}</span> TEXTBOOKS
          <span className="text-border/60">·</span>
          <span className="num-gold">{totalChapters.toLocaleString()}</span> CHAPTERS
        </div>

        <h1 className="max-w-3xl font-display leading-relaxed tracking-tight text-balance text-foreground">
          <span className="text-lg md:text-2xl">An <strong className="font-bold text-gold">unofficial library</strong> of <strong className="font-bold">NCERT books</strong>.</span>
        </h1>

        <div className="flex justify-center w-full">
          <SearchTrigger />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mx-auto w-full max-w-3xl">
          <span className="text-sm font-semibold text-muted-foreground">Jump to:</span>
          {[6, 8, 10, 12].map((c) => (
            <Link key={c} href={`/classes/${c}`}
              className="rounded-full bg-card/60 px-5 py-3 text-sm font-bold text-foreground transition-colors duration-200 hover:text-gold hover:shadow-card">
              Class {toRoman(c)}
            </Link>
          ))}
          <Link href="/classes"
            className="rounded-full btn-gradient px-5 py-3 text-sm transition-all duration-200">
            All classes →
          </Link>
        </div>
      </section>

      <RecentsStrip />

      <section aria-labelledby="featured-heading" className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 id="featured-heading" className="font-display text-2xl font-bold tracking-tight md:text-3xl text-center text-foreground">
            Popular textbooks
          </h2>
          <Link href="/classes" className="group flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-gold/70">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full">
          {featured.map((book) => (<BookCard key={book.id} book={book} showClass />))}
        </div>
      </section>
    </div>
  )
}
