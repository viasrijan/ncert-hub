'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, FileText, Search, X } from 'lucide-react'
import { BOOKS, toRoman, type Book, type Chapter } from '@/lib/catalog'
import { cn, assetPath } from '@/lib/utils'

interface BookHit {
  type: 'book'
  book: Book
  score: number
}

interface ChapterHit {
  type: 'chapter'
  book: Book
  chapter: Chapter
  score: number
}

type Hit = BookHit | ChapterHit

const CLASS_FILTERS = [0, ...Array.from({ length: 12 }, (_, i) => i + 1)] // 0 = all

function scoreMatch(haystack: string, needle: string): number {
  const h = haystack.toLowerCase()
  const n = needle.toLowerCase()
  if (h === n) return 100
  if (h.startsWith(n)) return 80
  if (h.includes(` ${n}`)) return 60
  if (h.includes(n)) return 40
  // All query words present somewhere
  const words = n.split(/\s+/).filter(Boolean)
  if (words.length > 1 && words.every((w) => h.includes(w))) return 30
  return 0
}

function search(query: string, classFilter: number): Hit[] {
  const q = query.trim()
  if (q.length < 2) return []

  const hits: Hit[] = []
  for (const book of BOOKS) {
    if (classFilter !== 0 && book.classNum !== classFilter) continue

    const bookScore = Math.max(
      scoreMatch(book.title, q),
      scoreMatch(book.subject, q) - 10,
    )
    if (bookScore > 0) hits.push({ type: 'book', book, score: bookScore })

    for (const chapter of book.chapters) {
      if (chapter.title.startsWith('Chapter ')) continue // generic titles aren't searchable
      const s = scoreMatch(chapter.title, q)
      if (s > 0) hits.push({ type: 'chapter', book, chapter, score: s - 5 })
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, 30)
}

export function SearchView() {
  const [query, setQuery] = useState('')
  const [classFilter, setClassFilter] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const hits = useMemo(() => search(query, classFilter), [query, classFilter])
  const showEmpty = query.trim().length >= 2 && hits.length === 0

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-8 md:px-8 md:py-12">
      <h1 className="font-sans text-2xl font-extrabold tracking-tight md:text-3xl">Search</h1>

      {/* Input */}
      <div className="flex items-center gap-3 rounded-xl border border-border gradient-card-light dark:gradient-card-dark px-4 py-3.5 focus-within:ring-2 focus-within:ring-ring">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Books, subjects, or chapter names..."
          autoFocus
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
            aria-label="Clear search"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      {/* Class filter chips */}
      <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
        {CLASS_FILTERS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setClassFilter(c)}
            className={cn(
              'shrink-0 rounded-full px-3.5 py-2 text-sm font-bold transition-all duration-150',
              classFilter === c
                ? 'bg-primary text-primary-foreground'
                : 'border border-border gradient-card-light dark:gradient-card-dark text-muted-foreground hover:text-foreground',
            )}
          >
            {c === 0 ? 'All classes' : toRoman(c)}
          </button>
        ))}
      </div>

      {/* Results */}
      {query.trim().length < 2 ? (
        <p className="py-8 text-center text-sm font-medium text-muted-foreground">
          Start typing to search {BOOKS.length} textbooks and their chapters.
        </p>
      ) : showEmpty ? (
        <p className="py-8 text-center text-sm font-medium text-muted-foreground">
          No results for &ldquo;{query}&rdquo;
          {classFilter !== 0 && ` in Class ${toRoman(classFilter)}`}.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border gradient-card-light dark:gradient-card-dark">
          {hits.map((hit) => (
            <li key={hit.type === 'book' ? `b-${hit.book.id}` : `c-${hit.chapter.pdfCode}`}>
              {hit.type === 'book' ? (
                <Link
                  href={`/book/${hit.book.id}`}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-secondary"
                >
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image src={assetPath(hit.book.cover || '/covers/general.png')} alt="" fill sizes="44px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{hit.book.title}</p>
                    <p className="truncate text-xs font-medium text-muted-foreground">
                      Class {toRoman(hit.book.classNum)} · {hit.book.subject} ·{' '}
                      {hit.book.chapters.length} chapters
                    </p>
                  </div>
                  <BookOpen className="size-5 shrink-0 text-muted-foreground" />
                </Link>
              ) : (
                <Link
                  href={`/read/${hit.chapter.pdfCode}`}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-secondary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <FileText className="size-5 text-secondary-foreground" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{hit.chapter.title}</p>
                    <p className="truncate text-xs font-medium text-muted-foreground">
                      {hit.book.title} · Class {toRoman(hit.book.classNum)}
                    </p>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
