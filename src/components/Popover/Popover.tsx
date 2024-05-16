import React from 'react'
import * as P from '@radix-ui/react-popover'
import { TbX } from 'react-icons/tb'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { PopoverTheme } from './theme'
import type { DeepPartial } from '../../types'

export interface PopoverProps extends Omit<P.PopoverContentProps, 'content'> {
  children: React.ReactNode
  content: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  theme?: DeepPartial<PopoverTheme>
  closeClassName?: string
  closeIcon?: React.ReactNode
}
export const Popover = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  modal,
  theme: customTheme = {},
  closeClassName,
  closeIcon = <TbX />,
  ...rest
}: PopoverProps) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme)

  return (
    <P.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <P.Trigger asChild>{children}</P.Trigger>
      <P.Portal>
        <P.Content
          {...rest}
          className={cn(theme.content.base, theme.content.animation, rest.className)}
          sideOffset={rest.sideOffset ?? 5}
        >
          {content}
          <P.Close className={cn(theme.close, closeClassName)} aria-label="Close">
            {closeIcon}
          </P.Close>
          <P.Arrow className="fill-white" />
        </P.Content>
      </P.Portal>
    </P.Root>
  )
}
