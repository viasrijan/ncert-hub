'use client'

import { useState, useCallback, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { ChevronLeft, ChevronRight, TriangleAlert } from 'lucide-react'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

// Cloudflare Worker CORS proxy (deployed at ncert-pdf-proxy.srijan-pratap1998.workers.dev)
const PROXY_BASE = 'https://ncert-pdf-proxy.srijan-pratap1998.workers.dev'

export function PdfViewer({ url, title }: { url: string; title: string }) {
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [loadFailed, setLoadFailed] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  // Extract the PDF filename from the NCERT URL and build the proxied URL.
  const proxiedUrl = (() => {
    try {
      const u = new URL(url)
      const file = u.pathname.split('/').pop() || ''
      return `${PROXY_BASE}/pdf/${file}`
    } catch {
      return url
    }
  })()

  useEffect(() => {
    setPdfUrl(proxiedUrl)
    setLoading(true)
    setLoadFailed(false)
    setNumPages(0)
    setCurrentPage(1)
  }, [proxiedUrl])

  const onDocumentLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n)
    setCurrentPage(1)
    setLoading(false)
  }, [])

  const onDocumentLoadError = useCallback(() => {
    setLoading(false)
    setLoadFailed(true)
  }, [])

  const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1))
  const goToNext = () => setCurrentPage((p) => Math.min(numPages, p + 1))

  return (
    <div className="relative flex min-h-0 flex-1 flex-col bg-sidebar">
      <div className="flex-1 overflow-auto flex items-start justify-center p-4">
        {loadFailed ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center py-16">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
              <TriangleAlert className="size-8 text-white/40" />
            </div>
            <p className="text-xl font-extrabold text-white">Could not load this chapter</p>
            <p className="max-w-sm text-base font-medium leading-relaxed text-white/50">
              The NCERT server may be unreachable. Try the options below.
            </p>
            <div className="flex gap-3 mt-2">
              <a href={url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-black transition-colors hover:opacity-90">
                Open in new tab
              </a>
              <a href={url} download
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white/10">
                Download PDF
              </a>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 rounded-2xl bg-background/90 backdrop-blur-md px-8 py-6 shadow-lg">
                  <div className="size-8 animate-spin rounded-full border-4 border-white/10 border-t-gold" />
                  <p className="text-sm font-semibold text-white/60">Loading PDF...</p>
                </div>
              </div>
            )}
            {pdfUrl && (
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading=""
                noData=""
              >
                <Page
                  pageNumber={currentPage}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-lg"
                  width={Math.min(800, typeof window !== 'undefined' ? window.innerWidth - 64 : 800)}
                />
              </Document>
            )}
          </div>
        )}
      </div>

      {!loadFailed && !loading && numPages > 0 && (
        <div className="absolute bottom-4 right-4 flex items-center overflow-hidden rounded-full border border-white/10 bg-background/95 shadow-xl backdrop-blur z-20">
          <button type="button" onClick={goToPrev} disabled={currentPage <= 1} aria-label="Previous page"
            className="flex size-10 items-center justify-center text-white transition-colors hover:bg-white/10 disabled:opacity-30">
            <ChevronLeft className="size-5" />
          </button>
          <span className="w-20 text-center text-sm font-bold text-white/60">
            {currentPage} / {numPages}
          </span>
          <button type="button" onClick={goToNext} disabled={currentPage >= numPages} aria-label="Next page"
            className="flex size-10 items-center justify-center text-white transition-colors hover:bg-white/10 disabled:opacity-30">
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
