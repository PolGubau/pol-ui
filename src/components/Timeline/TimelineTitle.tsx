'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial, HeadingLevel } from '../../types/types'
import { useTimelineContentContext } from './TimelineContentContext'

export interface TimelineTitleTheme {
  base: string
}

export interface TimelineTitleProps extends ComponentProps<'h1'> {
  as?: HeadingLevel
  theme?: DeepPartial<TimelineTitleTheme>
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = 'h3',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: contentTheme } = useTimelineContentContext()

  const theme = mergeDeep(contentTheme.title, customTheme)

  return (
    <Tag className={twMerge(theme.base, className)} {...props}>
      {children}
    </Tag>
  )
}
