'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import type { Book, Chapter } from '@/lib/catalog'
import { getSolutionPdfUrl } from '@/lib/catalog'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const JD_BASES = [
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-1@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-2@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-3@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-4@main',
]
const PROXY_BASE = 'https://ncert-pdf-proxy.srijan-pratap1998.workers.dev'

export function CombinedChapterPdf({ book, chapter, isActive, scale = 1 }: { book: Book; chapter: Chapter; isActive?: boolean; scale?: number }) {
  const [numPages, setNumPages] = useState(0)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll the active chapter into view only once, after its PDF has loaded.
  // Never re-scroll on re-renders, which caused the viewer to jump back to the
  // top while the user was scrolling.
  const hasScrolled = useRef(false)
  useEffect(() => {
    if (!isActive || hasScrolled.current || numPages === 0) return
    hasScrolled.current = true
    sectionRef.current?.scrollIntoView({ block: 'start' })
  }, [isActive, numPages])

  const isSolution = book.kind === 'solution'
  const file = `${chapter.pdfCode}.pdf`

  useEffect(() => {
    let cancelled = false
    const resolve = async () => {
      if (isSolution) {
        const url = getSolutionPdfUrl(chapter.pdfCode)
        if (!cancelled) {
          setPdfUrl(url)
          setLoading(false)
        }
        return
      }
      for (const base of JD_BASES) {
        const candidate = `${base}/${file}`
        try {
          const res = await fetch(candidate, { method: 'HEAD' })
          if (res.ok) {
            if (!cancelled) {
              setPdfUrl(candidate)
              setLoading(false)
            }
            return
          }
        } catch {}
      }
      if (!cancelled) {
        setPdfUrl(`${PROXY_BASE}/pdf/${file}`)
        setLoading(false)
      }
    }
    resolve()
    return () => { cancelled = true }
  }, [file, chapter.pdfCode, isSolution])

  const onLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n)
  }, [])

  if (loading || !pdfUrl) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-card/50 p-8">
        <div className="size-6 animate-spin rounded-full border-2 border-muted border-t-gold" />
      </div>
    )
  }

  return (
    <div ref={sectionRef} className="flex flex-col gap-2 w-full items-center bg-[#0c0c0c] py-4">
      <Document
        file={pdfUrl}
        onLoadSuccess={onLoadSuccess}
        loading={<div className="flex justify-center py-8"><div className="size-6 animate-spin rounded-full border-2 border-muted border-t-gold" /></div>}
        error={<div className="py-8 text-center text-sm text-muted-foreground">Failed to load chapter</div>}
      >
        <div className="flex flex-col gap-6 w-full items-center">
          {Array.from({ length: numPages || 1 }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-xl bg-white"
              width={typeof window !== 'undefined' ? Math.min(800, window.innerWidth - 48) * scale : 800 * scale}
            />
          ))}
          {numPages === 0 && (
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-xl bg-white"
              width={typeof window !== 'undefined' ? Math.min(800, window.innerWidth - 48) * scale : 800 * scale}
            />
          )}
        </div>
      </Document>
    </div>
  )
}
