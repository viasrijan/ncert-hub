'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Loader2, Minus, Plus, TriangleAlert, RotateCcw } from 'lucide-react'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/open-ncert/pdf.worker.min.mjs'

const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2]
const CORS_PROXIES = [
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
]

export function PdfViewer({ url, title }: { url: string; title: string }) {
  const [numPages, setNumPages] = useState(0)
  const [zoomIdx, setZoomIdx] = useState(2)
  const [containerWidth, setContainerWidth] = useState(0)
  const [failed, setFailed] = useState(false)
  const [proxyIdx, setProxyIdx] = useState(-1) // -1 = direct, 0 = corsproxy, 1 = allorigins
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setFailed(false)
    setLoading(false)
  }, [])

  const onLoadError = useCallback(
    (error: Error) => {
      console.error('PDF load error:', error)
      const nextProxyIdx = proxyIdx + 1
      if (nextProxyIdx < CORS_PROXIES.length) {
        setProxyIdx(nextProxyIdx)
        setLoading(true)
      } else {
        setFailed(true)
        setLoading(false)
      }
    },
    [proxyIdx],
  )

  const zoom = ZOOM_LEVELS[zoomIdx]
  const pageWidth = containerWidth > 0 ? Math.min(containerWidth - 24, 820) * zoom : undefined

  const pdfUrl = proxyIdx >= 0 ? CORS_PROXIES[proxyIdx](url) : url

  const handleRetry = () => {
    setFailed(false)
    setProxyIdx(-1)
    setLoading(true)
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div ref={containerRef} className="flex-1 overflow-auto">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center py-16">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
              <TriangleAlert className="size-8 text-muted-foreground" />
            </div>
            <p className="text-xl font-extrabold">Could not load this chapter</p>
            <p className="max-w-sm text-base font-medium leading-relaxed text-muted-foreground">
              The NCERT server may be unreachable. Try downloading the PDF directly or retry in a moment.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-all duration-150 hover:opacity-90 active:scale-[0.97]"
              >
                <RotateCcw className="size-5" />
                Retry
              </button>
              <a
                href={url}
                download
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-6 py-3 text-base font-bold text-foreground transition-all duration-150 hover:bg-secondary active:scale-[0.97]"
              >
                Download PDF
              </a>
            </div>
          </div>
        ) : (
          <>
            {loading && (
              <div className="flex h-full items-center justify-center py-20">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="size-10 animate-spin text-primary/60" />
                  <p className="text-base font-semibold text-muted-foreground">Loading PDF...</p>
                </div>
              </div>
            )}
            <Document
              file={pdfUrl}
              onLoadSuccess={onLoadSuccess}
              onLoadError={onLoadError}
              loading={null}
              className="flex flex-col items-center gap-4 px-3 py-4"
            >
              {Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={`${pdfUrl}-${i}`}
                  pageNumber={i + 1}
                  width={pageWidth}
                  className="overflow-hidden rounded-xl shadow-lg"
                  loading={
                    <div
                      style={{ width: pageWidth, height: pageWidth ? pageWidth * 1.35 : 400 }}
                      className="rounded-xl bg-card animate-pulse"
                    />
                  }
                />
              ))}
            </Document>
          </>
        )}
      </div>

      {!failed && numPages > 0 && (
        <div className="absolute bottom-4 right-4 flex items-center overflow-hidden rounded-full border border-border bg-background/95 shadow-xl backdrop-blur">
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.max(0, i - 1))}
            disabled={zoomIdx === 0}
            aria-label="Zoom out"
            className="flex size-12 items-center justify-center text-foreground transition-colors duration-150 hover:bg-secondary disabled:opacity-30"
          >
            <Minus className="size-5" />
          </button>
          <span className="w-14 text-center font-mono text-sm font-bold text-muted-foreground">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.min(ZOOM_LEVELS.length - 1, i + 1))}
            disabled={zoomIdx === ZOOM_LEVELS.length - 1}
            aria-label="Zoom in"
            className="flex size-12 items-center justify-center text-foreground transition-colors duration-150 hover:bg-secondary disabled:opacity-30"
          >
            <Plus className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
