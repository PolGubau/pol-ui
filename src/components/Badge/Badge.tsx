import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial, MainSizes, RoundedSizes } from '../../types/types'
import { ColorsEnum, RoundedSizesEnum, SizesEnum } from '../../types/enums'
import type { BadgeTheme } from './theme'

export interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'> {
  color?: Colors
  href?: string
  rounded?: RoundedSizes
  icon?: FC<ComponentProps<'svg'>>
  size?: MainSizes
  theme?: DeepPartial<BadgeTheme>
}

/**
 * @name Badge
 * @abstract A component for displaying small texts or number as information in other components (Buttons, Avatars...)
 */
export const Badge: FC<BadgeProps> = ({
  children,
  color = ColorsEnum.primary,
  href,
  icon: Icon,
  size = SizesEnum.xs,
  className,
  rounded = RoundedSizesEnum.full,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().badge, customTheme)

  const Content: FC = () => (
    <span
      className={twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.root.rounded[rounded],
        theme.icon[Icon ? 'on' : 'off'],
        className,
      )}
      data-testid="ui-badge"
      {...props}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="ui-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  )

  // if has href prop, surround the entire component with an anchor.
  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  )
}

// Title of the component: Badge
Badge.displayName = 'Badge'
