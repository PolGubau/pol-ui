import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { StateColors } from '../..';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { ListItem } from './ListItem';

export interface ListTheme {
  root: ListRootTheme;
}

export interface ListRootTheme {
  base: string;
  ordered: {
    on: string;
    off: string;
  };
  unstyled: string;
  nested: string;
}

export interface ListColors extends StateColors {
  [key: string]: string;
  default: string;
}

export interface ListProps extends PropsWithChildren<ComponentProps<'ul'> & ComponentProps<'ol'>> {
  theme?: DeepPartial<ListTheme>;
  ordered?: boolean;
  unstyled?: boolean;
  nested?: boolean;
}

const ListComponent: FC<ListProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().list, customTheme);
  const Component = props.ordered ? 'ol' : 'ul';

  return (
    <Component
      className={twMerge(
        theme.root.ordered[props.ordered ? 'on' : 'off'],
        props.unstyled && theme.root.unstyled,
        props.nested && theme.root.nested,
        theme.root.base,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

ListComponent.displayName = 'List';
ListItem.displayName = 'List.Item';

export const List = Object.assign(ListComponent, { Item: ListItem });
