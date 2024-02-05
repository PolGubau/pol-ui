import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react'
import * as React from 'react'
import type { DropdownTheme } from './theme'
import { DropdownComponent } from './DropdownComponent'
import { TbChevronDown } from 'react-icons/tb'
import type { Colors, DeepPartial, MainSizes, RoundedSizes } from '../../types/types'

/**
 * We need to omit color and size from the base button props because we want to use the color and size from the dropdown theme.
 */
type BaseButtonProps = Omit<React.ComponentProps<'button'>, 'color' | 'size'>

export interface DropdownProps extends BaseButtonProps {
  label: string
  nested?: boolean
  children?: React.ReactNode
  icon?: React.FC<React.ComponentProps<'svg'>>
  nestingIcon?: React.ReactNode
  theme?: DeepPartial<DropdownTheme>
  disabled?: boolean
  color?: Colors
  size?: MainSizes
  rounded?: RoundedSizes
  trigger?: React.JSX.Element
}

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps & BaseButtonProps>((props, ref) => {
  const parentId = useFloatingParentNodeId()

  if (parentId === null) {
    return (
      <FloatingTree>
        <DropdownComponent {...props} icon={props.icon ?? TbChevronDown} ref={ref} />
      </FloatingTree>
    )
  }

  return <DropdownComponent {...props} ref={ref} />
})

Dropdown.displayName = 'Dropdown'
