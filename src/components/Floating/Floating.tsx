'use client'

import { useMemo, type ComponentProps, type FC, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { getArrowPlacement } from './helpers'
import { TriggerReasonEnum } from '../../types/enums'
import type { UseFloatingProps } from './use-floating'
import { useFloating } from './use-floating'

export interface FloatingTheme {
  arrow: FloatingArrowTheme
  animation: string
  base: string
  content: string
  hidden: string
  target: string
}

export interface FloatingArrowTheme {
  base: string
  placement: string
}

export interface FloatingProps
  extends Omit<ComponentProps<'div'>, 'content' | 'style'>,
    Pick<UseFloatingProps, 'trigger' | 'placement'> {
  animation?: false | `duration-${number}`
  arrow?: boolean
  content: ReactNode
  theme: FloatingTheme
  minWidth?: number
  open?: boolean
  setOpen?: (prevState: boolean) => void
}

export const Floating: FC<FloatingProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  theme,
  trigger = TriggerReasonEnum.hover,
  minWidth,
  open = false,
  setOpen,
  ...props
}) => {
  const isOpen = useMemo(() => open, [open])

  const { refs, getFloatingProps, getReferenceProps, x, y, arrowX, arrowY, arrowRef, strategy } = useFloating({
    open: isOpen,
    setOpen: () => setOpen?.(!open),
    trigger,
    placement,
  })

  return (
    <>
      <div ref={refs.setReference} className={theme.target} data-testid="ui-target" {...getReferenceProps()}>
        {children}
      </div>
      <div
        ref={refs.setFloating}
        data-testid="ui"
        {...getFloatingProps({
          className: twMerge(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            className,
          ),
          style: {
            position: strategy,
            top: y ?? ' ',
            left: x ?? ' ',
            minWidth,
          },
          ...props,
        })}
      >
        <div className={theme.content}>{content}</div>
        {arrow && (
          <div
            className={twMerge(theme.arrow.base)}
            data-testid="ui-arrow"
            ref={arrowRef}
            style={{
              top: arrowY ?? ' ',
              left: arrowX ?? ' ',
              right: ' ',
              bottom: ' ',
              [getArrowPlacement({ placement })]: theme.arrow.placement,
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
    </>
  )
}
