import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CLASSES, getBooksByClass, getSubjectsForClass, toRoman } from '@/lib/catalog'

export const metadata: Metadata = {
  title: 'All Classes',
  description: 'Browse NCERT textbooks for Classes I to XII.',
}

export default function ClassesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">All classes</h1>
        <p className="text-lg text-muted-foreground">Pick a class to see every textbook available for it.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
        {CLASSES.map((c) => {
          const books = getBooksByClass(c)
          const subjects = getSubjectsForClass(c)
          return (
            <Link
              key={c}
              href={`/classes/${c}`}
              className="group flex flex-col gap-3 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-xl font-extrabold text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    {toRoman(c)}
                  </span>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-card-foreground">Class {toRoman(c)}</h2>
                </div>
                <ArrowRight className="size-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-orange group-hover:translate-x-1" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[15px] font-semibold text-muted-foreground">
                  {books.length} {books.length === 1 ? 'book' : 'books'} · {subjects.length} {subjects.length === 1 ? 'subject' : 'subjects'}
                </p>
                <p className="line-clamp-1 text-[14px] text-muted-foreground/60">{subjects.slice(0, 4).join(' · ')}{subjects.length > 4 && ` · +${subjects.length - 4} more`}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
