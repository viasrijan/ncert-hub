import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GUIDES } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Study Guides — How to Use NCERT Books',
  description:
    'Practical, human-written study guides: how to study NCERT chapters, Class 10 and 12 board strategy, and a daily reading routine.',
}

export default function GuidesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl text-foreground">Study Guides</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Practical methods for getting marks out of NCERT books — written by a student, for students.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 stagger-children">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group flex flex-col gap-3 rounded-2xl bg-card/80 backdrop-blur-sm p-6 shadow-card transition-colors duration-200 hover:shadow-elevated"
          >
            <h2 className="font-display text-xl font-bold text-foreground">{guide.title}</h2>
            <p className="text-[14px] leading-relaxed text-muted-foreground">{guide.description}</p>
            <span className="mt-auto flex items-center gap-2 text-sm font-bold text-gold">
              Read guide · {guide.readMinutes} min <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
