'use client'

import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import genericForwardRef from '../../helpers/generic-forward-ref'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { Loader } from '../Loader'
import { ButtonBase, type ButtonBaseProps } from './ButtonBase'
import type { PositionInButtonGroup } from './ButtonGroup/ButtonGroup'
import { ButtonGroup } from './ButtonGroup/ButtonGroup'
import type { MainSizesElastic } from '../PoluiProvider/PoluiTheme'
import { type RoundedSizes } from '../PoluiProvider/PoluiTheme'
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from '../../types/enums'
import { useRipple } from '../../hooks'
import type { ButtonTheme } from './theme'
import { motion } from 'framer-motion'

export const rippleClass = (color: keyof Colors) => {
  switch (color) {
    case ColorsEnum.primary:
      return 'bg-primary-600'
    case ColorsEnum.secondary:
      return 'bg-secondary-600'
    case ColorsEnum.success:
      return 'bg-success-600'
    case ColorsEnum.warning:
      return 'bg-warning-600'
    case ColorsEnum.error:
      return 'bg-error-600'
    case ColorsEnum.info:
      return 'bg-info-600'
    default:
      return 'bg-primary-600'
  }
}
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T | null
  href?: string
  color?: keyof Colors
  fullSized?: boolean
  target?: string
  isProcessing?: boolean
  processingLabel?: string
  hasMotion?: boolean
  processingLoader?: ReactNode
  label?: ReactNode
  outline?: boolean
  rounded?: keyof RoundedSizes
  positionInGroup?: keyof PositionInButtonGroup
  size?: keyof MainSizesElastic
  theme?: DeepPartial<ButtonTheme>
  innerClassname?: string
} & ComponentPropsWithoutRef<T>

const ButtonComponentFn = <T extends ElementType = 'button'>({
  children,
  className,
  color = ColorsEnum.primary,
  disabled,
  hasMotion = true,
  fullSized = false,
  isProcessing = false,
  processingLabel = 'Loading...',
  processingLoader,
  label,
  outline = false,
  rounded = RoundedSizesEnum.md,
  positionInGroup = 'none',
  size = MainSizesEnum.md,
  theme: customTheme = {},
  innerClassname = '',
  ...props
}: ButtonProps<T>) => {
  const { buttonGroup: groupTheme, button: buttonTheme } = getTheme()

  const theme = mergeDeep(buttonTheme, customTheme)
  const theirProps = props as ButtonBaseProps<T>

  const [ripple, event] = useRipple({
    disabled: disabled || isProcessing,
    opacity: 0.2,
    className: rippleClass(color),
  })

  const MotionButtonBase = motion(ButtonBase)

  return (
    <MotionButtonBase
      transition={hasMotion && { duration: 0.1, type: 'spring' }}
      whileTap={hasMotion && { scale: 0.95 }}
      whileHover={hasMotion && { scale: 0.98 }}
      whileFocus={hasMotion && { scale: 1.1 }}
      ref={ripple}
      onPointerDown={event}
      onKeyPress={event}
      disabled={disabled}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        outline && theme.outline.outlineBase,
        outline ? theme.outline.color[color] : theme.color[color],
        theme.rounded[rounded],
        fullSized && theme.fullSized,
        groupTheme.position[positionInGroup],
        className,
      )}
      {...theirProps}
    >
      <span
        className={twMerge(
          theme.inner.base,
          theme.outline[outline ? 'on' : 'off'],
          theme.size[size],
          outline && !theme.outline.color[color] && theme.inner.outline,
          isProcessing && theme.isProcessing,
          isProcessing && theme.inner.isProcessingPadding[size],
          theme.inner.position[positionInGroup],
          innerClassname,
        )}
      >
        {isProcessing && (
          <span className={twMerge(theme.loaderSlot, theme.loaderLeftPosition[size])}>
            {processingLoader ?? <Loader size={size} />}
          </span>
        )}
        {typeof children !== 'undefined' ? (
          children
        ) : (
          <span data-testid="ui-button-label" className={twMerge(theme.label)}>
            {isProcessing ? processingLabel : label}
          </span>
        )}
      </span>
    </MotionButtonBase>
  )
}

const ButtonComponent = genericForwardRef(ButtonComponentFn)

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})
