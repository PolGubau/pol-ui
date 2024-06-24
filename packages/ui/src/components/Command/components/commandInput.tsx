"use client"

import React, { type ComponentProps } from "react"
import { TbSearch } from "react-icons/tb"

import { cn, mergeDeep } from "../../../helpers"
import { getTheme } from "../../../theme-store"
import { SELECTORS } from "../Command"
import { useCommand, useStore } from "../contexts"
import { useCmdk } from "../hooks"
import type { CommandTheme } from "../theme"

export interface CommandInputProps
  extends Omit<ComponentProps<"input">, "value" | "onChange" | "type"> {
  /**
   * Optional controlled state for the value of the search input.
   */
  value?: string
  /**
   * Event handler called when the search value changes.
   */
  onValueChange?: (search: string) => void

  dynamicPlaceholder?: string
  theme?: Partial<CommandTheme>
  iconClassName?: string
  inputClassName?: string
}
/**
 * Command menu input.
 * All props are forwarded to the underyling `input` element.
 */
export const CommandInput = React.forwardRef<
  HTMLInputElement,
  CommandInputProps
>((props, forwardedRef) => {
  const {
    theme: customTheme = {},
    onValueChange,
    dynamicPlaceholder = true,
    ...etc
  } = props
  const isControlled = props.value != null
  const store = useStore()
  const search = useCmdk((state) => state.search)
  const value = useCmdk((state) => state.value)
  const context = useCommand()

  const selectedItemId = React.useMemo(() => {
    const item = context.listInnerRef.current?.querySelector(
      `${SELECTORS.ITEM_SELECTOR}[${SELECTORS.VALUE_ATTR}="${encodeURIComponent(value)}"]`
    )
    return item?.getAttribute("id")
  }, [])

  React.useEffect(() => {
    if (props.value != null) {
      store.setState("search", props.value)
    }
  }, [props.value])
  const theme = mergeDeep(getTheme().command, customTheme)

  return (
    <div
      className={cn(theme.input.base, props.className)}
      data-command-input-wrapper=""
    >
      <TbSearch className={cn(theme.input.icon, props.iconClassName)} />
      <input
        ref={forwardedRef}
        {...etc}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        data-command-input=""
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        aria-autocomplete="list"
        className={cn(theme.input.input, props.inputClassName)}
        role="combobox"
        placeholder={
          dynamicPlaceholder
            ? value
            : props.placeholder ?? "Type a command or search..."
        }
        aria-expanded={true}
        aria-controls={context.listId}
        aria-labelledby={context.labelId}
        aria-activedescendant={selectedItemId ?? undefined}
        id={context.inputId}
        type="text"
        value={isControlled ? props.value : search}
        onChange={(e) => {
          if (!isControlled) {
            store.setState("search", e.target.value)
          }
          onValueChange?.(e.target.value)
        }}
      />
    </div>
  )
})
CommandInput.displayName = "Input"
