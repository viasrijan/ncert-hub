import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Beaker, GraduationCap, Globe, Atom, Calculator, FlaskConical, Leaf, Languages, Palette } from 'lucide-react'
import { CLASSES, getBooksByClass, toRoman } from '@/lib/catalog'

export const metadata: Metadata = {
  title: 'All Classes',
  description: 'Browse NCERT textbooks for Classes I to XII.',
}

const ICONS = [BookOpen, Beaker, Calculator, FlaskConical, Leaf, Languages, Globe, Palette, Atom, GraduationCap, BookOpen, Globe]

export default function ClassesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl text-white">All classes</h1>
        <p className="text-lg text-white/60">Pick a class to see every textbook available for it.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
        {CLASSES.map((c) => {
          const books = getBooksByClass(c)
          const Icon = ICONS[c - 1] || BookOpen
          return (
            <Link
              key={c}
              href={`/classes/${c}`}
              className="group flex items-center gap-4 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-sm p-5 shadow-card transition-all duration-300 hover:border-gold/30 hover:shadow-elevated hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col min-w-0 flex-1">
                <h2 className="font-display text-xl font-bold text-white">Class {toRoman(c)}</h2>
                <p className="text-[14px] font-semibold text-white/50">
                  <span className="text-gold">{books.length}</span> {books.length === 1 ? 'book' : 'books'}
                </p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-white/20 transition-all duration-300 group-hover:text-gold group-hover:translate-x-1" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
