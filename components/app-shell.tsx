'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Bookmark, GraduationCap, Home, Moon, Search, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn, assetPath } from '@/lib/utils'

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

function ThemeNavItem() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group flex w-full items-center gap-3.5 rounded-2xl px-5 py-3.5 text-[16px] font-bold transition-all duration-200',
        isDark
          ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
          : 'text-sidebar-foreground/40 hover:bg-sidebar-accent/40 hover:text-sidebar-foreground',
      )}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      Dark Mode
    </button>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/read/')) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-svh">
      {/* LEFT SIDEBAR — Navigation */}
      <aside className="sticky top-0 hidden h-svh w-[265px] shrink-0 flex-col justify-center border-r border-sidebar-border bg-sidebar/60 backdrop-blur-md lg:flex">
        <div className="flex flex-col justify-center gap-2 px-4">
          {/* Brand */}
          <div className="flex justify-center pb-6">
            <Link href="/" className="flex flex-col items-center gap-3 group">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src={assetPath('/apple-icon.png')}
                  alt="NCERT Hub"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              </span>
              <div className="flex flex-col items-center">
                <span className="font-display text-xl font-extrabold tracking-tight text-sidebar-foreground">
                  NCERT Hub
                </span>
              </div>
            </Link>
          </div>

          <nav aria-label="Main" className="flex flex-col gap-1.5">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
              const active = isActive(pathname, href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'group flex items-center gap-3.5 rounded-2xl px-5 py-3.5 text-[16px] font-bold transition-all duration-200',
                    active
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
                      : 'text-sidebar-foreground/40 hover:bg-sidebar-accent/40 hover:text-sidebar-foreground',
                  )}
                >
                  <Icon className={cn(
                    'h-5 w-5 transition-transform duration-200',
                    active && 'text-coral',
                    !active && 'group-hover:scale-110',
                  )} />
                  {label}
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-coral" />
                  )}
                </Link>
              )
            })}
            <ThemeNavItem />
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT — centered, scrollable */}
      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto h-svh">
        {/* Mobile header */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/30 bg-background/80 px-4 py-3.5 backdrop-blur-xl lg:hidden">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden shadow-sm">
              <Image
                src={assetPath('/apple-icon.png')}
                alt="NCERT Hub"
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
              />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">NCERT Hub</span>
          </Link>
          <ThemeNavItem />
        </header>

        <main className="flex-1 pb-28 lg:pb-0">{children}</main>

        {/* Desktop footer */}
        <footer className="hidden border-t border-border/30 bg-secondary/20 px-8 py-6 lg:flex lg:items-center lg:justify-center">
          <p className="text-base font-medium text-muted-foreground text-center">
            An Unofficial Library of NCERT Books.{' '}
            Visit the official website at{' '}
            <a href="https://ncert.nic.in" target="_blank" rel="noopener noreferrer"
              className="font-bold text-primary underline underline-offset-2 decoration-coral/40 transition-colors hover:text-coral">
              © NCERT. ncert.nic.in
            </a>
          </p>
        </footer>
      </div>

      {/* RIGHT SIDEBAR — Class picker */}
      <aside className="sticky top-0 hidden h-svh w-[240px] shrink-0 flex-col justify-center border-l border-sidebar-border bg-sidebar/60 backdrop-blur-md lg:flex">
        <div className="flex flex-col items-center gap-4 px-4">
          <p className="text-[11px] font-bold tracking-[0.25em] text-sidebar-foreground/30 uppercase text-center">
            Classes
          </p>
          <div className="grid grid-cols-3 gap-2.5 w-full max-w-[200px]">
            {ROMAN.map((r, i) => {
              const href = `/classes/${i + 1}`
              const active = isActive(pathname, href)
              return (
                <Link
                  key={r}
                  href={href}
                  className={cn(
                    'flex aspect-square items-center justify-center rounded-2xl text-[15px] font-extrabold transition-all duration-200',
                    active
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg scale-105'
                      : 'bg-sidebar-accent/30 text-sidebar-foreground/40 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground hover:scale-105',
                  )}
                >
                  {r}
                </Link>
              )
            })}
          </div>
          
          <div className="w-full max-w-[200px] rounded-2xl bg-gradient-to-br from-indigo/20 to-teal/10 border border-indigo/20 px-4 py-4 text-center">
            <p className="text-[13px] font-semibold leading-relaxed text-sidebar-foreground/55">
              138 textbooks from NCERT, free and open for everyone.
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border/30 bg-background/80 backdrop-blur-xl lg:hidden">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href)
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-1 flex-col items-center gap-1.5 pt-3.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] text-[12px] font-bold tracking-tight transition-all duration-200',
                active ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <Icon className={cn('h-6 w-6 transition-transform duration-200', active && 'scale-110')} />
              {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
