import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-satoshi' })

export const metadata: Metadata = {
  title: 'NCERT Hub',
  description: 'Browse, read, and download NCERT textbooks for Classes I to XII.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark bg-background ${geist.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8953158636455900"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
