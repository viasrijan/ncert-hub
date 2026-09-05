import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BOOKS, toRoman } from '@/lib/catalog'
import { GUIDES } from '@/lib/guides'
import { BookCard } from '@/components/book-card'
import { RecentsStrip } from '@/components/recents-strip'
import { SearchTrigger } from '@/components/search-trigger'

const FEATURED_IDS = ['jemh1', 'jesc1', 'lemh1', 'leph1', 'kebo1', 'jeff1', 'iemh1', 'hesc1']

const FAQS = [
  {
    q: 'Is NCERT Hub official?',
    a: 'No. NCERT Hub is an independent, unofficial project. All textbooks belong to NCERT, and the official editions live at ncert.nic.in. This site simply organises the same books by class and subject so they are easier to browse, read, and download.',
  },
  {
    q: 'Are the books free to read and download?',
    a: 'Yes. Every textbook chapter can be read online in the built-in reader or downloaded as a PDF for offline study, with no account and no payment. Bookmarks and reading history are stored only in your own browser.',
  },
  {
    q: 'Which books should I read for board exams?',
    a: 'Start with the NCERT textbook for your class and subject — board questions in Classes 10 and 12 are overwhelmingly drawn from NCERT text, examples, and exercises. Finish the textbook honestly before touching reference books, then practise with sample papers.',
  },
  {
    q: 'What are the Solutions books?',
    a: 'Solutions are chapter-wise answer guides that open from trusted external educational websites. Attempt the NCERT questions yourself first, then use solutions to check your method — especially the steps, which is where most marks are lost.',
  },
]

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => BOOKS.find((b) => b.id === id)).filter(
    (b): b is NonNullable<typeof b> => Boolean(b),
  )
  const totalChapters = BOOKS.reduce((n, b) => n + b.chapters.length, 0)

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-12 pt-0 md:px-8 md:pb-16">
      <section className="flex flex-col items-center text-center gap-10 animate-fade-in-up">
        <div className="flex items-center gap-2 sm:gap-3 rounded-full bg-card/60 px-4 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-foreground uppercase tracking-wider backdrop-blur-sm shadow-card">
          <span className="num-gold">{BOOKS.length}</span> TEXTBOOKS
          <span className="text-border/60">·</span>
          <span className="num-gold">{totalChapters.toLocaleString()}</span> CHAPTERS
        </div>

        <h1 className="max-w-3xl font-display leading-relaxed tracking-tight text-balance text-foreground">
          <span className="text-lg md:text-2xl">An <strong className="font-bold text-gold">unofficial library</strong> of <Link href="/subjects" className="font-bold text-foreground transition-colors hover:text-gold">NCERT Books</Link> and <Link href="/solutions" className="font-bold text-foreground transition-colors hover:text-gold">Solutions</Link>.</span>
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

      <section aria-labelledby="featured-heading" className="mt-8 flex flex-col items-center gap-6">
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

      <section aria-labelledby="how-heading" className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs font-bold tracking-widest uppercase text-gold">How it works</p>
          <h2 id="how-heading" className="font-display text-xl font-bold tracking-tight md:text-2xl text-center text-foreground">
            Browse, read, revise
          </h2>
        </div>
        <p className="max-w-3xl text-center text-[14px] leading-relaxed text-foreground/75">
          Pick your class to see every textbook prescribed for it, or pick a subject to follow it across all
          twelve classes. Open any chapter to read it in a fast, mobile-friendly viewer, download the PDF for
          offline study, or bookmark the book — your library lives in your browser, no account needed. Finished
          the exercises? The companion Solutions section links chapter-wise answer guides from trusted sources.
        </p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 w-full">
          {[
            { t: 'Browse', d: '139 NCERT textbooks across Classes I–XII, organised by class and subject.' },
            { t: 'Read & download', d: '1,200+ chapters online or as PDFs for offline study, free forever.' },
            { t: 'Check answers', d: 'Chapter-wise answer guides to verify your exercise solutions.' },
          ].map((f) => (
            <div key={f.t} className="rounded-xl bg-card/60 backdrop-blur-sm shadow-card px-4 py-3.5 flex flex-col gap-1 border border-white/5">
              <h3 className="font-display text-base font-bold text-foreground">{f.t}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="guides-heading" className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs font-bold tracking-widest uppercase text-gold">Guides</p>
          <h2 id="guides-heading" className="font-display text-xl font-bold tracking-tight md:text-2xl text-center text-foreground">
            Study guides
          </h2>
          <Link href="/guides" className="group flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold/70">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 w-full">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col gap-1.5 rounded-xl bg-card/80 backdrop-blur-sm px-4 py-3.5 shadow-card border border-white/5 transition-colors duration-200 hover:shadow-elevated"
            >
              <h3 className="font-display text-base font-bold text-foreground">{guide.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-2">{guide.description}</p>
              <span className="text-[13px] font-bold text-gold">Read guide · {guide.readMinutes} min →</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs font-bold tracking-widest uppercase text-gold">FAQ</p>
          <h2 id="faq-heading" className="font-display text-xl font-bold tracking-tight md:text-2xl text-center text-foreground">
            Frequently asked questions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 w-full">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-xl bg-card/60 backdrop-blur-sm shadow-card px-4 py-3.5 flex flex-col gap-1.5 border border-white/5">
              <h3 className="text-[15px] font-extrabold text-foreground">{faq.q}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
