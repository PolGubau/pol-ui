"use client"

import {
  useId,
  useState,
  type ComponentProps,
  type FC,
  type KeyboardEvent,
} from "react"
import { motion } from "framer-motion"

import { cn } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import { ColorsEnum, MainSizesEnum } from "../../types/enums"
import type { Colors, DeepPartial, MainSizes } from "../../types/types"
import { Label } from "../Label"
import type { SwitchTheme } from "./theme"

export type SwitchProps = Omit<ComponentProps<"button">, "onChange"> & {
  checked?: boolean
  color?: Colors
  size?: MainSizes
  label?: string
  onChange?: (checked: boolean) => void
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

  const [value, setValue] = useState(checked)

  const set = (newValue = !value): void => {
    onChange?.(newValue)
    setValue(newValue)
  }

  const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (event.code == "Space" || event.code == "Enter") {
      event.preventDefault()
      set()
    }
    if (event.code == "ArrowLeft") {
      event.preventDefault()
      set(false)
    }
    if (event.code == "ArrowRight") {
      event.preventDefault()
      set(true)
    }
  }
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  }

  const isSizeAMainSize = Object.keys(theme.toggle.sizes).includes(
    size as string
  )
  if (!isSizeAMainSize)
    throw new Error(
      `Size ${size} is not a valid size - ${Object.keys(MainSizesEnum)}`
    )

  return (
    <>
      <input
        checked={value}
        onChange={() => setValue(!value)}
        hidden
        name={name}
        readOnly
        type="checkbox"
        className="sr-only"
      />
      <button
        data-testid="ui-switch"
        aria-checked={value}
        aria-labelledby={`${id}-switch-label`}
        disabled={disabled}
        aria-label={label}
        data-color={color}
        data-checked={value}
        id={`${id}-ui-switch`}
        name={`${id}-ui-switch`}
        onClick={() => set()}
        onKeyDown={handleOnKeyDown}
        role="switch"
        title={label}
        tabIndex={0}
        type="button"
        className={cn(
          theme.root.base,
          theme.root.active[disabled ? "off" : "on"],
          className
        )}
        {...props}
      >
        <motion.div
          data-checked={value}
          data-testid="ui-switch-toggle"
          className={cn(
            theme.toggle.base,
            theme.toggle.checked[value ? "on" : "off"],
            theme.toggle.color[color],
            theme.toggle.sizes[size as keyof typeof theme.toggle.sizes]
          )}
        >
          <motion.div
            data-checked={value}
            layout
            transition={spring}
            className={cn(theme.toggle.handler.base)}
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

Switch.displayName = "Switch"
