import type { MetadataRoute } from 'next'

const BASE_URL = 'https://ncert-hub.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/read/', '/solutions', '/search', '/bookmarks', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
