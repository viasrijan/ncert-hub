'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BookOpen, FileText, Search, X } from 'lucide-react'
import { BOOKS, toRoman, type Book, type Chapter } from '@/lib/catalog'
import { cn } from '@/lib/utils'
import { getSubjectGradient } from '@/lib/subject-gradients'

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

const CLASS_FILTERS = [0, ...Array.from({ length: 12 }, (_, i) => i + 1)]

function scoreMatch(haystack: string, needle: string): number {
  const h = haystack.toLowerCase()
  const n = needle.toLowerCase()
  if (h === n) return 100
  if (h.startsWith(n)) return 80
  if (h.includes(` ${n}`)) return 60
  if (h.includes(n)) return 40
  const words = n.split(/\s+/).filter(Boolean)
  if (words.length > 1 && words.every((w) => h.includes(w))) return 30
  return 0
}

function searchData(query: string, classFilter: number): Hit[] {
  const q = query.trim()
  if (q.length < 2) return []
  const hits: Hit[] = []
  for (const book of BOOKS) {
    if (classFilter !== 0 && book.classNum !== classFilter) continue
    const bookScore = Math.max(scoreMatch(book.title, q), scoreMatch(book.subject, q) - 10)
    if (bookScore > 0) hits.push({ type: 'book', book, score: bookScore })
    for (const chapter of book.chapters) {
      if (chapter.title.startsWith('Chapter ')) continue
      const s = scoreMatch(chapter.title, q)
      if (s > 0) hits.push({ type: 'chapter', book, chapter, score: s - 5 })
    }
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, 30)
}

export function SearchView() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [classFilter, setClassFilter] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const hits = useMemo(() => searchData(query, classFilter), [query, classFilter])
  const showEmpty = query.trim().length >= 2 && hits.length === 0

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      if (query) { setQuery(''); inputRef.current?.focus() }
      else router.push('/')
    }
  }, [query, router])

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-2 md:px-0 md:py-4" onKeyDown={handleKeyDown}>
      <div className="flex items-center gap-3 rounded-full bg-card/80 px-5 py-4 shadow-card focus-within:ring-2 focus-within:ring-ring">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Books, subjects, or chapter names..."
          autoFocus
          className="min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button type="button" onClick={() => { setQuery(''); inputRef.current?.focus() }} aria-label="Clear search"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="size-5" />
          </button>
        )}
      </div>

      <div className="flex justify-center gap-1.5 overflow-x-auto pb-1 md:flex-wrap">
        {CLASS_FILTERS.map((c) => (
          <button key={c} type="button" onClick={() => setClassFilter(c)}
            className={cn(
              'shrink-0 rounded-full px-3.5 py-2 text-sm font-bold transition-colors duration-150',
              classFilter === c
                ? 'btn-gradient'
                : 'bg-card/60 text-muted-foreground hover:text-foreground',
            )}>
            {c === 0 ? 'All classes' : toRoman(c)}
          </button>
        ))}
      </div>

      {query.trim().length < 2 ? (
        <p className="py-8 text-center text-base text-muted-foreground">
          Start typing to search {BOOKS.length} textbooks and their chapters.
        </p>
      ) : showEmpty ? (
        <p className="py-8 text-center text-base text-muted-foreground">
          No results for &ldquo;{query}&rdquo;
          {classFilter !== 0 && ` in Class ${toRoman(classFilter)}`}.
        </p>
      ) : (
        <ul className="flex flex-col overflow-hidden rounded-lg bg-card/60 backdrop-blur-sm shadow-card">
          {hits.map((hit) => (
            <li key={hit.type === 'book' ? `b-${hit.book.id}` : `c-${hit.chapter.pdfCode}`}>
              {hit.type === 'book' ? (
                <Link href={`/book/${hit.book.id}`}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-accent/50">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-lg" style={{ background: getSubjectGradient(hit.book.subject).gradient }}>
                    {(() => { const Ic = getSubjectGradient(hit.book.subject).icon; return <Ic className="size-5 text-white/40 absolute inset-0 m-auto" strokeWidth={1.5} /> })()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-bold text-foreground">{hit.book.title}</p>
                    <p className="truncate text-sm text-muted-foreground">Class {toRoman(hit.book.classNum)} · {hit.book.subject} · {hit.book.chapters.length} chapters</p>
                  </div>
                  <BookOpen className="size-5 shrink-0 text-muted-foreground/50" />
                </Link>
              ) : (
                <Link href={`/read/${hit.chapter.pdfCode}`}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-accent/50">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 border-2 border-gold">
                    <FileText className="size-5 text-gold" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-bold text-foreground">{hit.chapter.title}</p>
                    <p className="truncate text-sm text-muted-foreground">{hit.book.title} · Class {toRoman(hit.book.classNum)}</p>
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
