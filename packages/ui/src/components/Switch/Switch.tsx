import type { ComponentProps, FC, KeyboardEvent } from 'react'
import { useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial, MainSizes } from '../../types/types'
import { ColorsEnum, MainSizesEnum } from '../../types/enums'
import type { SwitchTheme } from './theme'
import { motion } from 'framer-motion'
import { Label } from '../Label'

export type SwitchProps = Omit<ComponentProps<'button'>, 'onChange'> & {
  checked: boolean
  color?: Colors
  size?: MainSizes
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

  const isSizeAMainSize = Object.keys(theme.toggle.sizes).includes(size as string)
  if (!isSizeAMainSize) throw new Error(`Size ${size} is not a valid size - ${Object.keys(MainSizesEnum)}`)

  return (
    <>
      {name && checked ? (
        <input checked={checked} hidden name={name} readOnly type="checkbox" className="sr-only" />
      ) : null}
      <button
        data-testid="ui-switch"
        aria-checked={checked}
        aria-labelledby={`${id}-switch-label`}
        disabled={disabled}
        aria-label={label}
        id={`${id}-ui-switch`}
        name={`${id}-ui-switch`}
        onClick={toggle}
        onKeyDown={handleOnKeyDown}
        role="switch"
        title={label}
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
            theme.toggle.sizes[size as keyof typeof theme.toggle.sizes],
          )}
        >
          <motion.div
            layout
            transition={spring}
            className={twMerge(
              theme.toggle.handler.base,
              theme.toggle.handler.sizes[size as keyof typeof theme.toggle.handler.sizes],
            )}
          />
        </motion.div>

        {label?.length ? (
          <Label
            htmlFor={`${id}-ui-switch`}
            data-testid="ui-switch-label"
            id={`${id}-ui-switch-label`}
            className={theme.root.label}
            disabled={disabled}
          >
            {label}
          </Label>
        ) : null}
      </button>
    </>
  )
}

Switch.displayName = 'Switch'
