import type { ComponentProps, FC, KeyboardEvent } from 'react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { IBoolean, Colors } from '../PoluiProvider';
import type { TextInputSizes } from '../TextInput';

export interface ToggleSwitchTheme {
  root: ToggleSwitchRootTheme;
  toggle: ToggleSwitchToggleTheme;
}

export interface ToggleSwitchRootTheme {
  base: string;
  active: IBoolean;
  label: string;
}

export interface ToggleSwitchToggleTheme {
  base: string;
  sizes: TextInputSizes;
  checked: IBoolean & {
    color: Colors;
  };
}

export type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange'> & {
  checked: boolean;
  color?: keyof Colors;
  sizing?: keyof TextInputSizes;
  label?: string;
  onChange: (checked: boolean) => void;
  theme?: DeepPartial<ToggleSwitchTheme>;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  className,
  color = 'blue',
  sizing = 'md',
  disabled,
  label,
  name,
  onChange,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const theme = mergeDeep(getTheme().toggleSwitch, customTheme);

  const toggle = (): void => onChange(!checked);

  const handleClick = (): void => {
    toggle();
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (event.code == 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <>
      {name && checked ? (
        <input checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only" />
      ) : null}
      <button
        aria-checked={checked}
        aria-labelledby={`${id}-ui-toggleswitch-label`}
        disabled={disabled}
        id={`${id}-ui-toggleswitch`}
        onClick={handleClick}
        onKeyDown={handleOnKeyDown}
        role="switch"
        tabIndex={0}
        type="button"
        className={twMerge(theme.root.base, theme.root.active[disabled ? 'off' : 'on'], className)}
        {...props}
      >
        <div
          data-testid="ui-toggleswitch-toggle"
          className={twMerge(
            theme.toggle.base,
            theme.toggle.checked[checked ? 'on' : 'off'],
            checked && theme.toggle.checked.color[color],
            theme.toggle.sizes[sizing],
          )}
        />
        {label?.length ? (
          <span data-testid="ui-toggleswitch-label" id={`${id}-ui-toggleswitch-label`} className={theme.root.label}>
            {label}
          </span>
        ) : null}
      </button>
    </>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
