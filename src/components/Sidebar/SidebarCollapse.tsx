'use client'

import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { useEffect, useId, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial, IBoolean } from '../../types/types'
import { Tooltip } from '../Tooltip'
import { SidebarItemContext, useSidebarContext } from './SidebarContext'
import type { SidebarItemProps } from './SidebarItem'

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
  const [isOpen, setOpen] = useState(open)
  const { theme: rootTheme, collapsed } = useSidebarContext()

  const theme = mergeDeep(rootTheme.collapse, customTheme)

  useEffect(() => setOpen(open), [open])

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <li>
      {collapsed && !isOpen ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  )

  return (
    <Wrapper>
      <button
        id={`ui-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        title={label}
        type="button"
        className={twMerge(theme.button, className)}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            data-testid="ui-sidebar-collapse-icon"
            className={twMerge(theme.icon.base, theme.icon.open[isOpen ? 'on' : 'off'])}
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
              renderChevronIcon(theme, isOpen)
            ) : (
              <ChevronIcon
                aria-hidden
                className={twMerge(theme.label.icon.base, theme.label.icon.open[isOpen ? 'on' : 'off'])}
              />
            )}
          </>
        )}
      </button>
      <ul aria-labelledby={`ui-sidebar-collapse-${id}`} hidden={!isOpen} className={theme.list}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  )
}

SidebarCollapse.displayName = 'Sidebar.Collapse'
