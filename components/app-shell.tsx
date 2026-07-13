'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  Bookmark,
  GraduationCap,
  Home,
  Search,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/classes', label: 'Classes', icon: GraduationCap },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Reader gets a distraction-free, full-screen layout
  if (pathname.startsWith('/read/')) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-svh">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-svh w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <div className="flex items-center gap-2.5 px-5 pt-6 pb-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-4.5 w-4.5" />
          </span>
          <span className="font-sans text-lg font-semibold tracking-tight text-sidebar-foreground">
            Open NCERT
          </span>
        </div>

        <nav aria-label="Main" className="flex flex-col gap-1 px-3 pt-2">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive(pathname, href)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex-1 overflow-y-auto px-3 pb-4">
          <p className="px-3 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Browse classes
          </p>
          <div className="grid grid-cols-4 gap-1.5 px-1">
            {ROMAN.map((r, i) => {
              const href = `/classes/${i + 1}`
              return (
                <Link
                  key={r}
                  href={href}
                  className={cn(
                    'flex h-9 items-center justify-center rounded-lg text-xs font-semibold transition-colors',
                    isActive(pathname, href)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-sidebar-accent/50 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  )}
                >
                  {r}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-sidebar-border px-4 py-3">
          <span className="text-xs text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="font-sans text-base font-semibold tracking-tight">
              Open NCERT
            </span>
          </Link>
          <ThemeToggle />
        </header>

        <main className="flex-1 pb-20 md:pb-0">{children}</main>

        <footer className="hidden border-t border-border px-6 py-4 md:block">
          <p className="text-xs text-muted-foreground">
            All textbooks &copy; NCERT. Sourced from{' '}
            <a
              href="https://ncert.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              ncert.nic.in
            </a>
            . This is an unofficial reading companion.
          </p>
        </footer>
      </div>

      {/* Mobile bottom tab nav */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur md:hidden"
      >
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-1 flex-col items-center gap-1 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] text-[11px] font-medium transition-colors',
                active ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
