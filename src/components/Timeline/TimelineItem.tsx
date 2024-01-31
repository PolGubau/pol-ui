'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial } from '../../types/types'
import type { TimelineContentTheme } from './TimelineContent'
import { useTimelineContext } from './TimelineContext'
import { TimelineItemContext } from './TimelineItemContext'
import type { TimelinePointTheme } from './TimelinePoint'

export interface TimelineItemTheme {
  root: {
    horizontal: string
    vertical: string
  }
  content: TimelineContentTheme
  point: TimelinePointTheme
}

export interface TimelineItemProps extends ComponentProps<'li'> {
  theme?: DeepPartial<TimelineItemTheme>
}

export const TimelineItem: FC<TimelineItemProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, horizontal } = useTimelineContext()

  const theme = mergeDeep(rootTheme.item, customTheme)

  return (
    <TimelineItemContext.Provider value={{ theme }}>
      <li
        data-testid="timeline-item"
        className={twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className)}
        {...props}
      >
        {children}
      </li>
    </TimelineItemContext.Provider>
  )
}
