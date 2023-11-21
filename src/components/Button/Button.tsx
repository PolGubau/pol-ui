import type { ComponentPropsWithoutRef, ElementType, ForwardedRef } from 'react';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import genericForwardRef from '../../helpers/generic-forward-ref';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean, Colors } from '../PoluiProvider';
import { Spinner } from '../Spinner';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import type { PositionInButtonGroup } from './ButtonGroup';
import { ButtonGroup } from './ButtonGroup';
import type { MainSizes, RoundedSizes } from '../PoluiProvider/PoluiTheme';
import { MainSizesEnum, RoundedSizesEnum } from '../PoluiProvider/enums';

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
  color: ButtonOutlineColors;
}

export interface ButtonColors
  extends Pick<Colors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'> {
  [key: string]: string;
}

export interface ButtonOutlineColors extends Pick<Colors, 'gray'> {
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
} & ComponentPropsWithoutRef<T>;

const ButtonComponentFn = <T extends ElementType = 'button'>(
  {
    children,
    className,
    color = 'info',
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
    ...props
  }: ButtonProps<T>,
  ref: ForwardedRef<T>,
) => {
  const { buttonGroup: groupTheme, button: buttonTheme } = getTheme();
  const theme = mergeDeep(buttonTheme, customTheme);

  const theirProps = props as ButtonBaseProps<T>;

  return (
    <ButtonBase
      ref={ref}
      disabled={disabled}
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        outline && (theme.outline.color[color] ?? theme.outline.color.default),
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

ButtonComponentFn.displayName = 'Button';

const ButtonComponent = genericForwardRef(ButtonComponentFn);

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
