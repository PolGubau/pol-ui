import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { FooterBrandTheme } from './FooterBrand'
import { FooterBrand } from './FooterBrand'
import { Copyright } from '../Copyright/Copyright'
import type { FooterDividerTheme } from './FooterDivider'
import { FooterDivider } from './FooterDivider'
import type { FooterIconTheme } from './FooterIcon'
import { FooterIcon } from './FooterIcon'
import { FooterLink } from './FooterLink'
import type { FooterLinkGroupTheme } from './FooterLinkGroup'
import { FooterLinkGroup } from './FooterLinkGroup'
import type { FooterTitleTheme } from './FooterTitle'
import { FooterTitle } from './FooterTitle'
import type { CopyrightTheme } from '../Copyright'

export interface FooterTheme {
  brand: FooterBrandTheme
  copyright: CopyrightTheme
  divider: FooterDividerTheme
  groupLink: FooterLinkGroupTheme
  icon: FooterIconTheme
  root: FooterRootTheme
  title: FooterTitleTheme
}

export interface FooterRootTheme {
  base: string
  bgDark: string
  container: string
}

export interface FooterProps extends ComponentProps<'footer'> {
  bgDark?: boolean
  container?: boolean
  theme?: DeepPartial<FooterTheme>
}

export const FooterComponent: FC<FooterProps> = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer, customTheme)

  return (
    <footer
      data-testid="ui-footer"
      className={twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className)}
      {...props}
    >
      {children}
    </footer>
  )
}

FooterComponent.displayName = 'Footer'
Copyright.displayName = 'Footer.Copyright'
FooterLink.displayName = 'Footer.Link'
FooterBrand.displayName = 'Footer.Brand'
FooterLinkGroup.displayName = 'Footer.LinkGroup'
FooterIcon.displayName = 'Footer.Icon'
FooterTitle.displayName = 'Footer.Title'
FooterDivider.displayName = 'Footer.Divider'

export const Footer = Object.assign(FooterComponent, {
  Copyright: Copyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider,
})
