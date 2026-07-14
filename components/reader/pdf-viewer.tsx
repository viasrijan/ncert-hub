'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Minus, Plus, TriangleAlert } from 'lucide-react'

const ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2]

export function PdfViewer({ url, title }: { url: string; title: string }) {
  const [zoomIdx, setZoomIdx] = useState(2)
  const [loading, setLoading] = useState(true)
  const [loadFailed, setLoadFailed] = useState(false)
  const embedRef = useRef<HTMLEmbedElement>(null)

  const zoom = ZOOM_STEPS[zoomIdx]

  // Detect load
  useEffect(() => {
    setLoading(true)
    setLoadFailed(false)
    const timeout = setTimeout(() => {
      // If still loading after 20s, assume it's working
      setLoading(false)
    }, 20000)
    return () => clearTimeout(timeout)
  }, [url])

  const onLoad = useCallback(() => {
    setLoading(false)
    setLoadFailed(false)
  }, [])

  const onError = useCallback(() => {
    setLoading(false)
    setLoadFailed(true)
  }, [])

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-auto">
        {loadFailed ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center py-16">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
              <TriangleAlert className="size-8 text-muted-foreground" />
            </div>
            <p className="text-xl font-extrabold">Could not load this chapter</p>
            <p className="max-w-sm text-base font-medium leading-relaxed text-muted-foreground">
              The NCERT server may be unreachable. Try the options below.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-all duration-150 hover:opacity-90 active:scale-[0.97]"
              >
                Open in new tab
              </a>
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
          <div className="flex flex-1 items-center justify-center">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-4 rounded-2xl bg-background/80 backdrop-blur-md px-8 py-6 shadow-lg">
                  <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-coral" />
                  <p className="text-sm font-semibold text-muted-foreground">Loading PDF...</p>
                </div>
              </div>
            )}
            <embed
              ref={embedRef}
              src={url}
              type="application/pdf"
              onLoad={onLoad}
              onError={onError}
              className="h-full w-full"
              style={{
                minHeight: 'calc(100vh - 7rem)',
                // Apply zoom via transform
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                width: `${100 / zoom}%`,
                height: `${100 / zoom}%`,
              }}
            />
          </div>
        )}
      </div>

      {!loadFailed && !loading && (
        <div className="absolute bottom-4 right-4 flex items-center overflow-hidden rounded-full border border-border bg-background/95 shadow-xl backdrop-blur z-20">
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
            onClick={() => setZoomIdx((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
            disabled={zoomIdx === ZOOM_STEPS.length - 1}
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
