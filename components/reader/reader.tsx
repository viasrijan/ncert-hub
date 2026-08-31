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
import { cn } from '@/lib/utils'

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

  const [showChrome, setShowChrome] = useState(true)
  const [activeChapterTitle, setActiveChapterTitle] = useState(chapter.title)
  const hideTimeoutRef = useState<NodeJS.Timeout | null>(null)[0] as unknown as React.MutableRefObject<NodeJS.Timeout | null>
  const chromeTimeout = useCallback(() => {
    if (hideTimeoutRef && hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    const t = setTimeout(() => setShowChrome(false), 3000)
    // @ts-ignore
    if (hideTimeoutRef) hideTimeoutRef.current = t
  }, [])

  useEffect(() => {
    chromeTimeout()
    const handleMove = () => {
      setShowChrome(true)
      chromeTimeout()
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchstart', handleMove)
    window.addEventListener('scroll', handleMove, true)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchstart', handleMove)
      window.removeEventListener('scroll', handleMove, true)
      if (hideTimeoutRef && hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [chromeTimeout])

  // Track current chapter as user scrolls (for footer)
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

  return (
    <div className="flex h-svh flex-col bg-muted" onMouseMove={() => setShowChrome(true)}>
      {/* Top bar - autohide, centered title, bigger buttons with tooltips */}
      <header className={`flex items-center gap-2 bg-background/95 px-3 py-3 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur md:px-4 transition-transform duration-300 ${showChrome ? 'translate-y-0' : '-translate-y-full'}`}>
        <button
          type="button"
          onClick={handleBack}
          aria-label="Back"
          title="Back"
          className="flex size-12 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
        >
          <ChevronLeft className="size-6" />
        </button>
        <div className="min-w-0 flex-1 text-center">
          <h1 className="truncate text-base font-bold leading-tight md:text-lg">
            {activeChapterTitle}
          </h1>
          <p className="truncate text-xs text-muted-foreground md:text-[13px]">
            {book.title} · Class {toRoman(book.classNum)}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={downloadPdf}
            disabled={downloading}
            aria-label="Download"
            title="Download PDF"
            className="flex size-12 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground disabled:opacity-50"
          >
            <Download className="size-5" />
          </button>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in new tab"
            title="Open in new tab"
            className="flex size-12 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink className="size-5" />
          </a>
          <button
            type="button"
            onClick={handleBack}
            aria-label="Close"
            title="Close"
            className="flex size-12 items-center justify-center rounded-md bg-secondary text-foreground transition-colors duration-150 hover:bg-secondary/80"
          >
            <X className="size-6" />
          </button>
        </div>
      </header>

      {/* Combined scrollable book viewer - A4, full page, centered, cropped */}
      <div className="flex-1 overflow-auto bg-[#0a0a0a] flex justify-center">
        <div className="w-full max-w-[850px] bg-white shadow-2xl min-h-full">
          <div className="flex flex-col">
            {book.chapters.map((ch) => (
              <div key={ch.pdfCode} data-chapter-title={ch.title} className="border-b border-gray-200 last:border-0">
                <CombinedChapterPdf book={book} chapter={ch} isActive={ch.pdfCode === chapter.pdfCode} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar - locked visible, only chapter count */}
      <footer className="flex items-center justify-between gap-2 bg-background/95 px-3 py-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.4)] backdrop-blur md:px-4">
        <ChapterNavLink chapter={prev} direction="prev" />
        <p className="text-xs font-semibold text-muted-foreground">
          {book.chapters.length} chapters
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
