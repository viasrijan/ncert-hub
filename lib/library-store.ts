'use client'

import { useSyncExternalStore, useCallback } from 'react'

// Client-side persistence for bookmarks and recently-read chapters.
// The user chose local storage explicitly for this feature (no accounts).

const BOOKMARKS_KEY = 'ncert-library-bookmarks'
const RECENTS_KEY = 'ncert-library-recents'
const MAX_RECENTS = 12

export interface RecentEntry {
  pdfCode: string
  bookId: string
  openedAt: number
}

type Listener = () => void
const listeners = new Set<Listener>()

function emit() {
  for (const l of listeners) l()
}

function subscribe(listener: Listener) {
  listeners.add(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', listener)
  }
}

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

// Cache snapshots so useSyncExternalStore doesn't loop on new references
let bookmarksCache: string[] = []
let bookmarksCacheRaw: string | null = null
let recentsCache: RecentEntry[] = []
let recentsCacheRaw: string | null = null

function getBookmarksSnapshot(): string[] {
  const raw = typeof window === 'undefined' ? null : window.localStorage.getItem(BOOKMARKS_KEY)
  if (raw !== bookmarksCacheRaw) {
    bookmarksCacheRaw = raw
    bookmarksCache = raw ? safeParse<string[]>(raw, []) : []
  }
  return bookmarksCache
}

function getRecentsSnapshot(): RecentEntry[] {
  const raw = typeof window === 'undefined' ? null : window.localStorage.getItem(RECENTS_KEY)
  if (raw !== recentsCacheRaw) {
    recentsCacheRaw = raw
    recentsCache = raw ? safeParse<RecentEntry[]>(raw, []) : []
  }
  return recentsCache
}

function safeParse<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

const EMPTY_BOOKMARKS: string[] = []
const EMPTY_RECENTS: RecentEntry[] = []

export function useBookmarks() {
  const bookmarks = useSyncExternalStore(
    subscribe,
    getBookmarksSnapshot,
    () => EMPTY_BOOKMARKS,
  )

  const toggleBookmark = useCallback((bookId: string) => {
    const current = readJSON<string[]>(BOOKMARKS_KEY, [])
    const next = current.includes(bookId)
      ? current.filter((id) => id !== bookId)
      : [...current, bookId]
    window.localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next))
    emit()
  }, [])

  return { bookmarks, toggleBookmark }
}

export function useRecents() {
  const recents = useSyncExternalStore(subscribe, getRecentsSnapshot, () => EMPTY_RECENTS)

  const addRecent = useCallback((entry: Omit<RecentEntry, 'openedAt'>) => {
    const current = readJSON<RecentEntry[]>(RECENTS_KEY, [])
    const next = [
      { ...entry, openedAt: Date.now() },
      ...current.filter((r) => r.pdfCode !== entry.pdfCode),
    ].slice(0, MAX_RECENTS)
    window.localStorage.setItem(RECENTS_KEY, JSON.stringify(next))
    emit()
  }, [])

  const clearRecents = useCallback(() => {
    window.localStorage.removeItem(RECENTS_KEY)
    emit()
  }, [])

  return { recents, addRecent, clearRecents }
}
