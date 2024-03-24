import type { ComponentProps } from 'react'
import React from 'react'
import { cn, mergeDeep } from '../../../helpers'
import { mergeRefs } from '../../../helpers/mergeRefs/mergeRefs'
import { GroupContext, useCommand, useStore } from '../contexts'
import { useAsRef, useCmdk, useValue } from '../hooks'
import { useIsomorphicLayoutEffect, useRipple } from '../../../hooks'
import { SELECTORS } from '../Command'
import { getTheme } from '../../../theme-store'
import type { CommandTheme } from '../theme'

export type ItemProps = Omit<ComponentProps<'button'>, 'disabled' | 'onSelect' | 'value'> & {
  /** Whether this item is currently disabled. */
  disabled?: boolean
  /** Event handler for when this item is selected, either via click or keyboard selection. */
  onSelect?: (value: string) => void
  /**
   * A unique value for this item.
   * If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.
   */
  value?: string
  /** Optional keywords to match against when filtering. */
  keywords?: string[]
  /** Whether this item is forcibly rendered regardless of filtering. */
  forceMount?: boolean
  theme?: Partial<CommandTheme>
}

/**
 * Command menu item. Becomes active on pointer enter or through keyboard navigation.
 * Preferably pass a `value`, otherwise the value will be inferred from `children` or
 * the rendered item's `textContent`.
 */
export const Item = React.forwardRef<HTMLButtonElement, ItemProps>((props, forwardedRef) => {
  const id = React.useId()
  const ref = React.useRef<HTMLButtonElement>(null)
  const groupContext = React.useContext(GroupContext)
  const context = useCommand()
  const propsRef = useAsRef(props)
  const forceMountBool = propsRef.current?.forceMount ?? groupContext?.forceMount ?? false
  const { disabled = false, ...etc } = props

  useIsomorphicLayoutEffect(() => {
    if (!forceMountBool) {
      return context.item(id, groupContext?.id)
    }
  }, [forceMountBool])

  const valueFromHook = useValue(id, ref, [props.value, props.children, ref], props.keywords)

  const store = useStore()
  const selected = useCmdk(state => state.value && state.value === valueFromHook.current)
  const render = useCmdk(state =>
    forceMountBool
      ? true
      : context.filter() === false
        ? true
        : !state.search
          ? true
          : state.filtered.items.get(id) ?? 0 > 0,
  )

  React.useEffect(() => {
    const element = ref.current
    if (!element || disabled) return
    element.addEventListener(SELECTORS.SELECT_EVENT, onSelectValue)
    return () => element.removeEventListener(SELECTORS.SELECT_EVENT, onSelectValue)
  }, [render, props.onSelect, disabled])

  function onSelectValue() {
    select()
    propsRef.current.onSelect?.(valueFromHook.current ?? '') // Call the user's onSelect
  }

  function select() {
    store.setState('value', valueFromHook.current ?? '', true)
  }
  const [ripple, event] = useRipple({
    opacity: 0.2,
  })
  if (!render) return null
  const theme = mergeDeep(getTheme().command, props.theme ?? {})

  return (
    <button
      ref={mergeRefs([ref, forwardedRef, ripple])}
      {...etc}
      id={id}
      onPointerDown={event}
      data-command-item=""
      className={cn(theme.item.base, props.className)}
      onFocus={() => store.setState('value', valueFromHook.current ?? '', true)}
      role="option"
      aria-disabled={Boolean(disabled)}
      aria-selected={Boolean(selected)}
      data-disabled={Boolean(disabled)}
      data-selected={Boolean(selected)}
      onPointerMove={disabled || context.disablePointerSelection ? undefined : select}
      onClick={disabled ? undefined : onSelectValue}
      onSelect={onSelectValue}
    >
      {props.children}
    </button>
  )
})
Item.displayName = 'Item'
