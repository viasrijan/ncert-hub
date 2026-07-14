import Link from 'next/link'
import { ArrowRight, Library } from 'lucide-react'
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
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 md:px-8 md:py-24">
      {/* Hero — everything centered */}
      <section className="flex flex-col items-center text-center gap-6 animate-fade-in-up">
        {/* Stats pill — bigger */}
        <div className="flex items-center gap-3 rounded-full border border-border/40 bg-card/60 px-7 py-3.5 text-xl font-bold text-muted-foreground backdrop-blur-sm shadow-sm">
          <Library className="size-6 text-coral" />
          <span>{BOOKS.length} textbooks</span>
          <span className="text-border/60">·</span>
          <span>{totalChapters.toLocaleString()} chapters</span>
        </div>

        <h1 className="max-w-3xl font-display text-6xl font-extrabold leading-[1.05] tracking-tight md:text-8xl text-balance">
          Every NCERT textbook,{' '}
          <span className="bg-gradient-to-r from-coral via-teal to-indigo bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            beautifully
          </span>{' '}
          organized
        </h1>

        <p className="max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl text-pretty">
          Browse, read, and download official NCERT textbooks for Classes I to XII.
          Free, fast, and made for students.
        </p>

        {/* Search — center USP */}
        <div className="flex justify-center w-full mt-4">
          <SearchTrigger />
        </div>

        {/* Quick jump */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <span className="text-base font-bold text-muted-foreground/50">Jump to:</span>
          {[6, 8, 10, 12].map((c) => (
            <Link
              key={c}
              href={`/classes/${c}`}
              className="rounded-full border border-border/40 bg-card/60 px-5 py-3 text-base font-bold text-muted-foreground transition-all duration-200 hover:border-coral/40 hover:text-coral hover:shadow-md hover:scale-105 active:scale-95"
            >
              Class {toRoman(c)}
            </Link>
          ))}
          <Link
            href="/classes"
            className="rounded-full border border-coral/30 bg-coral/5 px-5 py-3 text-base font-bold text-coral transition-all duration-200 hover:bg-coral/10 hover:scale-105 active:scale-95"
          >
            All classes →
          </Link>
        </div>
      </section>

      <RecentsStrip />

      {/* Featured books — centered heading */}
      <section aria-labelledby="featured-heading" className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 id="featured-heading" className="font-display text-3xl font-bold tracking-tight md:text-4xl text-center">
            Popular textbooks
          </h2>
          <Link
            href="/classes"
            className="group flex items-center gap-2 text-lg font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            View all <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 stagger-children w-full">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} showClass />
          ))}
        </div>
      </section>

      {/* CTA — centered */}
      <section className="flex flex-col items-center gap-5 rounded-3xl border border-border/20 bg-secondary/20 px-6 py-16 text-center md:py-20 animate-fade-in">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-indigo text-white shadow-xl">
          <Library className="h-10 w-10" />
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Ready to start reading?
        </h2>
        <p className="max-w-md text-xl leading-relaxed text-muted-foreground">
          Pick a class, search for a topic, or browse by subject — every NCERT textbook is just a tap away.
        </p>
        <div className="flex items-center gap-4 mt-3">
          <Link
            href="/classes"
            className="rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl transition-all duration-200 hover:bg-primary/90 hover:shadow-2xl hover:scale-105 active:scale-[0.98]"
          >
            Browse classes
          </Link>
          <Link
            href="/search"
            className="rounded-2xl border-2 border-border/40 bg-card/60 px-8 py-4 text-lg font-bold text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:border-coral/40 hover:text-primary hover:shadow-lg hover:scale-105 active:scale-[0.98]"
          >
            Search books
          </Link>
        </div>
      </section>
    </div>
  )
}
