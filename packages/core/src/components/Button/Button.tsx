'use client';
import { PolymorphicComponentProp, PolymorphicRef } from '../../types';
import { ButtonComponent, ButtonProps } from './Button.types';
import { ElementType, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner, useComponentTheme, useComponentVariant, usePropId } from '../..';
import { useDropdownContext } from '../../../dist/components/Dropdown/Dropdown.context';
import { useInputGroupContext } from '../../../dist/components/InputGroup/InputGroup.context';
import { ChevronDownIcon } from '../../../dist/icons/ChevronDown';

const defaultProps: Partial<ButtonProps> = {
  animation: 'none',
  color: 'dark',
  disabled: false,
  icon: false,
  loading: false,
  radius: 'md',
  shadow: 'none',
  shadowColor: 'none',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

const Button: ButtonComponent = forwardRef(
  <C extends ElementType = 'button'>(
    props: PolymorphicComponentProp<C, ButtonProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const variantProps = useComponentVariant('Button', props.variant) as Partial<ButtonProps>;
    const theme = useComponentTheme('Button');
    const {
      animation,
      as,
      children,
      className = '',
      color,
      disabled,
      icon,
      loading,
      radius,
      shadow,
      shadowColor,
      size,
      tone,
      variant,
      withRing,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useInputGroupContext(),
      ...variantProps,
      ...props,
    };
    const { open, withChevron, chevronRotation } = {
      ...useDropdownContext(),
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          animation,
          className,
          color,
          disabled,
          icon,
          loading,
          radius,
          shadow,
          shadowColor,
          size,
          tone,
          withRing,
        })
      );
    }, [
      animation,
      className,
      color,
      disabled,
      icon,
      loading,
      radius,
      shadow,
      shadowColor,
      size,
      theme,
      tone,
      withRing,
    ]);
    const chevronClasses = withChevron ? theme.chevron({ open, size, chevronRotation }) : '';
    const spinnerClasses = loading ? theme.spinner({ size }) : '';

    const Component = as || 'button';
    const id = usePropId(props.id);
    const type = props.type || Component === 'button' ? 'button' : undefined;

    return (
      <Component
        id={id}
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...additionalProps}
      >
        {loading && <Spinner className={spinnerClasses} />}
        {children}
        {withChevron && <ChevronDownIcon className={chevronClasses} />}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
