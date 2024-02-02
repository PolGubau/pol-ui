'use client'

import type { ComponentProps, FC, MouseEvent } from 'react'
import { HiX } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial } from '../../types/types'
import { useToastContext } from './ToastContext'
import { IconButton } from '../IconButton'

export interface ToastToggleTheme {
  base: string
  icon: string
}

export interface ToastToggleProps extends Omit<ComponentProps<'button'>, 'color'> {
  theme?: DeepPartial<ToastToggleTheme>
  xIcon?: FC<ComponentProps<'svg'>>
  onDismiss?: () => void
}

export const ToastToggle: FC<ToastToggleProps> = ({
  className,
  onClick,
  theme: customTheme = {},
  xIcon: XIcon = HiX,
  onDismiss,
  ...props
}) => {
  const { theme: rootTheme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext()

  const theme = mergeDeep(rootTheme.toggle, customTheme)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e)

    if (onDismiss) {
      onDismiss()
      return
    }

    setIsClosed(!isClosed)
    setTimeout(() => setIsRemoved(!isRemoved), duration)
  }

  return (
    <IconButton
      aria-label="Close"
      onClick={handleClick}
      type="button"
      className={twMerge(theme.base, className)}
      {...props}
    >
      <XIcon aria-hidden className={theme.icon} />
    </IconButton>
  )
}
