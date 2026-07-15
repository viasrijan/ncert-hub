import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AppShell } from '@/components/app-shell'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-satoshi' })

export const metadata: Metadata = {
  title: 'NCERT Hub',
  description: 'Browse, read, and download NCERT textbooks for Classes I to XII.',
  generator: 'v0.app',
  icons: {
    icon: '/ncert-hub/logo.svg',
    apple: '/ncert-hub/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`bg-background ${geist.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
