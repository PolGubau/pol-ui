import { createElement, type ComponentPropsWithoutRef, type ElementType, type ForwardedRef } from 'react'
import { genericForwardRef } from '../../helpers'
import { Slot } from '@radix-ui/react-slot'

export type ButtonBaseProps<T extends ElementType = 'button'> = {
  as?: T
  href?: string
  asChild?: boolean
} & ComponentPropsWithoutRef<T>

const ButtonBaseComponent = <T extends ElementType = 'button'>(
  { children, as: Component, href, type = 'button', asChild = false, ...props }: ButtonBaseProps<T>,
  ref: ForwardedRef<HTMLElement>,
) => {
  const BaseComponent = Component ?? (href ? 'a' : 'button')

  const Comp = asChild ? Slot : BaseComponent

  return createElement(Comp, { ref, href, type, ...props }, children)
}

export const ButtonBase = genericForwardRef(ButtonBaseComponent)
