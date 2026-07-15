import type { Metadata } from 'next'
import { SearchView } from '@/components/search-view'

export const metadata: Metadata = {
  title: 'Search Textbooks',
  description: 'Search NCERT textbooks by title, subject, or chapter.',
}

export default function SearchPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-12 md:px-8 md:py-16">
      <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
        <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl text-white text-center">Search</h1>
        <p className="text-lg text-white/60 -mt-4">Find textbooks and chapters by name, subject, or class.</p>
      </div>
      <SearchView />
    </div>
  )
}
