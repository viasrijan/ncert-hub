'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'
import type { Book, Chapter } from '@/lib/catalog'
import { NCERT_PDF_BASE, toRoman } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

export function Reader({ book, chapter }: { book: Book; chapter: Chapter }) {
  const { addRecent } = useRecents()

  useEffect(() => {
    addRecent({ pdfCode: chapter.pdfCode, bookId: book.id })
  }, [addRecent, chapter.pdfCode, book.id])

  const idx = book.chapters.findIndex((c) => c.pdfCode === chapter.pdfCode)
  const prev = idx > 0 ? book.chapters[idx - 1] : null
  const next = idx < book.chapters.length - 1 ? book.chapters[idx + 1] : null

  const pdfUrl = `${NCERT_PDF_BASE}/${chapter.pdfCode}.pdf`

  return (
    <div className="flex h-svh flex-col bg-muted">
      {/* Top bar */}
      <header className="flex items-center gap-2 border-b border-border bg-background px-3 py-2 md:px-4">
        <Link
          href={`/book/${book.id}`}
          aria-label={`Back to ${book.title}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <ChevronLeft className="size-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-sm font-semibold leading-tight">
            {chapter.title}
          </h1>
          <p className="truncate text-xs text-muted-foreground">
            {book.title} · Class {toRoman(book.classNum)}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <a
            href={pdfUrl}
            download
            aria-label="Download chapter PDF"
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Download className="size-4.5" />
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open official NCERT PDF"
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink className="size-4.5" />
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* PDF link area */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
          <p className="text-sm font-medium">{chapter.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {book.title} · Class {toRoman(book.classNum)}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="size-4" />
              View PDF
            </a>
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Bottom chapter nav */}
      <footer className="flex items-center justify-between gap-2 border-t border-border bg-background px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] md:px-4">
        <ChapterNavLink chapter={prev} direction="prev" />
        <p className="text-xs text-muted-foreground">
          {idx + 1} / {book.chapters.length}
        </p>
        <ChapterNavLink chapter={next} direction="next" />
      </footer>
    </div>
  )
}

function ChapterNavLink({
  chapter,
  direction,
}: {
  chapter: Chapter | null
  direction: 'prev' | 'next'
}) {
  const label = direction === 'prev' ? 'Previous' : 'Next'
  if (!chapter) {
    return (
      <span
        aria-hidden="true"
        className="flex w-24 items-center gap-1 px-2 py-1.5 text-sm text-muted-foreground/40 md:w-32"
      >
        {direction === 'prev' && <ChevronLeft className="size-4" />}
        <span className={cn(direction === 'next' && 'ml-auto')}>{label}</span>
        {direction === 'next' && <ChevronRight className="size-4" />}
      </span>
    )
  }
  return (
    <Link
      href={`/read/${chapter.pdfCode}`}
      className="flex w-24 items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:w-32"
      title={chapter.title}
    >
      {direction === 'prev' && <ChevronLeft className="size-4" />}
      <span className={cn('truncate', direction === 'next' && 'ml-auto')}>{label}</span>
      {direction === 'next' && <ChevronRight className="size-4" />}
    </Link>
  )
}
