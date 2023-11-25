import type { ComponentProps, FC, ReactElement } from 'react';
import { Children, cloneElement, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../../helpers/merge-deep';
import { getTheme } from '../../../theme-store';
import type { DeepPartial } from '../../../types';
import type { ButtonProps } from '..';
import React from 'react';

export interface ButtonGroupTheme {
  base: string;
  position: PositionInButtonGroup;
}

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

export interface ButtonGroupProps extends ComponentProps<'div'>, Pick<ButtonProps, 'outline'> {
  theme?: DeepPartial<ButtonGroupTheme>;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  outline,
  theme: customTheme = {},
  ...props
}: ButtonGroupProps) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          outline,
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children, outline],
  );
  const theme = mergeDeep(getTheme().buttonGroup, customTheme);

  return (
    <div className={twMerge(theme.base, className)} role="group" {...props}>
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
