'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Loader2, Minus, Plus, TriangleAlert, RotateCcw } from 'lucide-react'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/open-ncert/pdf.worker.min.mjs'

const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2]
const CORS_PROXY = 'https://corsproxy.io/?url='

export function PdfViewer({ url, title }: { url: string; title: string }) {
  const [numPages, setNumPages] = useState(0)
  const [zoomIdx, setZoomIdx] = useState(2)
  const [containerWidth, setContainerWidth] = useState(0)
  const [failed, setFailed] = useState(false)
  const [proxyFailed, setProxyFailed] = useState(false)
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
      if (!proxyFailed) {
        // First attempt failed, try with CORS proxy
        setProxyFailed(true)
        setLoading(true)
      } else {
        // Both attempts failed
        setFailed(true)
        setLoading(false)
      }
    },
    [proxyFailed],
  )

  const zoom = ZOOM_LEVELS[zoomIdx]
  const pageWidth = containerWidth > 0 ? Math.min(containerWidth - 24, 820) * zoom : undefined

  // Use CORS proxy if direct load fails
  const pdfUrl = proxyFailed ? `${CORS_PROXY}${encodeURIComponent(url)}` : url

  const handleRetry = () => {
    setFailed(false)
    setProxyFailed(false)
    setLoading(true)
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div ref={containerRef} className="flex-1 overflow-auto">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-muted">
              <TriangleAlert className="size-7 text-muted-foreground" />
            </div>
            <p className="text-lg font-extrabold">Could not load this chapter</p>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-muted-foreground">
              The NCERT server may be busy or blocking direct access. Try downloading the PDF instead.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-150 active:scale-[0.97]"
              >
                <RotateCcw className="size-4" />
                Retry
              </button>
              <a
                href={url}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-bold text-foreground transition-all duration-150 hover:bg-secondary active:scale-[0.97]"
              >
                Download PDF
              </a>
            </div>
          </div>
        ) : (
          <>
            {loading && (
              <div className="flex h-full items-center justify-center py-20">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="size-8 animate-spin text-muted-foreground" />
                  <p className="text-sm font-medium text-muted-foreground">Loading PDF...</p>
                </div>
              </div>
            )}
            <Document
              file={pdfUrl}
              onLoadSuccess={onLoadSuccess}
              onLoadError={onLoadError}
              loading={null}
              className="flex flex-col items-center gap-3 px-3 py-4"
            >
              {Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={i}
                  pageNumber={i + 1}
                  width={pageWidth}
                  className="overflow-hidden rounded-lg shadow-md"
                  loading={
                    <div
                      style={{ width: pageWidth, height: pageWidth ? pageWidth * 1.35 : 400 }}
                      className="rounded-lg bg-card animate-pulse"
                    />
                  }
                />
              ))}
            </Document>
          </>
        )}
      </div>

      {/* Zoom controls */}
      {!failed && numPages > 0 && (
        <div className="absolute bottom-4 right-4 flex items-center overflow-hidden rounded-full border border-border bg-background shadow-lg">
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.max(0, i - 1))}
            disabled={zoomIdx === 0}
            aria-label="Zoom out"
            className="flex size-11 items-center justify-center text-foreground transition-colors duration-150 hover:bg-secondary disabled:opacity-40"
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
            className="flex size-11 items-center justify-center text-foreground transition-colors duration-150 hover:bg-secondary disabled:opacity-40"
          >
            <Plus className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
