import React from 'react'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import { Colors, ColorsEnum, DeepPartial } from '../../types'
import { AnnouncmentTheme } from './theme'
import { Button, ButtonProps } from '../Button'

interface AnnouncementProps extends ButtonProps {
  children: React.ReactNode
  theme?: DeepPartial<AnnouncmentTheme>
  color?: Colors
}

const Announcement = ({
  children,
  theme: customTheme = {},
  color = ColorsEnum.secondary,
  ...props
}: AnnouncementProps) => {
  const theme = mergeDeep(getTheme().announcement, customTheme)

  return (
    <Button {...props} color={color} className={cn(theme.base, props.className)}>
      {children}
    </Button>
  )
}

export { Announcement, type AnnouncementProps }
