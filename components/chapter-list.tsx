'use client'

import Link from 'next/link'
import { Download } from 'lucide-react'
import type { Book } from '@/lib/catalog'
import { NCERT_PDF_BASE } from '@/lib/catalog'

export function ChapterList({ book }: { book: Book }) {
  return (
    <section aria-label="Chapters" className="flex flex-col gap-2">
      <h2 className="text-lg font-extrabold text-foreground">Chapters</h2>
      <ol className="flex flex-col divide-y divide-border overflow-hidden rounded-lg border border-border bg-card/60 backdrop-blur-sm shadow-card">
        {book.chapters.map((chapter) => (
          <li key={chapter.pdfCode} className="flex items-stretch">
            <Link
              href={`/read/${chapter.pdfCode}`}
              className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-accent/50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border-2 border-gold text-sm font-bold text-gold bg-transparent">
                {chapter.number}
              </span>
              <span className="min-w-0 truncate text-base font-semibold text-foreground">
                {chapter.title}
              </span>
            </Link>
            <a
              href={`${NCERT_PDF_BASE}/${chapter.pdfCode}.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${chapter.title} PDF`}
              className="flex items-center px-4 text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              <Download className="size-5" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
