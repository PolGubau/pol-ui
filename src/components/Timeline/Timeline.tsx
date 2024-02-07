'use client'

import { useMemo, type ComponentProps, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { TimelineContext } from './TimelineContext'
import type { TimelineTheme } from './theme'

export interface TimelineProps extends ComponentProps<'ol'> {
  horizontal?: boolean
  theme?: DeepPartial<TimelineTheme>
}

export const Timeline: FC<TimelineProps> = ({ children, className, horizontal, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().timeline, customTheme)
  const value = useMemo(() => {
    return { theme, horizontal }
  }, [theme, horizontal])
  return (
    <TimelineContext.Provider value={value}>
      <ol
        data-testid="timeline-component"
        className={twMerge(
          horizontal && theme.root.direction.horizontal,
          !horizontal && theme.root.direction.vertical,
          className,
        )}
        {...props}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  )
}
