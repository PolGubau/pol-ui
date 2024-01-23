import React, { ComponentProps } from 'react'
import { DropdownContext } from './DropdownContext'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'

interface DropdownItemProps extends ComponentProps<'button'> {
  label: string
  disabled?: boolean
}

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ label, disabled, ...props }, forwardedRef) => {
    const menu = React.useContext(DropdownContext)
    const item = useListItem({ label: disabled ? null : label })
    const tree = useFloatingTree()
    const isActive = item.index === menu.activeIndex

    return (
      <button
        {...props}
        ref={useMergeRefs([item.ref, forwardedRef])}
        type="button"
        role="menuitem"
        className="MenuItem"
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
        {label}
      </button>
    )
  },
)
