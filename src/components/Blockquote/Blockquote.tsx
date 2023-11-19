import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface BlockquoteTheme {
  root: BlockquoteRootTheme;
}

export interface BlockquoteRootTheme {
  base: string;
}

export interface BlockquoteProps extends ComponentProps<'blockquote'> {
  theme?: DeepPartial<BlockquoteTheme>;
}

export const Blockquote: FC<BlockquoteProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().blockquote, customTheme);

  return (
    <blockquote className={twMerge(theme.root.base, className)} data-testid="ui-blockquote" {...props}>
      {children}
    </blockquote>
  );
};

Blockquote.displayName = 'Blockquote';
