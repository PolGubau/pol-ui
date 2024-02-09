import type { ComponentProps, FC, ReactNode } from 'react'
import { HiX } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import { ColorsEnum, RoundedSizesEnum } from '../../types/enums'
import type { AlertTheme } from './theme'
import { IconButton } from '../IconButton'
import type { Colors, DeepPartial, RoundedSizes } from '../../types/types'

export interface AlertProps extends Omit<ComponentProps<'div'>, 'color'> {
  additionalContent?: ReactNode
  color?: Colors
  icon?: FC<ComponentProps<'svg'>>
  onDismiss?: boolean | (() => void)
  rounded?: RoundedSizes
  theme?: DeepPartial<AlertTheme>
  withBorderAccent?: boolean
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  className,
  color = ColorsEnum.secondary,
  icon: Icon,
  onDismiss = false,
  rounded = RoundedSizesEnum.md,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme: AlertTheme = mergeDeep(getTheme().alert, customTheme)

  return (
    <div
      className={twMerge(
        theme.base,
        theme.color[color],
        theme.rounded[rounded],
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
          <IconButton
            label="Dismiss"
            title="Dismiss"
            data-testid="ui-alert-dismiss"
            type="button"
            onClick={onDismiss}
            color={color}
          >
            <HiX aria-hidden title="Dismiss" />
          </IconButton>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  )
}

// Component name = Alert
Alert.displayName = 'Alert'
