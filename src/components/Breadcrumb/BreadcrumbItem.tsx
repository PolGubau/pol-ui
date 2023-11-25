import type { ComponentProps, FC } from 'react';
import { forwardRef } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';

export interface BreadcrumbItemTheme {
  base: string;
  chevron: string;
  href: IBoolean;
  icon: string;
}

export interface BreadcrumbItemProps extends Omit<ComponentProps<'li'>, 'ref'> {
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<BreadcrumbItemTheme>;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isLink = typeof href !== 'undefined';
    const Component = isLink ? 'a' : 'span';

    const theme = mergeDeep(getTheme().breadcrumb.item, customTheme);

    return (
      <li className={twMerge(theme.base, className)} {...props}>
        <HiOutlineChevronRight aria-hidden className={theme.chevron} data-testid="ui-breadcrumb-separator" />
        <Component
          ref={ref as never}
          className={theme.href[isLink ? 'on' : 'off']}
          data-testid="ui-breadcrumb-item"
          href={href}
        >
          {Icon && <Icon aria-hidden className={theme.icon} />}
          {children}
        </Component>
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'Breadcrumb.Item';
