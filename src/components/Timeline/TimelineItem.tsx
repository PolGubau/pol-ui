'use client'

import { type ComponentProps, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial } from '../../types/types'
import { useTimelineContext } from './TimelineContext'
import type { TimelnePointProps } from './TimelinePoint'
import { TimelinePoint, type TimelinePointTheme } from './TimelinePoint'

export interface TimelineItemTheme {
  root: {
    horizontal: string
    vertical: string
  }
  content: string
  point: TimelinePointTheme
}

export interface TimelineItemProps extends ComponentProps<'li'> {
  theme?: DeepPartial<TimelineItemTheme>
  iconContent?: TimelnePointProps['children']
  icon?: TimelnePointProps['icon']
  iconClassName?: TimelnePointProps['className']
}

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  className,
  theme: customTheme = {},
  iconContent,
  icon,
  iconClassName,
  ...props
}) => {
  const { theme: rootTheme, horizontal } = useTimelineContext()

  const theme = mergeDeep(rootTheme.item, customTheme)

  return (
    <li
      data-testid="timeline-item"
      className={twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className)}
      {...props}
    >
      <TimelinePoint icon={icon} theme={theme.point} className={iconClassName}>
        {iconContent}
      </TimelinePoint>
      <div data-testid="timeline-content" className={twMerge(horizontal && theme.content, className)}>
        {children}
      </div>
    </li>
  )
}
