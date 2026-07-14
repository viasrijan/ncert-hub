import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-satoshi' })

export const metadata: Metadata = {
  title: 'NCERT Hub',
  description:
    'Browse, read, and download NCERT textbooks for Classes I to XII. A modern, fast digital library for students and teachers.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/open-ncert/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/open-ncert/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/open-ncert/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/open-ncert/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#12100e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`bg-background ${geist.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
