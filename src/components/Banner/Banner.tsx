import type { ComponentProps, FC } from 'react'
import { CloseButton } from './CloseBannerButton'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import { IBoolean } from '../PoluiProvider'
import type { DeepPartial } from '../../types'

interface BannerRootTheme {
  base: string
  bordered: IBoolean
}

export interface BannerTheme {
  root: BannerRootTheme
}
export interface BannerComponentProps extends ComponentProps<'header'> {
  className: string
  bordered: boolean
  theme?: DeepPartial<BannerTheme>
}

const BannerComponent: FC<BannerComponentProps> = ({
  children,
  bordered = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().banner, customTheme)

  return (
    <header
      data-testid="pol-ui-banner"
      role="banner"
      tabIndex={-1}
      className={twMerge(theme.root.base, theme.root.bordered[bordered ? 'on' : 'off'], className)}
      {...props}
    >
      {children}
    </header>
  )
}

BannerComponent.displayName = 'Banner'

export const Banner = Object.assign(BannerComponent, {
  CloseButton: CloseButton,
})
