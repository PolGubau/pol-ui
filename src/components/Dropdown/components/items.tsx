import { ComponentProps, FC } from 'react'
import { Item, SubTrigger } from '@radix-ui/react-dropdown-menu'
import { cn } from '../../../helpers'
import { DropdownShortcut } from '../Dropdown'
import { TbChevronRight, TbMessage } from 'react-icons/tb'
import { FocusEffect } from '../../FocusEffect'
import { ExpandableButton } from '../../ExpandableButton'
import { Button, ButtonProps } from '../../Button'
import { Textarea, TextareaProps } from '../../Textarea'
import { useMediaQuery } from '../../../hooks'

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

interface DropdownExpandableProps extends ComponentProps<typeof Item> {
  label?: string
  shortcut?: React.ReactNode
  icon?: FC<ComponentProps<'svg'>>
  shortcutClassName?: string
  children: React.ReactNode
  once?: boolean
  triggerWrapperClassName?: string
  wrapperClassName?: string
}
const DropdownExpandable = ({
  className,
  label,
  icon: Icon,
  shortcut,
  shortcutClassName,
  triggerWrapperClassName,
  wrapperClassName,
  children,
  once,
  ...props
}: DropdownExpandableProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <ExpandableButton
      className="w-full"
      once
      label={label}
      triggerWrapperClassName={cn('mx-2 rounded-t-lg data-[state=open]:bg-secondary-800/10', triggerWrapperClassName)}
      trigger={
        <Item
          {...props}
          className={cn(
            'group w-auto relative flex cursor-default select-none items-center p-2 text-sm outline-none gap-4 rounded-md opacity-90 text-black dark:text-white overflow-hidden',
            'hover:opacity-100',
            'focus:bg-secondary-800/10',
            'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

            className,
          )}
        >
          <FocusEffect className="bg-black/10" />

          {Icon && <Icon className="h-[18px] w-[18px]" />}
          {label}
        </Item>
      }
    >
      <div
        className={cn(wrapperClassName, {
          'mx-2 bg-secondary-800/10 rounded-b-lg': !isDesktop,
        })}
      >
        {children}
      </div>
    </ExpandableButton>
  )
}

interface DropdownExpandableTextAreaProps extends TextareaProps {
  label?: string
  icon?: FC<ComponentProps<'svg'>>
  shortcut?: React.ReactNode
  shortcutClassName?: string
  className?: string
  button?: ButtonProps
}

const DropdownExpandableTextArea = ({
  className,
  button = {
    label: 'Send',
  },
  ...props
}: DropdownExpandableTextAreaProps) => (
  <DropdownExpandable icon={TbMessage} label="Write a comment" className={cn('py-2', className)}>
    <form className="flex flex-col gap-2 p-2 pt-1 border-b-lg">
      <Textarea autoFocus {...props} innerClassName="w-full bg-white p-2" />
      <nav className="flex flex-row-reverse justify-right w-full">
        <Button size={'sm'} {...button} type="submit">
          {button.label}
          <TbChevronRight className="w-4 h-4" />
        </Button>
      </nav>
    </form>
  </DropdownExpandable>
)

export {
  type DropdownItemProps,
  DropdownItem,
  type DropdownSubTriggerProps,
  DropdownSubTrigger,
  type DropdownExpandableProps,
  DropdownExpandable,
  DropdownExpandableTextArea,
  type DropdownExpandableTextAreaProps,
}
