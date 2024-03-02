'use client'

import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from 'react'
import { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { Colors, DeepPartial, RoundedSizes, RoundedSizesTypes } from '../../types/types'
import { Badge } from '../Badge'
import { Tooltip } from '../Tooltip'
import { useSidebarContext, useSidebarItemContext } from './SidebarContext'
import { motion } from 'framer-motion'
import { ColorsEnum, RoundedSizesEnum } from '../../types'
import { useRipple } from '../../hooks'
export interface SidebarItemTheme {
  active: string
  base: string
  rounded: RoundedSizesTypes
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
  badge: string
  listItem: string
}

export interface SidebarItemProps extends Omit<ComponentProps<'div'>, 'ref'>, Record<string, unknown> {
  active?: boolean
  as?: ElementType
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  badge?: string
  rounded?: RoundedSizes
  labelColor?: Colors
  theme?: DeepPartial<SidebarItemTheme>
}

const ListItem: FC<
  PropsWithChildren<{
    id: string
    theme: SidebarItemTheme
    collapsed?: boolean
    tooltipChildren: ReactNode | undefined
    className?: string
  }>
> = ({ id, theme, collapsed = false, tooltipChildren, children: wrapperChildren, ...props }) => {
  const [ripple, event] = useRipple({
    // disabled: disabled || loading,
    opacity: 0.2,
    // className: colorToTailwind(color),
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
      rounded = RoundedSizesEnum.md,
      icon: Icon,
      badge,
      labelColor = ColorsEnum.secondary,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId()
    const { theme: rootTheme, open: collapsed, color } = useSidebarContext()
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
        <motion.div
          variants={itemVariants}
          transition={{
            type: 'spring',
            stiffness: 260,
          }}
        >
          <Component
            aria-labelledby={`ui-sidebar-item-${id}`}
            ref={ref}
            className={twMerge(
              theme.base,
              theme.rounded[rounded],
              isActive && theme.active,
              !collapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
              className,
            )}
            style={{ backgroundColor: !isActive && color }}
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
            {!collapsed && badge && (
              <Badge color={labelColor} data-testid="ui-sidebar-label" hidden={collapsed} className={theme.badge}>
                {badge}
              </Badge>
            )}
          </Component>
        </motion.div>
      </ListItem>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'
