'use client'

import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { Loader } from '../Loader'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import { useRipple } from '../../hooks'
import type { ButtonBaseProps } from '../Button/ButtonBase'
import { ButtonBase } from '../Button/ButtonBase'
import type { IconButtonTheme } from './theme'
import { Tooltip } from '../Tooltip'
import { motion } from 'framer-motion'
import { mergeDeep } from '../../helpers/merge-deep'
import { colorToTailwind } from '../../helpers/colorToTailwind'
import type { ButtonProps } from '../Button'

export type IconButtonProps<T extends ElementType = 'button'> = {
  theme?: DeepPartial<IconButtonTheme>
} & ComponentPropsWithoutRef<T> &
  Omit<ButtonProps, 'theme' | 'loadingLabel'>
/**
 *
 * @name IconButton
 * @description Base component for displaying icons as button with ripple effect, tooltip, and loading state.
 *
 * @returns
 */
const IconButtonFn = <T extends ElementType = 'button'>({
  children = null,
  className = '',
  color = ColorsEnum.primary,
  disabled = false,
  hasMotion = false,
  loading = false,
  loader = null,
  label = '',
  outline = false,
  rounded = 'full',
  size = MainSizesEnum.md,
  theme: customTheme = {},
  innerClassname = '',
  ...props
}: IconButtonProps<T>) => {
  const { iconButton: baseTheme } = getTheme()
  const theme = mergeDeep(baseTheme, customTheme)

  const theirProps = props as ButtonBaseProps<T>

  const [ripple, event] = useRipple({
    disabled: disabled || loading,
    opacity: 0.2,
    className: colorToTailwind(color),
  })

  const MotionBase = motion(ButtonBase)
  return (
    <MotionBase
      ref={ripple}
      transition={hasMotion && { duration: 0.1, type: 'spring' }}
      whileTap={hasMotion && { scale: 0.95 }}
      whileHover={hasMotion && { scale: 1.05 }}
      whileFocus={hasMotion && { scale: 1.1 }}
      onPointerDown={event}
      onKeyPress={event}
      title={label}
      data-testid="ui-icon-button"
      data-label={label}
      data-title={label}
      disabled={disabled}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        theme.rounded[rounded],
        theme.color[color],
        outline && theme.inner.outline,
        outline && theme.inner.color[color],
        className,
      )}
      {...theirProps}
    >
      <span
        className={twMerge(
          theme.inner.base,
          theme.size[size as keyof typeof theme.size],
          loading && theme.loading,
          innerClassname,
        )}
      >
        {loading ? (
          <span className={twMerge(theme.loading)}>{loader ?? <Loader size={size} color={color} />}</span>
        ) : (
          children
        )}
      </span>
    </MotionBase>
  )
}

/**
 * @name IconButton
 * @description Base component for displaying icons as button with ripple effect, tooltip, and loading state
 * @param props IconButtonProps extends ButtonBaseProps
 * @returns React.FC IconButton component
 * @example
 * <IconButton label="Search" color="primary" size="md" rounded="full" isLoading={false} outline={false}>
 *    <TbSearch />
 * </IconButton>
 *
 * <IconButton>
 *    <MdFilter />
 * </IconButton>
 *
 * <IconButton color="info" size="xl" rounded="none">
 *    <LogoIcon />
 * </IconButton>
 *
 * @see https://github.com/PolGubau/pol-ui/tree/main/src/components/IconButton
 *
 * @author Pol Gubau Amores - https://polgubau.com
 */
export const IconButton = <T extends ElementType = 'button'>(props: IconButtonProps<T>) => {
  const { label } = props
  return label && !props.disabled ? (
    <Tooltip content={label}>
      <IconButtonFn {...props} />
    </Tooltip>
  ) : (
    <IconButtonFn {...props} />
  )
}
