import Link from 'next/link'
import type { Book } from '@/lib/catalog'

export function ChapterList({ book }: { book: Book }) {
  return (
    <section aria-label="Chapters" className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex items-center justify-center md:justify-start gap-2">
        <h2 className="text-2xl font-extrabold text-foreground">Chapters</h2>
      </div>
      <ol className="flex min-h-0 flex-1 flex-col overflow-y-auto rounded-lg bg-card/60 backdrop-blur-sm shadow-card [&>li+li]:shadow-[inset_0_12px_12px_-12px_rgba(0,0,0,0.5)]">
        {book.chapters.map((chapter) => (
          <li key={chapter.pdfCode} className="flex shrink-0 items-stretch">
            <Link
              href={`/read/${chapter.pdfCode}`}
              className="flex min-w-0 flex-1 items-center gap-4 px-6 py-3 transition-colors duration-150 hover:bg-accent/50 md:px-8"
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
