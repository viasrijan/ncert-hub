'use client'

import { useState, useCallback, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { ChevronLeft, ChevronRight, TriangleAlert, Download } from 'lucide-react'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

// Self-hosted mirrors on GitHub (served via jsDelivr CDN with CORS), split across
// 4 repos because GitHub rejects large single-repo pushes. Fallback to the
// Cloudflare Worker proxy that fetches live from ncert.nic.in.
const JD_BASES = [
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-1@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-2@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-3@main',
  'https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-4@main',
]
const PROXY_BASE = 'https://ncert-pdf-proxy.srijan-pratap1998.workers.dev'

export function PdfViewer({ url, title }: { url: string; title: string }) {
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [loadFailed, setLoadFailed] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  // Extract the PDF filename from the NCERT URL.
  const file = (() => {
    try {
      return new URL(url).pathname.split('/').pop() || ''
    } catch {
      return ''
    }
  })()

  // Try each jsDelivr mirror; fall back to the Cloudflare Worker proxy.
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setLoadFailed(false)
    setNumPages(0)
    setCurrentPage(1)

    const resolve = async () => {
      for (const base of JD_BASES) {
        const candidate = `${base}/${file}`
        try {
          const res = await fetch(candidate, { method: 'HEAD' })
          if (res.ok) {
            if (!cancelled) setPdfUrl(candidate)
            return
          }
        } catch {
          // try next mirror
        }
      }
      // Fallback: Cloudflare Worker proxy (live fetch from ncert.nic.in)
      if (!cancelled) setPdfUrl(`${PROXY_BASE}/pdf/${file}`)
    }

    if (file) resolve()
    return () => {
      cancelled = true
    }
  }, [file, url])

  const onDocumentLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n)
    setCurrentPage(1)
    setLoading(false)
  }, [])

  const onDocumentLoadError = useCallback(() => {
    // If a jsDelivr mirror failed (e.g. file still uploading), fall back to proxy.
    setPdfUrl((prev) => {
      if (prev && prev.includes('jsdelivr') && file) {
        const proxy = `${PROXY_BASE}/pdf/${file}`
        if (prev !== proxy) {
          setLoading(true)
          setLoadFailed(false)
          return proxy
        }
      }
      setLoading(false)
      setLoadFailed(true)
      return prev
    })
  }, [file])

  const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1))
  const goToNext = () => setCurrentPage((p) => Math.min(numPages, p + 1))

  const [downloading, setDownloading] = useState(false)

  const downloadPdf = useCallback(async () => {
    if (!pdfUrl) return
    setDownloading(true)
    try {
      const res = await fetch(pdfUrl)
      const blob = await res.blob()
      const objUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = objUrl
      a.download = file || 'chapter.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(objUrl)
    } catch {
      // fall back to opening in new tab if blob fetch fails
      window.open(pdfUrl, '_blank', 'noopener,noreferrer')
    } finally {
      setDownloading(false)
    }
  }, [pdfUrl, file])

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
              <a href={pdfUrl ?? url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-black transition-colors hover:opacity-90">
                Open in new tab
              </a>
              <button type="button" onClick={downloadPdf} disabled={downloading}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white/10 disabled:opacity-50">
                {downloading ? 'Preparing…' : 'Download PDF'}
              </button>
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
          <button type="button" onClick={downloadPdf} disabled={downloading} aria-label="Download PDF"
            className="flex size-10 items-center justify-center text-white transition-colors hover:bg-white/10 disabled:opacity-30">
            <Download className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
