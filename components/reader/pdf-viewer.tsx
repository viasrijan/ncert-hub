'use client'

import { useState } from 'react'
import { Minus, Plus, TriangleAlert } from 'lucide-react'

const ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2]

export function PdfViewer({ url, title }: { url: string; title: string }) {
  const [zoomIdx, setZoomIdx] = useState(2)
  const [loading, setLoading] = useState(true)
  const [loadFailed, setLoadFailed] = useState(false)
  const [useFallback, setUseFallback] = useState(false)

  const zoom = ZOOM_STEPS[zoomIdx]

  // Google Docs viewer as primary — NCERT blocks iframes
  const googleUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`
  const displayUrl = useFallback ? url : googleUrl

  return (
    <div className="relative flex min-h-0 flex-1 flex-col bg-sidebar">
      <div className="flex-1 overflow-auto">
        {loadFailed && useFallback ? (
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
          <div className="relative flex flex-1 flex-col">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-4 rounded-2xl bg-background/90 backdrop-blur-md px-8 py-6 shadow-lg">
                  <div className="size-8 animate-spin rounded-full border-4 border-white/10 border-t-gold" />
                  <p className="text-sm font-semibold text-white/60">Loading PDF...</p>
                </div>
              </div>
            )}
            <iframe
              src={displayUrl}
              title={title}
              className="h-full w-full flex-1 border-0"
              onLoad={() => { setLoading(false); setLoadFailed(false) }}
              onError={() => {
                if (!useFallback) {
                  setUseFallback(true)
                  setLoading(true)
                } else {
                  setLoading(false)
                  setLoadFailed(true)
                }
              }}
              style={{
                minHeight: 'calc(100vh - 7rem)',
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
        <div className="absolute bottom-4 right-4 flex items-center overflow-hidden rounded-full border border-white/10 bg-background/95 shadow-xl backdrop-blur z-20">
          <button type="button" onClick={() => setZoomIdx(i => Math.max(0, i - 1))} disabled={zoomIdx === 0} aria-label="Zoom out"
            className="flex size-12 items-center justify-center text-white transition-colors hover:bg-white/10 disabled:opacity-30"><Minus className="size-5"/></button>
          <span className="w-14 text-center font-mono text-sm font-bold text-white/60">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoomIdx(i => Math.min(ZOOM_STEPS.length - 1, i + 1))} disabled={zoomIdx === ZOOM_STEPS.length - 1} aria-label="Zoom in"
            className="flex size-12 items-center justify-center text-white transition-colors hover:bg-white/10 disabled:opacity-30"><Plus className="size-5"/></button>
        </div>
      )}
    </div>
  )
}
