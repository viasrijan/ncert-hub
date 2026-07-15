'use client'

import Link from 'next/link'
import { Clock } from 'lucide-react'
import { getBook, toRoman } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'
import { getSubjectGradient } from '@/lib/subject-gradients'

export function RecentsStrip() {
  const { recents } = useRecents()
  if (recents.length === 0) return null

  return (
    <section aria-labelledby="recents-heading" className="-mx-6 md:-mx-8 flex flex-col items-center gap-4 animate-fade-in-up animate-delay-100">
      <div className="flex items-center gap-2.5 mx-6 md:mx-8">
        <Clock className="h-[20px] w-[20px] text-gold" />
        <h2 id="recents-heading" className="font-display text-xl font-bold text-white tracking-tight">
          Continue reading
        </h2>
      </div>
      <div className="flex gap-3 overflow-x-auto px-6 md:px-8 pb-2 w-full justify-center">
        {recents.slice(0, 8).map((r) => {
          const book = getBook(r.bookId)
          if (!book) return null
          const chapter = book.chapters.find((c) => c.pdfCode === r.pdfCode)
          if (!chapter) return null
          return (
            <Link
              key={r.pdfCode}
              href={`/read/${r.pdfCode}`}
              className="flex w-64 shrink-0 items-center gap-3.5 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm p-3.5 shadow-card transition-colors duration-200 hover:shadow-elevated hover:border-gold/20"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl shadow-sm" style={{ background: getSubjectGradient(book.subject).gradient }}>
                {(() => { const Ic = getSubjectGradient(book.subject).icon; return <Ic className="size-5 text-white/40 absolute inset-0 m-auto" strokeWidth={1.5} /> })()}
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-bold text-white">{chapter.title}</p>
                <p className="truncate text-[13px] font-semibold text-white/60">{book.title} · Class {toRoman(book.classNum)}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
