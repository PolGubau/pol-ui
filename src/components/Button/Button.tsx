'use client'

import type { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import genericForwardRef from '../../helpers/generic-forward-ref'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import { Loader } from '../Loader'
import { ButtonBase, type ButtonBaseProps } from './ButtonBase'
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from '../../types/enums'
import { useRipple } from '../../hooks'
import { motion } from 'framer-motion'
import type { ButtonProps } from './props'
import { rippleClass } from '../../helpers/rippleClass'

const ButtonComponentFn = <T extends ElementType = 'button'>({
  children,
  className,
  color = ColorsEnum.primary,
  disabled,
  hasMotion = false,
  fullSized = false,
  loading = false,
  loadingLabel = 'Loading...',
  loader,
  label,
  hasBackground = true,
  outline = false,
  rounded = RoundedSizesEnum.md,
  positionInGroup = 'none',
  size = MainSizesEnum.md,
  theme: customTheme = {},
  innerClassname = '',
  ...props
}: ButtonProps<T>) => {
  const theme = mergeDeep(getTheme().button, customTheme)

  const theirProps = props as ButtonBaseProps<T>

  const [ripple, event] = useRipple({
    disabled: disabled || loading,
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
      disabled={loader ?? disabled}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        outline && theme.outline.outlineBase,
        outline && theme.outline.color[color],
        !outline && theme.ring.base,
        !outline && theme.ring.colors[color],
        !outline && hasBackground && theme.color[color],
        theme.rounded[rounded],
        fullSized && theme.fullSized,
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
          loading && theme.loading,
          loading && theme.inner.loadingPadding[size],
          theme.inner.position[positionInGroup],
          innerClassname,
        )}
      >
        {loading && (
          <span className={twMerge(theme.loaderSlot, theme.loaderLeftPosition[size])}>
            {loader ?? <Loader size={size} />}
          </span>
        )}
        {typeof children !== 'undefined' ? (
          children
        ) : (
          <span data-testid="ui-button-label" className={twMerge(theme.label)}>
            {loading ? loadingLabel : label}
          </span>
        )}
      </span>
    </MotionButtonBase>
  )
}

export const Button = genericForwardRef(ButtonComponentFn)
