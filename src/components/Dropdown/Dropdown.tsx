import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react'
import * as React from 'react'
import './dropdown.css'
import { DeepPartial } from 'src/types'
import { DropdownTheme } from './theme'
import { DropdownComponent } from './DropdownComponent'
import { TbChevronDown } from 'react-icons/tb'
import { Colors, MainSizes, RoundedSizes } from '../PoluiProvider/PoluiTheme'

export interface DropdownProps extends Omit<React.ComponentProps<'button'>, 'color'> {
  label: string
  nested?: boolean
  children?: React.ReactNode
  icon?: React.FC<React.ComponentProps<'svg'>>
  nestingIcon?: React.ReactNode
  theme?: DeepPartial<DropdownTheme>
  disabled?: boolean
  color?: keyof Colors
  size?: keyof MainSizes
  rounded?: keyof RoundedSizes
}

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps & React.HTMLProps<HTMLButtonElement>>(
  (props, ref) => {
    const parentId = useFloatingParentNodeId()

    if (parentId === null) {
      return (
        <FloatingTree>
          <DropdownComponent {...props} icon={props.icon ?? TbChevronDown} ref={ref} />
        </FloatingTree>
      )
    }

    return <DropdownComponent {...props} ref={ref} />
  },
)
