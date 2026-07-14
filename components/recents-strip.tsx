'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { getBook, toRoman } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'
import { assetPath } from '@/lib/utils'

export function RecentsStrip() {
  const { recents } = useRecents()
  if (recents.length === 0) return null

  return (
    <section aria-labelledby="recents-heading" className="flex flex-col items-center gap-4 animate-fade-in-up animate-delay-100">
      <div className="flex items-center gap-2.5">
        <Clock className="h-[20px] w-[20px] text-teal" />
        <h2 id="recents-heading" className="font-display text-xl font-bold tracking-tight">
          Continue reading
        </h2>
      </div>
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0 w-full justify-center">
        {recents.slice(0, 8).map((r) => {
          const book = getBook(r.bookId)
          if (!book) return null
          const chapter = book.chapters.find((c) => c.pdfCode === r.pdfCode)
          if (!chapter) return null
          return (
            <Link
              key={r.pdfCode}
              href={`/read/${r.pdfCode}`}
              className="flex w-64 shrink-0 items-center gap-3.5 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm p-3.5 transition-all duration-200 hover:shadow-lg hover:border-teal/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-muted shadow-sm">
                <Image src={assetPath(book.cover || '/covers/general.png')} alt="" fill sizes="56px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-bold text-card-foreground">{chapter.title}</p>
                <p className="truncate text-[13px] font-semibold text-muted-foreground">{book.title} · Class {toRoman(book.classNum)}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
