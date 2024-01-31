import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'

export interface FooterDividerTheme {
  base: string
}

export interface FooterDividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<FooterDividerTheme>
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().footer.divider, customTheme)

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />
}
