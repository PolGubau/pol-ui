'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { Colors, ColorsType, DeepPartial } from '../../types/types'
import { useSidebarContext } from './SidebarContext'

export interface SidebarCTATheme {
  base: string
  color: ColorsType
}

export interface SidebarCTAProps extends Omit<ComponentProps<'div'>, 'color'> {
  color?: Colors
  theme?: DeepPartial<SidebarCTATheme>
}

export const SidebarCTA: FC<SidebarCTAProps> = ({
  children,
  color = 'info',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isCollapsed } = useSidebarContext()

  const theme = mergeDeep(rootTheme.cta, customTheme)

  return (
    <div
      data-testid="sidebar-cta"
      hidden={isCollapsed}
      className={twMerge(theme.base, theme.color[color], className)}
      {...props}
    >
      {children}
    </div>
  )
}

SidebarCTA.displayName = 'Sidebar.CTA'
