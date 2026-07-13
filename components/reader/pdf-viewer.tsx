'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Loader2, Minus, Plus, TriangleAlert } from 'lucide-react'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

const ZOOM_LEVELS = [0.6, 0.8, 1, 1.25, 1.5, 2]

export function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState(0)
  const [zoomIdx, setZoomIdx] = useState(2)
  const [containerWidth, setContainerWidth] = useState(0)
  const [failed, setFailed] = useState(false)
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
  }, [])

  const zoom = ZOOM_LEVELS[zoomIdx]
  // Fit page width to container (minus padding), scaled by zoom level
  const pageWidth = containerWidth > 0 ? Math.min(containerWidth - 24, 820) * zoom : undefined

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div ref={containerRef} className="flex-1 overflow-auto">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <TriangleAlert className="size-8 text-muted-foreground" />
            <p className="text-sm font-medium">Could not load this chapter</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The NCERT server may be busy. Try again, or use the download button above.
            </p>
            <button
              type="button"
              onClick={() => setFailed(false)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Retry
            </button>
          </div>
        ) : (
          <Document
            file={url}
            onLoadSuccess={onLoadSuccess}
            onLoadError={() => setFailed(true)}
            loading={
              <div className="flex h-full items-center justify-center py-20">
                <Loader2 className="size-6 animate-spin text-muted-foreground" />
              </div>
            }
            className="flex flex-col items-center gap-3 px-3 py-4"
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                width={pageWidth}
                className="overflow-hidden rounded-md shadow-sm"
                loading={
                  <div
                    style={{ width: pageWidth, height: pageWidth ? pageWidth * 1.35 : 400 }}
                    className="rounded-md bg-card"
                  />
                }
              />
            ))}
          </Document>
        )}
      </div>

      {/* Zoom controls */}
      {!failed && (
        <div className="absolute bottom-4 right-4 flex items-center overflow-hidden rounded-full border border-border bg-background shadow-md">
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.max(0, i - 1))}
            disabled={zoomIdx === 0}
            aria-label="Zoom out"
            className="flex size-10 items-center justify-center text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-12 text-center font-mono text-xs text-muted-foreground">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.min(ZOOM_LEVELS.length - 1, i + 1))}
            disabled={zoomIdx === ZOOM_LEVELS.length - 1}
            aria-label="Zoom in"
            className="flex size-10 items-center justify-center text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <Plus className="size-4" />
          </button>
        </div>
      )}
    </div>
  )
}
