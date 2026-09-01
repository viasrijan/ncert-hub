'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { Book, Chapter } from '@/lib/catalog'
import { NCERT_PDF_BASE, toRoman, getSolutionPdfUrl } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'

const JD_BASES = [
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-1@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-2@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-3@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-4@main',
]
const PROXY_BASE = 'https://ncert-pdf-proxy.srijan-pratap1998.workers.dev'

const PdfViewer = dynamic(
  () => import('@/components/reader/pdf-viewer').then((mod) => mod.PdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-1 items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-gold" />
          <p className="text-sm text-muted-foreground">Loading PDF viewer...</p>
        </div>
      </div>
    ),
  },
)

const CombinedChapterPdf = dynamic(
  () => import('@/components/reader/combined-chapter-pdf').then((mod) => mod.CombinedChapterPdf),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-card/50 p-8">
        <div className="size-6 animate-spin rounded-full border-2 border-muted border-t-gold" />
      </div>
    ),
  },
)

export function Reader({ book, chapter }: { book: Book; chapter: Chapter }) {
  const { addRecent } = useRecents()
  const router = useRouter()

  useEffect(() => {
    addRecent({ pdfCode: chapter.pdfCode, bookId: book.id })
  }, [addRecent, chapter.pdfCode, book.id])

  const isSolution = book.kind === 'solution'

  const handleBack = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push(isSolution ? '/solutions' : `/book/${book.id}`)
    }
  }, [router, book.id, isSolution])

  // Close always exits the viewer deterministically, regardless of history state.
  const handleClose = useCallback(() => {
    const destination = isSolution
      ? (book.solutionFor ? `/book/${book.solutionFor}` : '/solutions')
      : `/book/${book.id}`
    router.replace(destination)
  }, [router, book.id, book.solutionFor, isSolution])

  const idx = book.chapters.findIndex((c) => c.pdfCode === chapter.pdfCode)
  const prev = idx > 0 ? book.chapters[idx - 1] : null
  const next = idx < book.chapters.length - 1 ? book.chapters[idx + 1] : null

  const pdfUrl = isSolution ? getSolutionPdfUrl(chapter.pdfCode) : `${NCERT_PDF_BASE}/${chapter.pdfCode}.pdf`

  const [downloading, setDownloading] = useState(false)

  const resolveUrl = useCallback(async (file: string): Promise<string> => {
    if (file.endsWith('_sol.pdf')) {
      return getSolutionPdfUrl(file.replace('.pdf', ''))
    }
    for (const base of JD_BASES) {
      const candidate = `${base}/${file}`
      try {
        const res = await fetch(candidate, { method: 'HEAD' })
        if (res.ok) return candidate
      } catch {
        // try next mirror
      }
    }
    return `${PROXY_BASE}/pdf/${file}`
  }, [])

  const downloadPdf = useCallback(async () => {
    const file = `${chapter.pdfCode}.pdf`
    setDownloading(true)
    try {
      const url = await resolveUrl(file)
      const res = await fetch(url)
      const blob = await res.blob()
      const objUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = objUrl
      a.download = file
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(objUrl)
    } catch {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer')
    } finally {
      setDownloading(false)
    }
  }, [resolveUrl, pdfUrl, chapter.pdfCode])

  const [activeChapterTitle, setActiveChapterTitle] = useState(chapter.title)

  // Track current chapter as user scrolls (for footer/header)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute('data-chapter-title')
            if (title) setActiveChapterTitle(title)
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )
    const els = document.querySelectorAll('[data-chapter-title]')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [book.chapters])

  // Esc key closes viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose])

  return (
    <div className="flex h-dvh flex-col bg-[#0c0c0c] relative z-50 overflow-hidden">
      {/* Top bar - locked visible. Mobile: two compact rows (controls under the title).
          Desktop: single row with the title centered on the site. */}
      <header className="relative z-50 shrink-0 bg-background/95 px-3 py-2.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur md:px-6 md:py-3.5">
        {/* Mobile row 1: back · title · close */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground bg-secondary/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground shadow-sm"
          >
            <ChevronLeft className="size-6" />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <h1 className="truncate text-base font-bold leading-tight text-foreground">
              {activeChapterTitle}
            </h1>
            <p className="truncate text-xs text-muted-foreground">
              {book.title} · Class {book.classNum}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold text-black font-extrabold transition-colors duration-150 hover:opacity-90 shadow-md"
          >
            <X className="size-6" />
          </button>
        </div>
        {/* Mobile row 2: download + open */}
        <div className="flex items-center justify-center gap-2 pt-2.5 md:hidden">
          <button
            type="button"
            onClick={downloadPdf}
            disabled={downloading}
            className="flex items-center gap-1.5 rounded-lg bg-secondary/80 px-3 py-1.5 text-[13px] font-bold text-foreground transition-colors duration-150 hover:bg-secondary disabled:opacity-50"
          >
            <Download className="size-4" /> {downloading ? 'Preparing…' : 'Download'}
          </button>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-secondary/80 px-3 py-1.5 text-[13px] font-bold text-foreground transition-colors duration-150 hover:bg-secondary"
          >
            <ExternalLink className="size-4" /> Open in new tab
          </a>
        </div>

        {/* Desktop: back · centered title · download/open/close */}
        <div className="hidden md:flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back"
            title="Back"
            className="z-10 flex size-14 shrink-0 items-center justify-center rounded-xl text-foreground bg-secondary/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground shadow-sm"
          >
            <ChevronLeft className="size-7" />
          </button>
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex min-w-0 -translate-y-1/2 flex-col items-center px-[6rem] text-center">
            <h1 className="w-full truncate text-base font-bold leading-tight md:text-xl text-foreground">
              {activeChapterTitle}
            </h1>
            <p className="w-full truncate text-xs text-muted-foreground md:text-sm">
              {book.title} · Class {book.classNum}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={downloadPdf}
              disabled={downloading}
              aria-label="Download PDF"
              title="Download PDF"
              className="flex size-14 items-center justify-center rounded-xl text-foreground bg-secondary/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground shadow-sm disabled:opacity-50"
            >
              <Download className="size-6" />
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in new tab"
              title="Open in new tab"
              className="flex size-14 items-center justify-center rounded-xl text-foreground bg-secondary/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground shadow-sm"
            >
              <ExternalLink className="size-6" />
            </a>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              title="Close (Esc)"
              className="flex size-14 items-center justify-center rounded-xl bg-gold text-black font-extrabold transition-colors duration-150 hover:opacity-90 shadow-md"
            >
              <X className="size-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Combined scrollable book viewer - A4, full page, centered, cropped, butter smooth scrolling */}
      <div className="flex-1 overflow-y-auto bg-[#0a0a0a] flex justify-center scroll-smooth overscroll-auto">
        <div className="w-full max-w-[850px] bg-[#0c0c0c] shadow-2xl min-h-full flex flex-col items-center py-6 gap-6">
          {book.chapters.map((ch) => (
            <div key={ch.pdfCode} data-chapter-title={ch.title} className="w-full flex justify-center px-4">
              <CombinedChapterPdf book={book} chapter={ch} isActive={ch.pdfCode === chapter.pdfCode} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating prev/next round arrows hovering on either side of the document */}
      {prev && (
        <Link
          href={`/read/${prev.pdfCode}`}
          aria-label={`Previous chapter: ${prev.title}`}
          title={prev.title}
          className="fixed top-1/2 z-30 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-elevated backdrop-blur transition-colors duration-150 hover:bg-secondary left-2 md:size-16 md:left-[max(1rem,calc((100%-850px)/2-5rem))]"
        >
          <ChevronLeft className="size-7 md:size-8" />
        </Link>
      )}
      {next && (
        <Link
          href={`/read/${next.pdfCode}`}
          aria-label={`Next chapter: ${next.title}`}
          title={next.title}
          className="fixed top-1/2 z-30 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-elevated backdrop-blur transition-colors duration-150 hover:bg-secondary right-2 md:size-16 md:right-[max(1rem,calc((100%-850px)/2-5rem))]"
        >
          <ChevronRight className="size-7 md:size-8" />
        </Link>
      )}

      {/* Bottom bar - locked visible, only chapter count */}
      <footer className="flex items-center justify-center gap-3 bg-background/95 px-4 py-3.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur md:px-6 shrink-0">
        <p className="text-sm font-bold text-foreground">
          {book.chapters.length} chapters
        </p>
      </footer>
    </div>
  )
}
