import type { ComponentPropsWithoutRef, ElementType, ForwardedRef } from 'react';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import genericForwardRef from '../../helpers/generic-forward-ref';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean, Colors, GradientColors, GradientDuoToneColors, Sizes } from '../PoluiProvider';
import { Spinner } from '../Spinner';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import type { PositionInButtonGroup } from './ButtonGroup';
import { ButtonGroup } from './ButtonGroup';

export interface ButtonTheme {
  base: string;
  fullSized: string;
  color: Colors;
  disabled: string;
  isProcessing: string;
  spinnerSlot: string;
  spinnerLeftPosition: ButtonSizes;
  gradient: ButtonGradientColors;
  gradientDuoTone: ButtonGradientDuoToneColors;
  inner: ButtonInnerTheme;
  label: string;
  outline: ButtonOutlineTheme;
  pill: IBoolean;
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
  pill: IBoolean;
}

export interface ButtonColors
  extends Pick<Colors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'> {
  [key: string]: string;
}

export interface ButtonGradientColors extends GradientColors {
  [key: string]: string;
}

export interface ButtonGradientDuoToneColors extends GradientDuoToneColors {
  [key: string]: string;
}

export interface ButtonOutlineColors extends Pick<Colors, 'gray'> {
  [key: string]: string;
}

export interface ButtonSizes extends Pick<Sizes, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string;
}

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T | null;
  href?: string;
  color?: keyof Colors;
  fullSized?: boolean;
  gradientDuoTone?: keyof ButtonGradientDuoToneColors;
  gradientMonochrome?: keyof ButtonGradientColors;
  target?: string;
  isProcessing?: boolean;
  processingLabel?: string;
  processingSpinner?: ReactNode;
  label?: ReactNode;
  outline?: boolean;
  pill?: boolean;
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
    gradientDuoTone,
    gradientMonochrome,
    label,
    outline = false,
    pill = false,
    positionInGroup = 'none',
    size = 'md',
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
        !gradientDuoTone && !gradientMonochrome && theme.color[color],
        gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
        !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
        outline && (theme.outline.color[color] ?? theme.outline.color.default),
        theme.pill[pill ? 'on' : 'off'],
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
          theme.outline.pill[outline && pill ? 'on' : 'off'],
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
