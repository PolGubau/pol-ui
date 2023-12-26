import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { IBoolean, Colors } from '../PoluiProvider'
import { ColorsEnum, RoundedSizesEnum, SizesEnum } from '../PoluiProvider/enums'
import type { MainSizes, RoundedSizes } from '../PoluiProvider/PoluiTheme'

export interface BadgeTheme {
  root: BadgeRootTheme
  icon: BadgeIconTheme
}

export interface BadgeRootTheme {
  base: string
  color: Colors
  rounded: RoundedSizes
  href: string
  size: BadgeSizes
}

export interface BadgeIconTheme extends IBoolean {
  size: BadgeSizes
}

export interface BadgeSizes extends MainSizes {
  [key: string]: string
}

export interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'> {
  color?: keyof Colors
  href?: string
  rounded?: keyof RoundedSizes
  icon?: FC<ComponentProps<'svg'>>
  size?: keyof BadgeSizes
  theme?: DeepPartial<BadgeTheme>
}

/**
 * @name Badge
 * @abstract A component for displaying small texts or number as information in other components (Buttons, Avatars...)
 */
export const Badge: FC<BadgeProps> = ({
  children,
  color = ColorsEnum.info,
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
