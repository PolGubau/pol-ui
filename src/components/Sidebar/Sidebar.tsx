'use client'

import { useMemo, type ComponentProps, type ElementType, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { SidebarCollapse } from './SidebarCollapse'
import { SidebarContext } from './SidebarContext'
import { SidebarItem } from './SidebarItem'
import { SidebarItemGroup } from './SidebarItemGroup'
import { SidebarItems } from './SidebarItems'
import { SidebarLogo } from './SidebarLogo'
import type { SidebarTheme } from './theme'
import { motion } from 'framer-motion'
import { IconButton } from '../IconButton'
import { TbChevronsLeft, TbChevronsRight } from 'react-icons/tb'

export interface SidebarProps extends ComponentProps<'div'> {
  as?: ElementType
  collapseMode?: 'collapse' | 'hide'
  collapsable?: boolean
  theme?: DeepPartial<SidebarTheme>
  collapsed?: boolean
  toggle?: () => void
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = 'nav',
  collapseMode = 'collapse',
  collapsable = true,
  theme: customTheme = {},
  collapsed = false,
  toggle,
  className,
  ...props
}) => {
  const theme: SidebarTheme = mergeDeep(getTheme().sidebar, customTheme)

  const value = useMemo(() => ({ theme, collapsed }), [theme, collapsed])

  const shouldHaveContent = !collapsed || collapseMode === 'collapse'

  return (
    <SidebarContext.Provider value={value}>
      <motion.div layout {...framerSidebarPanel} className="flex flex-col h-auto ">
        {shouldHaveContent && (
          <Component
            aria-label="Sidebar"
            hidden={collapsed && collapseMode === 'hide'}
            className={twMerge(theme.root.base, theme.root.collapsed[collapsed ? 'on' : 'off'], className)}
            {...props}
          >
            <div className={theme.root.inner}>
              {children}
              {collapsable && (
                <div
                  className={twMerge(theme.closeButton.base, theme.closeButton[collapsed ? 'collapsed' : 'expanded'])}
                >
                  <IconButton onClick={toggle}>{collapsed ? <TbChevronsRight /> : <TbChevronsLeft />}</IconButton>
                </div>
              )}
            </div>
          </Component>
        )}
      </motion.div>
    </SidebarContext.Provider>
  )
}

SidebarComponent.displayName = 'Sidebar'

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
})

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}
