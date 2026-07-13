import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BASE_PATH = '/open-ncert'

export function assetPath(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${BASE_PATH}${path.startsWith('/') ? '' : '/'}${path}`
}
