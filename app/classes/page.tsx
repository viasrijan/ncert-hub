import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CLASSES, getBooksByClass, toRoman } from '@/lib/catalog'

export const metadata: Metadata = {
  title: 'All Classes',
  description: 'Browse NCERT textbooks for Classes I to XII.',
}

export default function ClassesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl text-foreground">All classes</h1>
        <p className="text-lg text-muted-foreground">Pick a class to see every textbook available for it.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
        {CLASSES.map((c) => {
          const books = getBooksByClass(c)
          return (
            <Link
              key={c}
              href={`/classes/${c}`}
              className="group flex items-center gap-4 rounded-2xl bg-card/80 backdrop-blur-sm p-5 shadow-card transition-colors duration-200 hover:shadow-elevated"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/30 text-white bg-transparent transition-colors group-hover:bg-white/10 group-hover:text-white">
                {toRoman(c)}
              </span>
              <div className="flex flex-col min-w-0 flex-1">
                <h2 className="font-display text-xl font-bold text-foreground">Class {toRoman(c)}</h2>
                <p className="text-[14px] font-semibold text-muted-foreground">
                  <span className="text-[#69a667]">{books.length}</span> <span className="text-[#69a667]">{books.length === 1 ? 'book' : 'books'}</span>
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-gold" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
