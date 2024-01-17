import type { ComponentProps, FC, KeyboardEvent } from 'react'
import { useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { IBoolean, Colors } from '../PoluiProvider'
import type { TextInputSizes } from '../TextInput'
import { ColorsEnum, MainSizesEnum } from '../PoluiProvider/enums'
import { MainSizes, MainSizesElastic } from '../PoluiProvider/PoluiTheme'
import { SwitchTheme } from './theme'

export type SwitchProps = Omit<ComponentProps<'button'>, 'onChange'> & {
  checked: boolean
  color?: keyof Colors
  size?: keyof MainSizesElastic
  label?: string
  onChange: (checked: boolean) => void
  theme?: DeepPartial<SwitchTheme>
}

export const Switch: FC<SwitchProps> = ({
  checked,
  className,
  color = ColorsEnum.secondary,
  size = MainSizesEnum.md,
  disabled,
  label,
  name,
  onChange,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId()
  const theme = mergeDeep(getTheme().switch, customTheme)

  const toggle = (): void => onChange(!checked)

  const handleClick = (): void => {
    toggle()
  }

  const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (event.code == 'Enter') {
      event.preventDefault()
    }
  }

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
          data-testid="ui-switch-toggle"
          className={twMerge(
            theme.toggle.base,
            theme.toggle.checked[checked ? 'on' : 'off'],
            checked && theme.toggle.checked.color[color],
            theme.toggle.sizes[size],
          )}
        />
        {label?.length ? (
          <span data-testid="ui-toggleswitch-label" id={`${id}-ui-toggleswitch-label`} className={theme.root.label}>
            {label}
          </span>
        ) : null}
      </button>
    </>
  )
}

Switch.displayName = 'ToggleSwitch'
