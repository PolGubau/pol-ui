import type { ComponentProps, FC, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial, MainSizes, Positions } from '../../types/types'
import { AvatarGroup } from './AvatarGroup'
import { AvatarGroupCounter } from './AvatarGroupCounter'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import type { AvatarStatus } from './AvatarTypes'
import type { AvatarTheme } from './theme'

export interface AvatarImageProps {
  alt?: string
  className: string
  'data-testid': string
}

export interface AvatarProps extends Omit<ComponentProps<'div'>, 'color'> {
  alt?: string
  bordered?: boolean
  img?: string | ((props: AvatarImageProps) => ReactElement)
  color?: Colors
  rounded?: boolean
  size?: MainSizes
  stacked?: boolean
  status?: keyof AvatarStatus
  statusPosition?: keyof Positions
  placeholderInitials?: string
  theme?: DeepPartial<AvatarTheme>
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  className,
  color = ColorsEnum.primary,
  img,
  placeholderInitials = '',
  rounded = true,
  size = MainSizesEnum.md,
  stacked = false,
  status,
  statusPosition = 'top-left',
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar, customTheme)

  const imgClassName = twMerge(
    theme.root.img.base,
    bordered && theme.root.bordered,
    bordered && theme.root.color[color],
    rounded && theme.root.rounded,
    stacked && theme.root.stacked,
    theme.root.img.on,
    theme.root.size[size],
  )

  const imgProps = {
    className: twMerge(imgClassName, theme.root.img.on),
    'data-testid': 'ui-avatar-img',
  }
  return (
    <div className={twMerge(theme.root.base, className)} data-testid="ui-avatar" {...props}>
      <div className="relative">
        {img ? (
          typeof img === 'string' ? (
            <img alt={alt} src={img} {...imgProps} />
          ) : (
            img({ alt, ...imgProps })
          )
        ) : placeholderInitials ? (
          <div
            className={twMerge(
              theme.root.img.off,
              theme.root.initials.base,
              stacked && theme.root.stacked,
              bordered && theme.root.bordered,
              bordered && theme.root.color[color],
              theme.root.size[size],
              rounded && theme.root.rounded,
            )}
            data-testid="ui-avatar-initials-placeholder"
          >
            <span className={twMerge(theme.root.initials.text)} data-testid="ui-avatar-initials-placeholder-text">
              {placeholderInitials}
            </span>
          </div>
        ) : (
          <div className={twMerge(imgClassName, theme.root.img.off)} data-testid="ui-avatar-img">
            <svg
              className={theme.root.img.placeholder}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {status && (
          <span
            data-testid="ui-avatar-status"
            className={twMerge(
              theme.root.status.base,
              theme.root.status[status as keyof AvatarStatus],
              theme.root.statusPosition[statusPosition],
            )}
          />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}

AvatarComponent.displayName = 'Avatar'

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
})
