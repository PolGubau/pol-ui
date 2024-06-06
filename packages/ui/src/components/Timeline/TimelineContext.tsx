'use client'

import { createContext, useContext } from 'react'
import type { TimelineTheme } from './theme'

export type TimelineContext = {
  theme: TimelineTheme
  horizontal?: boolean
}

export const TimelineContext = createContext<TimelineContext | undefined>(undefined)

export function useTimelineContext(): TimelineContext {
  const context = useContext(TimelineContext)

  if (!context) {
    throw new Error('useTimelineContext should be used within the TimelineContext provider!')
  }

  return context
}
