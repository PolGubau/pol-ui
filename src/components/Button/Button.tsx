'use client'

import type { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import { Loader } from '../Loader'
import { ButtonBase, type ButtonBaseProps } from './ButtonBase'
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from '../../types/enums'
import { useRipple } from '../../hooks'
import { motion } from 'framer-motion'
import type { ButtonProps } from './props'
import { colorToTailwind } from '../../helpers/color-to-tailwind/colorToTailwind'

/**
 *
 * @name Button
 * @description The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * @param {React.ReactNode} props.children - The content of the button
 * @param {string} props.className - The class name of the button
 * @param {ColorsEnum} props.color - The color of the button
 * @param {boolean} props.disabled - If the button is disabled
 * @param {boolean} props.hasMotion - If the button has motion
 * @param {boolean} props.fullSized - If the button is full sized
 * @param {boolean} props.loading - If the button is loading
 * @param {string} props.loadingLabel - The label of the loading state
 * @param {React.ReactNode} props.loader - The loader of the button
 * @param {string} props.label - The label of the button
 * @param {boolean} props.hasBackground - If the button has background
 * @param {boolean} props.outline - If the button is outline
 * @param {RoundedSizesEnum} props.rounded - The rounded size of the button
 * @param {string} props.positionInGroup - The position in the group
 * @param {MainSizesEnum} props.size - The size of the button
 * @param {DeepPartial<ButtonTheme>} props.theme - The theme of the button
 * @param {string} props.innerClassname - The class name of the inner content
 * @returns React.FC<ButtonProps>
 */
export const Button = <T extends ElementType = 'button'>({
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
    opacity: 0.4,
    className: colorToTailwind(color),
  })

  const MotionButtonBase = motion(ButtonBase)

  return (
    <MotionButtonBase
      transition={hasMotion && { duration: 0.1, type: 'spring' }}
      whileTap={hasMotion && { scale: 0.95 }}
      whileHover={hasMotion && { scale: 0.98 }}
      whileFocus={hasMotion && { scale: 1.1 }}
      ref={ripple}
      // onKeyDown={event}
      onPointerDown={event}
      onKeyDown={(e: { key: string }) => {
        if (e.key === 'Enter') {
          const middleX = (ripple.current?.getBoundingClientRect().width ?? 100) / 2
          const middleY = (ripple.current?.getBoundingClientRect().height ?? 80) / 2
          event({
            clientX: middleX,
            clientY: middleY,
          })
        }
      }}
      onKeyPress={event}
      disabled={loading || disabled}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        outline && theme.outline.outlineBase,
        outline && theme.outline.color[color],
        !outline && theme.ring.base,
        !outline && theme.ring.colors[color],
        !outline && theme.color[color],
        theme.rounded[rounded],
        fullSized && theme.fullSized,
        theme.inner.base,
        theme.outline[outline ? 'on' : 'off'],
        theme.size[size],
        outline && !theme.outline.color[color] && theme.inner.outline,
        loading && theme.loading,
        loading && theme.inner.loadingPadding[size],
        theme.inner.position[positionInGroup],
        innerClassname,
        className,
      )}
      {...theirProps}
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
    </MotionButtonBase>
  )
}
