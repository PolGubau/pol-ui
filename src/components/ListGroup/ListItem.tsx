'use client'

import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial } from '../../types/types'
import type { ListGroupItemTheme } from './theme'
import { useRipple } from '../../hooks'
import { colorToTailwind } from '../../helpers'
import { ColorsEnum } from '../../types'

export interface ListGroupItemProps extends PropsWithChildren {
  active?: boolean
  disabled?: boolean
  color?: Colors
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  onClick?: () => void
  theme?: DeepPartial<ListGroupItemTheme>
}

export const ListItem: FC<
  ListGroupItemProps & Omit<ComponentProps<'a'>, 'color'> & Omit<ComponentProps<'button'>, 'color'>
> = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  disabled,
  color,
  ...props
}) => {
  const theme = mergeDeep(getTheme().listGroup.item, customTheme)

  const isLink = typeof href !== 'undefined'
  const Component = isLink ? 'a' : 'button'
  const [ripple, event] = useRipple({
    opacity: 0.2,
    className: colorToTailwind(color ?? ColorsEnum.secondary),
  })

  return (
    <li className={twMerge(theme.base, className)}>
      <Component
        href={href}
        onPointerDown={event}
        ref={ripple}
        onClick={onClick}
        type={isLink ? undefined : 'button'}
        disabled={disabled}
        className={twMerge(
          theme.link.active[isActive ? 'on' : 'off'],
          theme.link.disabled[disabled ? 'on' : 'off'],
          theme.link.base,
          theme.link.href[isLink ? 'on' : 'off'],
        )}
        {...props}
      >
        {Icon && <Icon aria-hidden data-testid="ui-list-group-item-icon" className={theme.link.icon} />}
        {children}
      </Component>
    </li>
  )
}
