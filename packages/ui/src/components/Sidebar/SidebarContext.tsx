'use client'

import { createContext, useContext } from 'react'
import type { SidebarProps } from './Sidebar'
import type { SidebarTheme } from './theme'

export interface SidebarContext extends SidebarProps {
  theme: SidebarTheme
  color?: string
  childsOpened: string[]
  setChildsOpened: (value: string[]) => void
}

export const SidebarContext = createContext<SidebarContext | undefined>(undefined)

export function useSidebarContext(): SidebarContext {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebarContext should be used within the SidebarContext provider!')
  }

  return context
}

export interface SidebarItemContext {
  isInsideCollapse: boolean
}

export const SidebarItemContext = createContext<SidebarItemContext | undefined>(undefined)

export function useSidebarItemContext(): SidebarItemContext {
  const context = useContext(SidebarItemContext)

  if (!context) {
    throw new Error('useSidebarItemContext should be used within the SidebarItemContext provider!')
  }

  return context
}
