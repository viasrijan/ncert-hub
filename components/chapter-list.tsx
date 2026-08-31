import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Book } from '@/lib/catalog'
import { getSolutionDriveUrl } from '@/lib/catalog'

export function ChapterList({ book }: { book: Book }) {
  const isSolution = book.kind === 'solution'
  return (
    <section aria-label="Chapters" className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-extrabold text-foreground">Chapters</h2>
      </div>
      <ol className="flex flex-col overflow-hidden rounded-lg bg-card/60 backdrop-blur-sm shadow-card">
        {book.chapters.map((chapter) => (
          <li key={chapter.pdfCode} className="flex items-stretch">
            <Link
              href={`/read/${chapter.pdfCode}`}
              className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-accent/50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-gold text-sm font-bold text-gold bg-transparent">
                {chapter.number}
              </span>
              <span className="min-w-0 truncate text-base font-semibold text-foreground">
                {chapter.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
