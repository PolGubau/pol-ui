import type { ComponentProps, FC, ReactNode } from 'react'
import { HiX } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { ColorsEnum } from '../PoluiProvider/enums'
import { AlertTheme } from './theme'
import { IconButton } from '../IconButton'
import { ColorsType } from '../PoluiProvider/PoluiTheme'

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
  onDismiss = false,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme: AlertTheme = mergeDeep(getTheme().alert, customTheme)

  const colorChosen = color as keyof ColorsType

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
          <IconButton
            label="Dismiss"
            title="Dismiss"
            data-testid="ui-alert-dismiss"
            type="button"
            onClick={onDismiss}
            color={colorChosen}
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
