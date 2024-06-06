import { DirEnum, type Dir } from '../types'

export function getDocumentDirection(): Dir {
  if (typeof window === 'undefined') return 'ltr'
  if (typeof document === 'undefined') return 'ltr' // For Fresh purpose

  const dirAttribute = document.documentElement.getAttribute('dir') as Dir
  if (dirAttribute === DirEnum.auto || !dirAttribute) {
    return window.getComputedStyle(document.documentElement).direction as Dir
  }
  return dirAttribute
}
