import Link from 'next/link'
import { ArrowRight, Library } from 'lucide-react'
import { BOOKS, CLASSES, getBooksByClass, toRoman } from '@/lib/catalog'
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
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 md:py-12">
      {/* Hero */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2 self-start rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          <Library className="size-3.5" />
          {BOOKS.length} textbooks · {totalChapters.toLocaleString()} chapters
        </div>
        <h1 className="max-w-2xl font-serif text-3xl font-semibold leading-tight tracking-tight md:text-5xl text-balance">
          Every NCERT textbook, beautifully organized
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          Browse, read, and download official NCERT textbooks for Classes I to XII.
          Free, fast, and made for students.
        </p>
        <SearchTrigger />
      </section>

      <RecentsStrip />

      {/* Class picker */}
      <section aria-labelledby="classes-heading" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 id="classes-heading" className="text-base font-semibold">
            Browse by class
          </h2>
          <Link
            href="/classes"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            All classes <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
          {CLASSES.map((c) => (
            <Link
              key={c}
              href={`/classes/${c}`}
              className="flex flex-col items-center gap-0.5 rounded-xl border border-border bg-card py-3 transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-lg font-semibold text-card-foreground">{toRoman(c)}</span>
              <span className="text-[11px] text-muted-foreground">
                {getBooksByClass(c).length} books
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured books */}
      <section aria-labelledby="featured-heading" className="flex flex-col gap-3">
        <h2 id="featured-heading" className="text-base font-semibold">
          Popular textbooks
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} showClass />
          ))}
        </div>
      </section>
    </div>
  )
}
