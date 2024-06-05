import { ComponentProps, FC } from 'react'
import { Item, SubTrigger } from '@radix-ui/react-dropdown-menu'
import { cn } from '../../../helpers'
import { DropdownShortcut } from '../Dropdown'
import { TbChevronRight } from 'react-icons/tb'
import { FocusEffect } from '../../FocusEffect'

interface DropdownItemProps extends ComponentProps<typeof Item> {
  label?: string
  shortcut?: React.ReactNode
  icon?: FC<ComponentProps<'svg'>>
  shortcutClassName?: string
}
const DropdownItem = ({ className, label, icon: Icon, shortcut, shortcutClassName, ...props }: DropdownItemProps) => (
  <Item
    className={cn(
      'group relative flex cursor-default select-none items-center p-2 text-sm outline-none gap-4 rounded-md mx-2 opacity-90 text-black dark:text-white overflow-hidden',
      'hover:opacity-100',
      'focus:bg-secondary-800/10',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <FocusEffect className="bg-black/10" />

    {Icon && <Icon className="h-[18px] w-[18px]" />}
    {props.children ?? label}
    {shortcut && <DropdownShortcut className={shortcutClassName}>{shortcut}</DropdownShortcut>}
  </Item>
)

interface DropdownSubTriggerProps extends ComponentProps<typeof SubTrigger> {
  icon?: FC<ComponentProps<'svg'>>
  label?: string
  rightIcon?: FC<ComponentProps<'svg'>>
}

const DropdownSubTrigger = ({
  className,
  label,
  rightIcon: RightIcon = TbChevronRight,
  ...props
}: DropdownSubTriggerProps) => (
  <SubTrigger
    className={cn(
      'data-[state=open]:bg-secondary-800/10',
      'relative flex cursor-default select-none items-center p-2 text-sm outline-none gap-4 rounded-md mx-2 opacity-90 text-black dark:text-white',
      'hover:opacity-100',
      'focus:bg-secondary-800/10',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

      className,
    )}
    {...props}
  >
    {props.children ?? label}
    <FocusEffect className="bg-black/10" />
    <RightIcon className="ml-auto h-4 w-4" />
  </SubTrigger>
)

export { type DropdownItemProps, DropdownItem, type DropdownSubTriggerProps, DropdownSubTrigger }
