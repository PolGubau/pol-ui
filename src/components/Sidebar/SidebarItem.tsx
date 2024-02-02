'use client'

import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { Colors, DeepPartial } from '../../types/types'
import { Badge } from '../Badge'
import { Tooltip } from '../Tooltip'
import { useSidebarContext } from './SidebarContext'
import { useSidebarItemContext } from './SidebarItemContext'
import { motion } from 'framer-motion'
import { ColorsEnum } from '../../types'
import { useRipple } from '../../hooks'
export interface SidebarItemTheme {
  active: string
  base: string
  collapsed: {
    insideCollapse: string
    noIcon: string
  }
  content: {
    base: string
  }
  icon: {
    base: string
    active: string
  }
  label: string
  listItem: string
}

export interface SidebarItemProps extends Omit<ComponentProps<'div'>, 'ref'>, Record<string, unknown> {
  active?: boolean
  as?: ElementType
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  label?: string
  labelColor?: Colors
  theme?: DeepPartial<SidebarItemTheme>
}

const ListItem: FC<
  PropsWithChildren<{
    id: string
    theme: SidebarItemTheme
    collapsed: boolean
    tooltipChildren: ReactNode | undefined
    className?: string
  }>
> = ({ id, theme, collapsed, tooltipChildren, children: wrapperChildren, ...props }) => {
  const [ripple, event] = useRipple({
    // disabled: disabled || isProcessing,
    opacity: 0.2,
    // className: rippleClass(color),
  })
  return (
    <motion.li {...props} ref={ripple} onPointerDown={event}>
      {collapsed ? (
        <Tooltip
          content={
            <Children id={id} theme={theme}>
              {tooltipChildren}
            </Children>
          }
          placement="right"
        >
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </motion.li>
  )
}

const Children: FC<PropsWithChildren<{ id: string; theme: SidebarItemTheme }>> = ({ id, theme, children }) => {
  return (
    <span data-testid="ui-sidebar-item-content" id={`ui-sidebar-item-${id}`} className={twMerge(theme.content.base)}>
      {children}
    </span>
  )
}

export const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      active: isActive,
      as: Component = 'a',
      children,
      className,
      icon: Icon,
      label,
      labelColor = ColorsEnum.secondary,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId()
    const { theme: rootTheme, collapsed } = useSidebarContext()
    const { isInsideCollapse } = useSidebarItemContext()

    const theme = mergeDeep(rootTheme.item, customTheme)
    const itemVariants = {
      closed: {
        opacity: 0,
      },
      open: { opacity: 1 },
    }
    return (
      <ListItem theme={theme} className={theme.listItem} id={id} collapsed={collapsed} tooltipChildren={children}>
        <motion.div variants={itemVariants}>
          <Component
            aria-labelledby={`ui-sidebar-item-${id}`}
            ref={ref}
            className={twMerge(
              theme.base,
              isActive && theme.active,
              !collapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
              className,
            )}
            {...props}
          >
            {Icon && (
              <Icon
                aria-hidden
                data-testid="ui-sidebar-item-icon"
                className={twMerge(theme.icon?.base, isActive && theme.icon?.active)}
              />
            )}
            {collapsed && !Icon && (
              <span className={theme.collapsed?.noIcon}>
                {(children as string).charAt(0).toLocaleUpperCase() ?? '?'}
              </span>
            )}
            {!collapsed && (
              <Children id={id} theme={theme}>
                {children}
              </Children>
            )}
            {!collapsed && label && (
              <Badge color={labelColor} data-testid="ui-sidebar-label" hidden={collapsed} className={theme.label}>
                {label}
              </Badge>
            )}
          </Component>
        </motion.div>
      </ListItem>
    )
  },
)

SidebarItem.displayName = 'Sidebar.Item'
