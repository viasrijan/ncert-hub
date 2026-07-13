import type { Metadata } from 'next'
import { SearchView } from '@/components/search-view'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search NCERT textbooks and chapters across Classes I to XII.',
}

export default function SearchPage() {
  return <SearchView />
}
