import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { omit } from '../../helpers/omit';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean } from '../PoluiProvider';
import React from 'react';
export interface CardTheme {
  root: CardRootTheme;
  img: CardImageTheme;
}

export interface CardRootTheme {
  base: string;
  children: string;
  horizontal: IBoolean;
  href: string;
}

export interface CardImageTheme {
  base: string;
  horizontal: IBoolean;
}

interface CommonCardProps extends ComponentProps<'div'> {
  horizontal?: boolean;
  href?: string;
  /** Overwrites the theme. Will be merged with the context theme.
   * @default {}
   */
  theme?: DeepPartial<CardTheme>;
}

export type CardProps = (
  | { imgAlt?: string; imgSrc?: string; renderImage?: never }
  | {
      /** Allows to provide a custom render function for the image component. Useful in Next.JS and Gatsby. **Setting this will disable `imgSrc` and `imgAlt`**.
       */
      renderImage?: (theme: DeepPartial<CardTheme>, horizontal: boolean) => JSX.Element;
      imgAlt?: never;
      imgSrc?: never;
    }
) &
  CommonCardProps;

export const Card: FC<CardProps> = (props) => {
  const { children, className, horizontal, href, theme: customTheme = {} } = props;
  const Component = typeof href === 'undefined' ? 'div' : 'a';
  const theirProps = removeCustomProps(props);

  const theme = mergeDeep(getTheme().card, customTheme);

  return (
    <Component
      data-testid="ui-card"
      href={href}
      className={twMerge(
        theme.root.base,
        theme.root.horizontal[horizontal ? 'on' : 'off'],
        href && theme.root.href,
        className,
      )}
      {...theirProps}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text -- jsx-ally/alt-text gives a false positive here. Since we use our own Image component, we cannot provide an "alt" prop.*/}
      <Image {...props} />
      <div className={theme.root.children}>{children}</div>
    </Component>
  );
};

const Image: FC<CardProps> = ({ theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().card, customTheme);
  if (props.renderImage) {
    return props.renderImage(theme, props.horizontal ?? false);
  }
  if (props.imgSrc) {
    return (
      <img
        data-testid="ui-card-image"
        alt={props.imgAlt ?? ''}
        src={props.imgSrc}
        className={twMerge(theme.img.base, theme.img.horizontal[props.horizontal ? 'on' : 'off'])}
      />
    );
  }
  return null;
};

const removeCustomProps = omit([
  'renderImage',
  'imgSrc',
  'imgAlt',
  'children',
  'className',
  'horizontal',
  'href',
  'theme',
]);
