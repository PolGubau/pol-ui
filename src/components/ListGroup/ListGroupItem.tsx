import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial, IBoolean } from '../../types/types'

export interface ListGroupItemTheme {
  base: string
  link: {
    base: string
    active: IBoolean
    disabled: IBoolean
    href: IBoolean
    icon: string
  }
}

export interface ListGroupItemProps extends PropsWithChildren {
  active?: boolean
  disabled?: boolean
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  onClick?: () => void
  theme?: DeepPartial<ListGroupItemTheme>
}

export const ListGroupItem: FC<ListGroupItemProps & ComponentProps<'a'> & ComponentProps<'button'>> = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  disabled,
  ...props
}) => {
  const theme = mergeDeep(getTheme().listGroup.item, customTheme)

  const isLink = typeof href !== 'undefined'
  const Component = isLink ? 'a' : 'button'

  return (
    <li className={twMerge(theme.base, className)}>
      <Component
        href={href}
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
