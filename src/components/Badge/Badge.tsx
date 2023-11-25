import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean, Colors, Sizes } from '../PoluiProvider';

export interface BadgeTheme {
  root: BadgeRootTheme;
  icon: BadgeIconTheme;
}

export interface BadgeRootTheme {
  base: string;
  color: Colors;
  href: string;
  size: BadgeSizes;
}

export interface BadgeIconTheme extends IBoolean {
  size: BadgeSizes;
}

export interface BadgeSizes extends Pick<Sizes, 'xs' | 'sm'> {
  [key: string]: string;
}

export interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'> {
  color?: keyof Colors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof BadgeSizes;
  theme?: DeepPartial<BadgeTheme>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'xs',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().badge, customTheme);

  const Content: FC = () => (
    <span
      className={twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.icon[Icon ? 'on' : 'off'],
        className,
      )}
      data-testid="ui-badge"
      {...props}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="ui-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};

Badge.displayName = 'Badge';
