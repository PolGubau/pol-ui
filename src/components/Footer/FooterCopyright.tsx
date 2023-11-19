import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FooterCopyrightTheme {
  base: string;
  href: string;
  span: string;
}

export interface CopyrightProps extends ComponentProps<'div'> {
  by: string;
  href?: string;
  theme?: DeepPartial<FooterCopyrightTheme>;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.copyright, customTheme);

  return (
    <div data-testid="ui-footer-copyright" className={twMerge(theme.base, className)} {...props}>
      © {year}
      {href ? (
        <a href={href} className={theme.href}>
          {by}
        </a>
      ) : (
        <span data-testid="ui-footer-copyright-span" className={theme.span}>
          {by}
        </span>
      )}
    </div>
  );
};
