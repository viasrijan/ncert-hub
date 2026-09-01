'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw, X } from 'lucide-react'
import type { Book, Chapter } from '@/lib/catalog'
import { NCERT_PDF_BASE, getSolutionPdfUrl } from '@/lib/catalog'
import { useRecents } from '@/lib/library-store'

const JD_BASES = [
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-1@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-2@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-3@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-4@main',
]
const PROXY_BASE = 'https://ncert-pdf-proxy.srijan-pratap1998.workers.dev'

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

  const pdfUrl = isSolution ? getSolutionPdfUrl(chapter.pdfCode) : `${NCERT_PDF_BASE}/${chapter.pdfCode}.pdf`

  const [downloading, setDownloading] = useState(false)
  const [zoom, setZoom] = useState(1)
  const clampZoom = (value: number) => Math.min(1.75, Math.max(0.75, Number(value.toFixed(2))))

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
  const [controlsVisible, setControlsVisible] = useState(true)

  // Track current chapter as user scrolls (for the header)
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
      <header className="relative z-50 shrink-0 bg-background/95 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur md:px-6 md:py-3.5">
        {/* Mobile row 1: back · title · close */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back"
            title="Back to book"
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-foreground bg-secondary/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground shadow-sm"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <h1 className="truncate text-base font-bold leading-tight text-foreground">
              {activeChapterTitle}
            </h1>
            <p className="truncate text-xs text-muted-foreground">
              {isSolution ? 'NCERT Hub Solutions · ' : ''}{book.title} - Class {book.classNum} ({book.chapters.length} chapters)
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            title="Close"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold text-black font-extrabold transition-colors duration-150 hover:opacity-90 shadow-md"
          >
            <X className="size-5" />
          </button>
        </div>
        {/* Mobile row 2 is intentionally omitted: controls float over the lower page area. */}

        {/* Desktop: back · centered title · download/open/close */}
        <div className="hidden md:flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back"
            title="Back to book"
            className="z-10 flex size-14 shrink-0 items-center justify-center rounded-full text-foreground bg-secondary/80 transition-colors duration-150 hover:bg-secondary hover:text-foreground shadow-sm"
          >
            <ChevronLeft className="size-7" />
          </button>
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex min-w-0 -translate-y-1/2 flex-col items-center px-[6rem] text-center">
            <h1 className="w-full truncate text-base font-bold leading-tight md:text-xl text-foreground">
              {activeChapterTitle}
            </h1>
            <p className="w-full truncate text-xs text-muted-foreground md:text-sm">
              {isSolution ? 'NCERT Hub Solutions · ' : ''}{book.title} - Class {book.classNum} ({book.chapters.length} chapters)
            </p>
          </div>
          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={downloadPdf}
            disabled={downloading}
            aria-label="Download PDF"
            title="Download PDF"
            className="group relative flex size-11 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-colors duration-150 hover:bg-secondary shadow-sm disabled:opacity-50 md:size-14"
          >
              <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] text-white shadow-md group-hover:block">Download PDF</span>
              <Download className="size-5 md:size-6" />
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in new tab"
              title="Open in new tab"
              className="group relative flex size-11 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-colors duration-150 hover:bg-secondary shadow-sm md:size-14"
            >
              <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] text-white shadow-md group-hover:block">Open in new tab</span>
              <ExternalLink className="size-5 md:size-6" />
            </a>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              title="Close (Esc)"
              className="group relative flex size-11 items-center justify-center rounded-full bg-gold text-black font-extrabold transition-colors duration-150 hover:opacity-90 shadow-md md:size-14"
            >
              <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] font-normal text-white shadow-md group-hover:block">Close</span>
              <X className="size-5 md:size-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Combined scrollable book viewer - zoom changes page width while this header stays locked */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#0a0a0a] flex justify-center scroll-smooth overscroll-auto">
        <div className="w-full max-w-[850px] bg-[#0c0c0c] shadow-2xl min-h-full flex flex-col items-center py-6 gap-6">
          {book.chapters.map((ch) => (
            <div key={ch.pdfCode} data-chapter-title={ch.title} className="w-full flex justify-center px-4">
              <CombinedChapterPdf book={book} chapter={ch} isActive={ch.pdfCode === chapter.pdfCode} scale={zoom} />
            </div>
          ))}
        </div>
      </div>

        {/* Mobile controls: icon-only and hidden until hovered/focused near the bottom of the page */}
      <div className="group absolute inset-x-0 bottom-0 z-40 flex justify-end pb-5 pr-4 md:hidden" onMouseEnter={() => setControlsVisible(true)} onMouseLeave={() => setControlsVisible(false)}>
        <div className={`flex items-center gap-2 rounded-full bg-background/90 p-1.5 shadow-elevated backdrop-blur transition-all duration-200 ${controlsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
            <button type="button" onClick={downloadPdf} disabled={downloading} aria-label="Download PDF" title="Download PDF" className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary disabled:opacity-50"><Download className="size-5" /></button>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" aria-label="Open in new tab" title="Open in new tab" className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary"><ExternalLink className="size-5" /></a>
            <button type="button" onClick={() => setZoom(clampZoom(zoom - 0.1))} disabled={zoom <= 0.75} aria-label="Zoom out" title="Zoom out" className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary disabled:opacity-40"><ZoomOut className="size-5" /></button>
            <button type="button" onClick={() => setZoom(clampZoom(zoom + 0.1))} disabled={zoom >= 1.75} aria-label="Zoom in" title="Zoom in" className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary disabled:opacity-40"><ZoomIn className="size-5" /></button>
            <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Reset zoom" title="Reset zoom" className="flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary disabled:opacity-40"><RotateCcw className="size-5" /></button>
          </div>
        </div>

        {/* Desktop zoom controls */}
      <div className="absolute bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 overflow-visible rounded-full bg-background/90 p-1 shadow-elevated backdrop-blur md:flex">
        <div className="group relative flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary">
          <button type="button" onClick={() => setZoom(clampZoom(zoom - 0.1))} disabled={zoom <= 0.75} aria-label="Zoom out" title="Zoom out" className="flex size-full items-center justify-center disabled:opacity-40"><ZoomOut className="size-5" /></button>
          <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] text-white shadow-md group-hover:block">Zoom out</span>
        </div>
        <span className="w-12 text-center text-xs font-bold text-muted-foreground">{Math.round(zoom * 100)}%</span>
        <div className="group relative flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary">
          <button type="button" onClick={() => setZoom(clampZoom(zoom + 0.1))} disabled={zoom >= 1.75} aria-label="Zoom in" title="Zoom in" className="flex size-full items-center justify-center disabled:opacity-40"><ZoomIn className="size-5" /></button>
          <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] text-white shadow-md group-hover:block">Zoom in</span>
        </div>
        <div className="group relative flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary">
          <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Reset zoom" title="Reset zoom" className="flex size-full items-center justify-center disabled:opacity-40"><RotateCcw className="size-5" /></button>
          <span className="pointer-events-none absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] text-white shadow-md group-hover:block">Reset zoom</span>
        </div>
      </div>
    </div>
  )
}
