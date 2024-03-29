import type { ComponentProps } from 'react'
import React from 'react'
import { DropdownContext } from './DropdownContext'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '../../theme-store'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DropdownTheme } from './theme'
import { Kbd } from '../Kbd'
export interface DropdownItemProps extends ComponentProps<'button'> {
  label?: string
  disabled?: boolean
  customTheme?: Partial<DropdownTheme>
  shortcut?: React.ReactNode
  href?: string
}

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ label, children, disabled, shortcut, customTheme = {}, href, ...props }, forwardedRef) => {
    const menu = React.useContext(DropdownContext)
    const item = useListItem({ label: disabled ? null : label })
    const tree = useFloatingTree()

    const isALink = typeof href !== 'undefined'
    const Component = isALink ? 'a' : 'div'

    const isActive = item.index === menu.activeIndex
    const { dropdown: dropdownTheme } = getTheme()
    const theme: DropdownTheme = mergeDeep(dropdownTheme, customTheme)
    return (
      <Component className="relative">
        <button
          {...props}
          ref={useMergeRefs([item.ref, forwardedRef])}
          type="button"
          role="menuitem"
          className={twMerge(
            theme.item.base,
            disabled && theme.root.disabled,
            theme.item.color[menu.color],
            props.className,
          )}
          tabIndex={isActive ? 0 : -1}
          disabled={disabled}
          {...menu.getItemProps({
            onClick(event: React.MouseEvent<HTMLButtonElement>) {
              props.onClick?.(event)
              tree?.events.emit('click')
            },
            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
              props.onFocus?.(event)
              menu.setHasFocusInside(true)
            },
          })}
        >
          {label ?? children}
          {shortcut && <Kbd className="text-xs p-1">{shortcut}</Kbd>}
        </button>
      </Component>
    )
  },
)

DropdownItem.displayName = 'DropdownItem'
