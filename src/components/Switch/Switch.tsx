import type { ComponentProps, FC, KeyboardEvent } from 'react'
import { useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { ColorsEnum, MainSizesEnum } from '../PoluiProvider/enums'
import { MainSizesElastic } from '../PoluiProvider/PoluiTheme'
import { SwitchTheme } from './theme'
import { motion } from 'framer-motion'
import { Label } from '../Label'
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

  const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (event.code == 'Space' || event.code == 'Enter') {
      event.preventDefault()
      toggle()
    }
    if (event.code == 'ArrowLeft') {
      event.preventDefault()
      onChange(false)
    }
    if (event.code == 'ArrowRight') {
      event.preventDefault()
      onChange(true)
    }
  }
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  return (
    <>
      {name && checked ? (
        <input checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only" />
      ) : null}
      <button
        aria-checked={checked}
        aria-labelledby={`${id}-switch-label`}
        disabled={disabled}
        id={`${id}-ui-switch`}
        onClick={toggle}
        onKeyDown={handleOnKeyDown}
        role="switch"
        tabIndex={0}
        type="button"
        className={twMerge(theme.root.base, theme.root.active[disabled ? 'off' : 'on'], className)}
        {...props}
      >
        <motion.div
          data-testid="ui-switch-toggle"
          className={twMerge(
            theme.toggle.base,
            theme.toggle.checked[checked ? 'on' : 'off'],
            theme.toggle.color[color],
            theme.toggle.sizes[size],
          )}
        >
          <motion.div layout transition={spring} className={twMerge(theme.toggle.handler.base)} />
        </motion.div>

        {label?.length ? (
          <Label data-testid="switch-label" id={`${id}-switch-label`} className={theme.root.label} disabled={disabled}>
            {label}
          </Label>
        ) : null}
      </button>
    </>
  )
}

Switch.displayName = 'Switch'
