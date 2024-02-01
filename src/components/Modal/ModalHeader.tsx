'use client'
import { useId, useLayoutEffect, type ComponentProps, type ElementType, type FC } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial } from '../../types/types'
import { useModalContext } from './ModalContext'
import { IconButton } from '../IconButton'

export interface ModalHeaderTheme {
  base: string
  popup: string
  title: string
}

export interface ModalHeaderProps extends ComponentProps<'div'> {
  as?: ElementType
  theme?: DeepPartial<ModalHeaderTheme>
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  as: Component = 'h3',
  children,
  className,
  theme: customTheme = {},
  id,
  ...props
}) => {
  const innerHeaderId = useId()
  const headerId = id ?? innerHeaderId

  const { theme: rootTheme, popup, onClose, setHeaderId } = useModalContext()

  const theme = mergeDeep(rootTheme.header, customTheme)

  useLayoutEffect(() => {
    setHeaderId(headerId)

    return () => setHeaderId(undefined)
  }, [headerId, setHeaderId])

  return (
    <div className={twMerge(theme.base, popup && theme.popup, className)} {...props}>
      <Component id={headerId} className={theme.title}>
        {children}
      </Component>
      <IconButton aria-label="Close" type="button" onClick={onClose}>
        <HiOutlineX aria-hidden size={20} />
      </IconButton>
    </div>
  )
}
