import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CLASSES, toRoman, getSolutionsByClass, getAllSolutionSubjects, getSolutionsBySubject } from '@/lib/catalog'
import { getClassGradient, getClassIconGradient, getSubjectGradient } from '@/lib/subject-gradients'
import { SearchView } from '@/components/search-view'

export const metadata: Metadata = {
  title: 'NCERT Solutions — All Classes & Subjects',
  description: 'Browse NCERT Solutions for Classes I to XII — external, legal-safe links. Search solutions by class, subject, or chapter.',
}

export default function SolutionsPage() {
  const solutionSubjects = getAllSolutionSubjects()
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-3 animate-fade-in-up">
        <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl text-foreground">Solutions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">Browse NCERT Solutions for Classes I to XII.</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-center text-sm font-bold tracking-widest uppercase text-gold">Search Solutions</h2>
        <SearchView scope="solution" />
      </div>

      <section aria-labelledby="sol-classes-heading" className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 id="sol-classes-heading" className="font-display text-2xl font-bold tracking-tight text-foreground">Browse by Class</h2>
          <span className="rounded-full bg-card/60 px-3 py-1 text-xs font-bold text-foreground">{CLASSES.length} classes</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {CLASSES.map((c) => {
            const books = getSolutionsByClass(c)
            const grad = getClassIconGradient()
            return (
              <Link
                key={c}
                href={`/solutions/classes/${c}`}
                className="group flex items-center gap-4 rounded-2xl bg-card/80 backdrop-blur-sm p-5 shadow-card transition-colors duration-200 hover:shadow-elevated"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white text-lg font-extrabold shadow-md"
                  style={{ background: grad }}
                >
                  {toRoman(c)}
                </span>
                <div className="flex flex-col min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground">Class {toRoman(c)}</h3>
                  <p className="text-[14px] font-semibold text-muted-foreground">
                    <span className="text-[#69a667]">{books.length}</span> <span className="text-[#69a667]">{books.length === 1 ? 'book' : 'books'}</span>
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground/40 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold" />
              </Link>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="sol-subjects-heading" className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 id="sol-subjects-heading" className="font-display text-2xl font-bold tracking-tight text-foreground">Browse by Subject</h2>
          <span className="rounded-full bg-card/60 px-3 py-1 text-xs font-bold text-foreground">{solutionSubjects.length} subjects</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {solutionSubjects.map((subject) => {
            const books = getSolutionsBySubject(subject)
            const grad = getSubjectGradient(subject).gradient
            return (
              <Link
                key={subject}
                href={`/solutions/subjects/${encodeURIComponent(subject)}`}
                className="group flex items-center gap-4 rounded-2xl bg-card/80 backdrop-blur-sm p-5 shadow-card transition-colors duration-200 hover:shadow-elevated"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white text-lg font-extrabold shadow-md"
                  style={{ background: grad }}
                >
                  {subject.charAt(0)}
                </span>
                <div className="flex flex-col min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground">{subject}</h3>
                  <p className="text-[14px] font-semibold text-muted-foreground">
                    <span className="text-[#69a667]">{books.length}</span> <span className="text-[#69a667]">{books.length === 1 ? 'book' : 'books'}</span>
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground/40 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold" />
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
