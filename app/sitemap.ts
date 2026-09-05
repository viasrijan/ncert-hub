import type { MetadataRoute } from 'next'
import { BOOKS, CLASSES, getAllSubjects } from '@/lib/catalog'

const BASE_URL = 'https://ncert-hub.vercel.app'

const TRUST_PAGES = ['/about', '/privacy', '/terms', '/disclaimer', '/support']
const GUIDE_SLUGS = [
  'how-to-use-ncert-books',
  'class-10-board-preparation',
  'class-12-board-preparation',
  'ncert-reading-routine',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/classes`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/subjects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guides`, changeFrequency: 'monthly', priority: 0.8 },
  ]

  for (const c of CLASSES) {
    routes.push({ url: `${BASE_URL}/classes/${c}`, changeFrequency: 'monthly', priority: 0.7 })
  }

  for (const subject of getAllSubjects()) {
    routes.push({ url: `${BASE_URL}/subjects/${encodeURIComponent(subject)}`, changeFrequency: 'monthly', priority: 0.7 })
  }

  for (const book of BOOKS) {
    routes.push({ url: `${BASE_URL}/book/${book.id}`, changeFrequency: 'monthly', priority: 0.6 })
  }

  for (const page of TRUST_PAGES) {
    routes.push({ url: `${BASE_URL}${page}`, changeFrequency: 'yearly', priority: 0.3 })
  }

  for (const slug of GUIDE_SLUGS) {
    routes.push({ url: `${BASE_URL}/guides/${slug}`, changeFrequency: 'monthly', priority: 0.7 })
  }

  return routes
}
