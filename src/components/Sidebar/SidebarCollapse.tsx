'use client'

import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { useId } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial, IBoolean } from '../../types/types'
import { Tooltip } from '../Tooltip'
import { SidebarItemContext, useSidebarContext } from './SidebarContext'
import type { SidebarItemProps } from './SidebarItem'
import { motion } from 'framer-motion'
import { useBoolean } from '../../hooks'

export interface SidebarCollapseTheme {
  button: string
  icon: {
    base: string
    open: IBoolean
  }
  label: {
    base: string
    icon: {
      base: string
      open: IBoolean
    }
  }
  list: string
}

export interface SidebarCollapseProps
  extends Pick<SidebarItemProps, 'active' | 'as' | 'href' | 'icon' | 'label' | 'labelColor'>,
    ComponentProps<'button'> {
  onClick?: ComponentProps<'button'>['onClick']
  open?: boolean
  chevronIcon?: FC<ComponentProps<'svg'>>
  renderChevronIcon?: (theme: SidebarCollapseTheme, open: boolean) => ReactElement
  theme?: DeepPartial<SidebarCollapseTheme>
}

export const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  icon: Icon,
  label,
  chevronIcon: ChevronIcon = HiChevronDown,
  renderChevronIcon,
  open = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId()
  const { value, toggle } = useBoolean(open)
  const { theme: rootTheme, collapsed } = useSidebarContext()

  const theme = mergeDeep(rootTheme.collapse, customTheme)

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <motion.li>
      {collapsed && !value ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </motion.li>
  )

  return (
    <Wrapper>
      <button
        id={`ui-sidebar-collapse-${id}`}
        onClick={() => toggle()}
        title={label}
        type="button"
        className={twMerge(theme.button, className)}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            data-testid="ui-sidebar-collapse-icon"
            className={twMerge(theme.icon.base, theme.icon.open[value ? 'on' : 'off'])}
          />
        )}
        {collapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span data-testid="ui-sidebar-collapse-label" className={theme.label.base}>
              {label}
            </span>
            {renderChevronIcon ? (
              renderChevronIcon(theme, value)
            ) : (
              <ChevronIcon
                aria-hidden
                className={twMerge(theme.label.icon.base, theme.label.icon.open[value ? 'on' : 'off'])}
              />
            )}
          </>
        )}
      </button>
      <ul aria-labelledby={`ui-sidebar-collapse-${id}`} hidden={!value} className={theme.list}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  )
}

SidebarCollapse.displayName = 'Sidebar.Collapse'
