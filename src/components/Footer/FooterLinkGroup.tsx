import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FooterLinkTheme } from './FooterLink';

export interface FooterLinkGroupTheme {
  base: string;
  link: FooterLinkTheme;
  col: string;
}

export interface FooterLinkGroupProps extends ComponentProps<'ul'> {
  col?: boolean;
  theme?: DeepPartial<FooterLinkGroupTheme>;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink, customTheme);

  return (
    <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
};
