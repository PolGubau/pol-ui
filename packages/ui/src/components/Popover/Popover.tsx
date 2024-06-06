import React from 'react'
import * as P from '@radix-ui/react-popover'
import { TbX } from 'react-icons/tb'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { PopoverTheme } from './theme'
import type { DeepPartial } from '../../types'
import { IconButton } from '../IconButton'
import { Button } from '../Button'

export interface PopoverProps extends Omit<P.PopoverContentProps, 'content'> {
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  theme?: DeepPartial<PopoverTheme>
  closeClassName?: string
  closeIcon?: React.ReactNode
  hasCloseButton?: boolean
  trigger?: React.ReactNode
  label?: string
  disabled?: boolean
}
export const Popover = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal,
  trigger,
  label = 'Open Menu',
  theme: customTheme = {},
  closeClassName,
  hasCloseButton = true,
  closeIcon = <TbX />,
  disabled = false,
  ...rest
}: PopoverProps) => {
  const theme = mergeDeep(getTheme().popover, customTheme)
  const triggerNode = trigger || <Button name={label}>{label}</Button>

  return (
    <P.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={modal}>
      <P.Trigger disabled={disabled} asChild>
        {triggerNode}
      </P.Trigger>
      {!disabled && (
        <P.Portal>
          <P.Content
            {...rest}
            className={cn(theme.content.base, theme.content.animation, rest.className)}
            sideOffset={rest.sideOffset ?? 5}
          >
            {hasCloseButton && (
              <div className={theme.close}>
                <P.Close className={cn(closeClassName)} aria-label="Close" asChild>
                  <IconButton>{closeIcon}</IconButton>
                </P.Close>
              </div>
            )}
            {children}
            <P.Arrow className="fill-secondary-50 dark:fill-secondary-900" />
          </P.Content>
        </P.Portal>
      )}
    </P.Root>
  )
}
