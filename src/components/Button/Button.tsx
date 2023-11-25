'use client';

import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import genericForwardRef from '../../helpers/generic-forward-ref';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean, Colors } from '../PoluiProvider';
import { Spinner } from '../Spinner';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import type { PositionInButtonGroup } from './ButtonGroup/ButtonGroup';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import type { MainSizes, RoundedSizes } from '../PoluiProvider/PoluiTheme';
import { MainSizesEnum, RoundedSizesEnum } from '../PoluiProvider/enums';
import { useRipple } from '../../hooks';

export interface ButtonTheme {
  base: string;
  fullSized: string;
  color: Colors;
  disabled: string;
  isProcessing: string;
  spinnerSlot: string;
  spinnerLeftPosition: ButtonSizes;
  inner: ButtonInnerTheme;
  label: string;
  outline: ButtonOutlineTheme;
  rounded: RoundedSizes;
  size: ButtonSizes;
}

export interface ButtonInnerTheme {
  base: string;
  position: PositionInButtonGroup;
  outline: string;
  isProcessingPadding: ButtonSizes;
}

export interface ButtonOutlineTheme extends IBoolean {
  outlineBase: string;
  color: Colors;
}

export interface ButtonColors
  extends Pick<Colors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'> {
  [key: string]: string;
}

export interface ButtonSizes extends MainSizes {
  [key: string]: string;
}

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T | null;
  href?: string;
  color?: keyof Colors;
  fullSized?: boolean;
  target?: string;
  isProcessing?: boolean;
  processingLabel?: string;
  processingSpinner?: ReactNode;
  label?: ReactNode;
  outline?: boolean;
  rounded?: keyof RoundedSizes;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
  theme?: DeepPartial<ButtonTheme>;
  innerClassname?: string;
} & ComponentPropsWithoutRef<T>;

const ButtonComponentFn = <T extends ElementType = 'button'>({
  children,
  className,
  color = 'primary',
  disabled,
  fullSized,
  isProcessing = false,
  processingLabel = 'Loading...',
  processingSpinner,
  label,
  outline = false,
  rounded = RoundedSizesEnum.md,
  positionInGroup = 'none',
  size = MainSizesEnum.md,
  theme: customTheme = {},
  innerClassname = '',
  ...props
}: ButtonProps<T>) => {
  const { buttonGroup: groupTheme, button: buttonTheme } = getTheme();
  const theme = mergeDeep(buttonTheme, customTheme);

  const theirProps = props as ButtonBaseProps<T>;

  // const ripples = useRipple(ref as RefObject<HTMLElement>);
  const [ripple, event] = useRipple({
    disabled,
  });
  return (
    <ButtonBase
      ref={ripple}
      onPointerUp={event}
      disabled={disabled}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        outline && theme.outline.outlineBase,
        outline ? theme.outline.color[color] : theme.color[color],
        theme.rounded[rounded],
        fullSized && theme.fullSized,
        groupTheme.position[positionInGroup],
        className,
      )}
      {...theirProps}
    >
      <span
        className={twMerge(
          theme.inner.base,
          theme.outline[outline ? 'on' : 'off'],
          theme.size[size],
          outline && !theme.outline.color[color] && theme.inner.outline,
          isProcessing && theme.isProcessing,
          isProcessing && theme.inner.isProcessingPadding[size],
          theme.inner.position[positionInGroup],
          innerClassname,
        )}
      >
        {isProcessing && (
          <span className={twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size])}>
            {processingSpinner ?? <Spinner size={size} />}
          </span>
        )}
        {typeof children !== 'undefined' ? (
          children
        ) : (
          <span data-testid="ui-button-label" className={twMerge(theme.label)}>
            {isProcessing ? processingLabel : label}
          </span>
        )}
      </span>
    </ButtonBase>
  );
};

const ButtonComponent = genericForwardRef(ButtonComponentFn);

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
