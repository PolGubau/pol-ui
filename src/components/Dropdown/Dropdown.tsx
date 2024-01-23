import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react'
import * as React from 'react'
import './dropdown.css'
import { DeepPartial } from 'src/types'
import { DropdownTheme } from './theme'
import { DropdownComponent } from './DropdownComponent'
import { TbChevronDown } from 'react-icons/tb'
import { Colors, MainSizesElastic, RoundedSizes } from '../PoluiProvider/PoluiTheme'

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
  color?: keyof Colors
  size?: keyof MainSizesElastic
  rounded?: keyof RoundedSizes
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
