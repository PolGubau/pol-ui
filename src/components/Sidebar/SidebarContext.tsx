'use client'

import { createContext, useContext } from 'react'
import type { SidebarProps } from './Sidebar'
import type { SidebarTheme } from './theme'

export interface SidebarContext extends SidebarProps {
  theme: SidebarTheme
  collapsed: boolean
  color?: string
}

export const SidebarContext = createContext<SidebarContext | undefined>(undefined)

export function useSidebarContext(): SidebarContext {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebarContext should be used within the SidebarContext provider!')
  }

  return context
}
