'use client'

import { useMemo, type ComponentProps, type ElementType, type FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { SidebarContext, SidebarItemContext } from './SidebarContext'
import type { SidebarTheme } from './theme'
import { IconButton } from '../IconButton'
import { TbChevronsLeft, TbChevronsRight } from 'react-icons/tb'

export interface SidebarProps extends ComponentProps<'div'> {
  as?: ElementType
  collapseMode?: 'collapse' | 'hide'
  theme?: DeepPartial<SidebarTheme>
  open?: boolean
  onOpenChange?: () => void
  customBgColor?: string
  innerClassName?: string
  footer?: React.ReactNode
  hasMotion?: boolean
}

export const Sidebar: FC<SidebarProps> = ({
  children,
  as: Component = 'nav',
  collapseMode = 'collapse',
  theme: customTheme = {},
  open = true,
  onOpenChange,
  customBgColor,
  className,
  innerClassName,
  footer,
  hasMotion,
  ...props
}) => {
  const theme: SidebarTheme = mergeDeep(getTheme().sidebar, customTheme)
  const [childsOpened, setChildsOpened] = useState<string[]>([])
  const value = useMemo(
    () => ({
      theme,
      toggle: onOpenChange,
      hasMotion,
      open,
      color: customBgColor,
      childsOpened,
      setChildsOpened,
    }),
    [theme, onOpenChange, hasMotion, open, customBgColor, childsOpened],
  )

  const itemValue = useMemo(() => ({ isInsideCollapse: false }), [])

  const shouldHaveContent = !open || collapseMode === 'collapse'

  const handleToggle = () => {
    setChildsOpened([])
    onOpenChange?.()
  }

  return (
    <SidebarContext.Provider value={value}>
      <div className="flex flex-col h-full ">
        {shouldHaveContent && (
          <Component
            aria-label="Sidebar"
            hidden={open && collapseMode === 'hide'}
            className={twMerge(theme.root.base, theme.root.collapsed[open ? 'on' : 'off'], className)}
            style={{ backgroundColor: customBgColor }}
            {...props}
          >
            <div className={theme.root.inner}>
              <ul data-testid="ui-sidebar-item-group" className={twMerge(theme.itemGroup, innerClassName)}>
                <SidebarItemContext.Provider value={itemValue}>{children}</SidebarItemContext.Provider>
              </ul>
              <div>
                {footer}
                {onOpenChange && (
                  <div className={twMerge(theme.closeButton.base, theme.closeButton[open ? 'collapsed' : 'expanded'])}>
                    <IconButton onClick={handleToggle}>{open ? <TbChevronsRight /> : <TbChevronsLeft />}</IconButton>
                  </div>
                )}
              </div>
            </div>
          </Component>
        )}
      </div>
    </SidebarContext.Provider>
  )
}
