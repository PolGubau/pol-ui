import type { ComponentProps, FC, ReactNode } from 'react'
import { HiX } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { ColorsEnum } from '../PoluiProvider/enums'

export interface AlertTheme {
  base: string
  borderAccent: string
  closeButton: AlertCloseButtonTheme
  color: Colors
  icon: string
  rounded: string
  wrapper: string
}

export interface AlertCloseButtonTheme {
  base: AlertTheme['base']
  color: AlertTheme['color']
  icon: AlertTheme['icon']
}

export interface AlertProps extends Omit<ComponentProps<'div'>, 'color'> {
  additionalContent?: ReactNode
  color?: keyof Colors
  icon?: FC<ComponentProps<'svg'>>
  onDismiss?: boolean | (() => void)
  rounded?: boolean
  theme?: DeepPartial<AlertTheme>
  withBorderAccent?: boolean
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  className,
  color = ColorsEnum.info,
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme = mergeDeep(getTheme().alert, customTheme)

  return (
    <div
      className={twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className,
      )}
      role="alert"
      {...props}
    >
      <div className={theme.wrapper} data-testid="ui-alert-wrapper">
        {Icon && <Icon className={theme.icon} data-testid="ui-alert-icon" />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            aria-label="Dismiss"
            className={twMerge(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={onDismiss}
            type="button"
          >
            <HiX aria-hidden className={theme.closeButton.icon} />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  )
}

// Component name = Alert
Alert.displayName = 'Alert'
