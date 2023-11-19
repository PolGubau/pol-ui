import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { StateColors } from '../PoluiProvider';

export interface LabelTheme {
  root: LabelRootTheme;
}

export interface LabelRootTheme {
  base: string;
  colors: LabelColors;
  disabled: string;
}

export interface LabelColors extends StateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends Omit<ComponentProps<'label'>, 'color'> {
  color?: keyof LabelColors;
  disabled?: boolean;
  theme?: DeepPartial<LabelTheme>;
  value?: string;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  color = 'default',
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().label, customTheme);

  return (
    <label
      className={twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className)}
      data-testid="ui-label"
      {...props}
    >
      {value ?? children ?? ''}
    </label>
  );
};

Label.displayName = 'Label';
