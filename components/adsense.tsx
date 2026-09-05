'use client'

import { usePathname } from 'next/navigation'

const PUBLISHER_ID = 'ca-pub-8953158636455900'

// Routes where ads must never load: screens without publisher content
// (PDF viewer, quarantined solutions, empty/filter states).
const EXCLUDED_PATTERNS = [
  /^\/read(\/|$)/,
  /^\/solutions(\/|$)/,
  /^\/book\/.*_sol\/?$/,
  /^\/search(\/|$)/,
  /^\/bookmarks(\/|$)/,
]

export function isAdsExcluded(pathname: string): boolean {
  return EXCLUDED_PATTERNS.some((rx) => rx.test(pathname))
}

export function AdSense() {
  const pathname = usePathname()
  if (isAdsExcluded(pathname)) return null
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`}
      crossOrigin="anonymous"
    />
  )
}
