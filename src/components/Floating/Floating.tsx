'use client'

import type { Placement } from '@floating-ui/core'
import { autoUpdate, useFocus } from '@floating-ui/react'
import type { ComponentProps, FC, ReactNode } from 'react'
import { useEffect, useRef  } from 'react'
import { twMerge } from 'tailwind-merge'
import { useBaseFLoating, useFloatingInteractions } from '../../hooks/use-floating'
import { getArrowPlacement } from './helpers'
import type { TriggerReason } from '../PoluiProvider/PoluiTheme'
import { TriggerReasonEnum } from '../../types/enums'
import { useBoolean } from '../../hooks'

export interface FloatingTheme {
  arrow: FloatingArrowTheme
  animation: string
  base: string
  content: string
  hidden: string
  style: {
    auto: string
    dark: string
    light: string
  }
  target: string
}

export interface FloatingArrowTheme {
  base: string
  placement: string
  style: {
    dark: string
    light: string
    auto: string
  }
}

export type FloatingStyle = 'dark' | 'light' | 'auto'

export interface FloatingProps extends Omit<ComponentProps<'div'>, 'content' | 'style'> {
  animation?: false | `duration-${number}`
  arrow?: boolean
  content: ReactNode
  placement?: 'auto' | Placement
  style?: FloatingStyle
  theme: FloatingTheme
  trigger?: TriggerReason
  minWidth?: number
}

export const Floating: FC<FloatingProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  style = 'dark',
  theme,
  trigger = TriggerReasonEnum.hover,
  minWidth,
  ...props
}) => {
  const arrowRef = useRef<HTMLDivElement>(null)
   const {value:open, setValue:setOpen} = useBoolean(false)

  const floatingProperties = useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen,
  })

  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y,
  } = floatingProperties

  const focus = useFocus(context)
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: 'tooltip',
    trigger,
    interactions: [focus],
  })

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }
  }, [open, refs.floating, refs.reference, update])

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
            theme.style[style],
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
            className={twMerge(
              theme.arrow.base,
              style === 'dark' && theme.arrow.style.dark,
              style === 'light' && theme.arrow.style.light,
              style === 'auto' && theme.arrow.style.auto,
            )}
            data-testid="ui-arrow"
            ref={arrowRef}
            style={{
              top: arrowY ?? ' ',
              left: arrowX ?? ' ',
              right: ' ',
              bottom: ' ',
              [getArrowPlacement({ placement: floatingProperties.placement })]: theme.arrow.placement,
            }}
          >
            &nbsp;
          </div>
        )}
      </div>
    </>
  )
}
