import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends ComponentProps<'h2'> {
  as?: ElementType;
  theme?: DeepPartial<FooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = 'h2',
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.title, customTheme);

  return (
    <Component data-testid="ui-footer-title" className={twMerge(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
