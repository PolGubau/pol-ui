import type { ComponentProps, FC } from 'react'
import { forwardRef } from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../../helpers/merge-deep'
import { getTheme } from '../../../theme-store'
import type { DeepPartial, IBoolean } from '../../../types/types'

export interface BreadcrumbItemTheme {
  base: string
  chevron: string
  href: IBoolean
  icon: string
}

export interface BreadcrumbItemProps extends Omit<ComponentProps<'li'>, 'ref'> {
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  theme?: DeepPartial<BreadcrumbItemTheme>
}

/**
 * @name Breadcrumb.Item
 * @description A Breadcrumb.Item component that can be used to display content in a breadcrumb-like style.
 * @param {React.ReactNode} props.children The content of the breadcrumb item.
 * @param {string} props.className Custom class name for the breadcrumb item.
 * @param {string} props.href, If provided, the breadcrumb item will be an anchor link.
 * @param {FC<ComponentProps<'svg'>>} props.icon, If provided, the breadcrumb item will have an icon.
 * @param {DeepPartial<BreadcrumbItemTheme>} props.theme, To override default theme for the breadcrumb item.
 * @returns {React.ReactNode} A Breadcrumb.Item component.
 * @example
 * <Breadcrumb>
 *  <Breadcrumb.Item href="#" icon={HiHome}>
 *    Home
 *  </Breadcrumb.Item>
 *  <Breadcrumb.Item href="#">
 *      Authors
 *  </Breadcrumb.Item>
 *  <Breadcrumb.Item>Pol Gubau Amores</Breadcrumb.Item>
 * </Breadcrumb>
 *
 * @author Pol Gubau Amores
 */
export const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isALink = typeof href !== 'undefined'
    const Component = isALink ? 'a' : 'span'

    const theme = mergeDeep(getTheme().breadcrumb.item, customTheme)

    return (
      <li className={twMerge(theme.base, className)} {...props}>
        <HiOutlineChevronRight aria-hidden className={theme.chevron} data-testid="ui-breadcrumb-separator" />
        <Component
          ref={ref as never}
          className={theme.href[isALink ? 'on' : 'off']}
          data-testid="ui-breadcrumb-item"
          href={href}
        >
          {Icon && <Icon aria-hidden className={theme.icon} />}
          {children}
        </Component>
      </li>
    )
  },
)

BreadcrumbItem.displayName = 'Breadcrumb.Item'
