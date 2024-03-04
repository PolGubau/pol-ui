import { mergeRefs } from '../../helpers/mergeRefs/mergeRefs'
import { useIsomorphicLayoutEffect } from '../../hooks'
import type { ItemProps } from './types'
import React from 'react'
import { GroupContext, useCmdk, useCommand, useStore } from './use-command'
import { useAsRef, useValue } from './Command'
import { SELECT_EVENT } from './values'

export const Item = React.forwardRef<HTMLButtonElement, ItemProps>((props, forwardedRef) => {
  const id = React.useId()
  const ref = React.useRef<HTMLDivElement>(null)
  const groupContext = React.useContext(GroupContext)
  if (!groupContext) throw new Error('Item must be used within a Command component')
  const context = useCommand()
  if (!context) throw new Error('Item must be used within a Command component')
  const propsRef = useAsRef(props)
  const forceMount = propsRef.current?.forceMount ?? groupContext?.forceMount
  function onSelect() {
    select()
    propsRef.current.onSelect?.(value.current ?? '')
  }
  useIsomorphicLayoutEffect(() => {
    if (!forceMount) {
      return context.item(id, groupContext?.id)
    }
  }, [forceMount])

  const value = useValue(id, ref, [props.value, props.children, ref], props.keywords)

  const store = useStore()
  const selected = useCmdk(state => state.value && state.value === value.current)
  const render = useCmdk(state =>
    forceMount
      ? true
      : context.filter() === false
        ? true
        : !state.search
          ? true
          : state.filtered.items.get(id ?? '') > 0,
  )

  React.useEffect(() => {
    const element = ref.current
    if (!element || props.disabled) return
    element.addEventListener(SELECT_EVENT, onSelect)
    return () => element.removeEventListener(SELECT_EVENT, onSelect)
  }, [render, props.onSelect, props.disabled])

  function select() {
    if (!store) return
    store.setState('value', value.current ?? '', true)
  }

  if (!render) return null

  const { disabled, value, onSelect, forceMount: keywords, ...etc } = props

  return (
    <button
      ref={mergeRefs([ref, forwardedRef])}
      {...etc}
      id={id}
      data-cmdk-item=""
      role="option"
      aria-disabled={Boolean(disabled)}
      aria-selected={Boolean(selected)}
      data-disabled={Boolean(disabled)}
      data-selected={Boolean(selected)}
      onPointerMove={disabled || context.disablePointerSelection ? undefined : select}
      onClick={disabled ? undefined : onSelect}
    >
      {props.children}
    </button>
  )
})

Item.displayName = 'Item'
