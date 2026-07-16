'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bookmark, GraduationCap, Home, Search, BookOpen } from 'lucide-react'
import { cn, assetPath } from '@/lib/utils'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/classes', label: 'Classes', icon: GraduationCap },
  { href: '/subjects', label: 'Subjects', icon: BookOpen },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/bookmarks', label: 'Saved', icon: Bookmark },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/read/')) return <>{children}</>

  return (
    <div className="flex min-h-svh">
      <aside className="sidebar-left sticky top-0 hidden h-svh w-[275px] shrink-0 flex-col justify-center backdrop-blur-md lg:flex">
        <nav aria-label="Main" className="flex flex-col items-start gap-1.5 px-8">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = isActive(pathname, href)
            return (
              <Link key={href} href={href}
                className={cn('nav-btn w-full max-w-[150px] uppercase transition-colors duration-200', active && 'nav-btn-active text-white')}>
                <Icon className="h-5 w-5 shrink-0" /> {label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto h-svh">
        <main className="flex-1 pb-28 lg:pb-0 mt-4">
          <div className="mx-auto w-full max-w-5xl flex items-center justify-center gap-3 px-6 pt-10 pb-4 md:px-8">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-full overflow-hidden shadow-elevated md:h-12 md:w-12">
                <Image src={assetPath('/logo.png')} alt="NCERT Hub" width={48} height={48} className="h-9 w-9 md:h-12 md:w-12" />
              </span>
              <span className="font-display text-3xl font-extrabold tracking-tight text-gold md:text-5xl">NCERT Hub</span>
            </Link>
          </div>
          {children}
        </main>
        <footer className="hidden px-8 py-6 lg:flex lg:items-center lg:justify-center">
          <p className="text-sm font-normal text-foreground text-center">
            An <strong className="font-bold">Unofficial Library</strong> of NCERT Books.{' '}Visit the official website at{' '}
            <a href="https://ncert.nic.in" target="_blank" rel="noopener noreferrer" className="font-bold text-gold no-underline hover:text-foreground">
              © NCERT.NIC.IN
            </a>
          </p>
        </footer>
      </div>

      <aside className="sidebar-right sticky top-0 hidden h-svh w-[275px] shrink-0 flex-col justify-center backdrop-blur-md lg:flex">
        <div className="flex flex-col items-center gap-5 px-4 scale-80 origin-center">
          <p className="text-[22px] font-extrabold tracking-widest text-sidebar-foreground uppercase text-center">Standard</p>
          <div className="h-4" />
          <div className="grid grid-cols-3 gap-5 w-full max-w-[220px]">
            {ROMAN.map((r, i) => {
              const href = `/classes/${i + 1}`
              const active = isActive(pathname, href)
              return (
                <Link key={r} href={href}
                  className={cn(
                    'flex items-center justify-center rounded-full text-[15px] font-extrabold transition-colors duration-200 aspect-square shadow-card',
                    active ? 'bg-white text-[#40663f] shadow-elevated' : 'btn-gradient hover:opacity-90',
                  )}>
                  {r}
                </Link>
              )
            })}
          </div>
        </div>
      </aside>

      <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-40 flex bg-sidebar/90 backdrop-blur-xl shadow-[0_-6px_20px_-4px_rgba(0,0,0,0.45)] lg:hidden">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href)
          return (
            <Link key={href} href={href}
              className={cn('flex flex-1 flex-col items-center gap-1.5 pt-3.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] text-[12px] font-bold tracking-tight', active ? 'text-sidebar-foreground' : 'text-sidebar-foreground/60')}>
              <Icon className="h-6 w-6" /> {label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
