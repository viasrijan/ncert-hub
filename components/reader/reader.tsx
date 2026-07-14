'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { Book, Chapter } from '@/lib/catalog'
import { NCERT_PDF_BASE, toRoman } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'
import { cn } from '@/lib/utils'

const PdfViewer = dynamic(
  () => import('@/components/reader/pdf-viewer').then((mod) => mod.PdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-1 items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-coral" />
          <p className="text-sm text-muted-foreground">Loading PDF viewer...</p>
        </div>
      </div>
    ),
  },
)

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
      <header className="flex items-center gap-2 border-b border-border bg-background/95 px-3 py-2 backdrop-blur md:px-4">
        <Link
          href={`/book/${book.id}`}
          aria-label={`Back to ${book.title}`}
          className="flex size-10 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
        >
          <ChevronLeft className="size-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-sm font-bold leading-tight">
            {chapter.title}
          </h1>
          <p className="truncate text-[11px] text-muted-foreground">
            {book.title} · Class {toRoman(book.classNum)}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <a
            href={pdfUrl}
            download
            aria-label="Download chapter PDF"
            className="flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
          >
            <Download className="size-4" />
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open official NCERT PDF"
            className="flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
      </header>

      {/* PDF viewer */}
      <PdfViewer url={pdfUrl} title={chapter.title} />

      {/* Bottom chapter nav */}
      <footer className="flex items-center justify-between gap-2 border-t border-border bg-background/95 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:px-4">
        <ChapterNavLink chapter={prev} direction="prev" />
        <p className="text-[11px] font-semibold text-muted-foreground">
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
        className="flex w-28 items-center gap-1 px-2 py-2 text-xs text-muted-foreground/40 md:w-36"
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
      className="flex w-28 items-center gap-1 rounded-md px-2 py-2 text-xs font-semibold text-foreground transition-colors duration-150 hover:bg-secondary md:w-36"
      title={chapter.title}
    >
      {direction === 'prev' && <ChevronLeft className="size-4" />}
      <span className={cn('truncate', direction === 'next' && 'ml-auto')}>{label}</span>
      {direction === 'next' && <ChevronRight className="size-4" />}
    </Link>
  )
}
