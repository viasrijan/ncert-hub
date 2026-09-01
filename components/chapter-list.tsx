import Link from 'next/link'
import type { Book } from '@/lib/catalog'

export function ChapterList({ book }: { book: Book }) {
  return (
    <section aria-label="Chapters" className="flex flex-col gap-4">
      <div className="flex items-center justify-center md:justify-start gap-2">
        <h2 className="text-2xl font-extrabold text-foreground">Chapters</h2>
      </div>
      <ol className="flex flex-col overflow-hidden rounded-lg bg-card/60 backdrop-blur-sm shadow-card">
        {book.chapters.map((chapter) => (
          <li key={chapter.pdfCode} className="flex items-stretch">
            <Link
              href={`/read/${chapter.pdfCode}`}
              className="flex min-w-0 flex-1 items-center justify-center gap-4 px-7 py-3.5 transition-colors duration-150 hover:bg-accent/50 md:justify-start md:px-10"
            >
              <span className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-gold text-base font-bold leading-none text-black">
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
