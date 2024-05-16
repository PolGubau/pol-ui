import React from 'react'
import * as P from '@radix-ui/react-popover'
import { TbX } from 'react-icons/tb'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { PopoverTheme } from './theme'
import type { DeepPartial } from '../../types'
import { IconButton } from '../IconButton'

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
  hasCloseButton?: boolean
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
  hasCloseButton = true,
  closeIcon = <TbX />,
  ...rest
}: PopoverProps) => {
  const theme = mergeDeep(getTheme().popover, customTheme)

  return (
    <P.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <P.Trigger asChild>{children}</P.Trigger>
      <P.Portal>
        <P.Content
          {...rest}
          className={cn(theme.content.base, theme.content.animation, rest.className)}
          sideOffset={rest.sideOffset ?? 5}
        >
          <div className={theme.close}>
            {hasCloseButton && (
              <P.Close className={cn(closeClassName)} aria-label="Close" asChild>
                <IconButton>{closeIcon}</IconButton>
              </P.Close>
            )}
          </div>
          {content}
          <P.Arrow className="fill-white" />
        </P.Content>
      </P.Portal>
    </P.Root>
  )
}
