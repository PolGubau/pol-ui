/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Primitive } from '@radix-ui/react-primitive'
import { CommandContext, StoreContext, useCommand, useStore } from './use-command'
import type {
  CommandProps,
  SeparatorProps,
  CommandState,
  CommandContextType,
  ListProps,
  DialogProps,
  EmptyProps,
  CommandStore,
} from './types'
import { useIsomorphicLayoutEffect } from '../../hooks'
import { mergeRefs } from '../../helpers/mergeRefs/mergeRefs'
import { Input, type InputProps } from '../Input'
import {
  GROUP_HEADING_SELECTOR,
  GROUP_ITEMS_SELECTOR,
  GROUP_SELECTOR,
  ITEM_SELECTOR,
  SELECT_EVENT,
  VALID_ITEM_SELECTOR,
  VALUE_ATTR,
  defaultFilter,
} from './values'
import { Modal } from '../Modal'

export const Command = React.forwardRef<HTMLDivElement, CommandProps>((props, forwardedRef) => {
  const state = useLazyRef<CommandState>(() => ({
    /** Value of the search query. */
    search: '',
    /** Currently selected item value. */
    value: props.value ?? props.defaultValue ?? '',
    filtered: {
      /** The count of all visible items. */
      count: 0,
      /** Map from visible item id to its search score. */
      items: new Map(),
      /** Set of groups with at least one visible item. */
      groups: new Set(),
    },
  }))
  const allItems = useLazyRef<Set<string>>(() => new Set()) // [...itemIds]
  const allGroups = useLazyRef<Map<string, Set<string>>>(() => new Map()) // groupId → [...itemIds]
  const ids = useLazyRef<Map<string, { value: string; keywords?: string[] }>>(() => new Map()) // id → { value, keywords }
  const listeners = useLazyRef<Set<() => void>>(() => new Set()) // [...rerenders]
  const propsRef = useAsRef(props)
  const {
    label,
    value,

    disablePointerSelection = false,
    vimBindings = true,
    ...etc
  } = props

  const listId = React.useId()
  const labelId = React.useId()
  const inputId = React.useId()

  const listInnerRef = React.useRef<HTMLDivElement>(null)

  const schedule = useScheduleLayoutEffect()

  /** Controlled mode `value` handling. */
  useIsomorphicLayoutEffect(() => {
    if (value !== undefined) {
      const v = value.trim()
      state.current.value = v
      store.emit()
    }
  }, [value])

  useIsomorphicLayoutEffect(() => {
    schedule(6, scrollSelectedIntoView)
  }, [])

  const store: CommandStore = React.useMemo(() => {
    return {
      subscribe: cb => {
        listeners.current.add(cb)
        return () => listeners.current.delete(cb)
      },
      snapshot: () => {
        return state.current
      },
      setState: (key, value, opts) => {
        if (Object.is(state.current[key], value)) return
        state.current[key] = value

        if (key === 'search') {
          // Filter synchronously before emitting back to children
          filterItems()
          sort()
          schedule(1, selectFirstItem)
        } else if (key === 'value') {
          // opts is a boolean referring to whether it should NOT be scrolled into view
          if (!opts) {
            // Scroll the selected item into view
            schedule(5, scrollSelectedIntoView)
          }
          if (propsRef.current?.value !== undefined) {
            // If controlled, just call the callback instead of updating state internally
            const newValue = (value ?? '') as string
            propsRef.current.onValueChange?.(newValue)
            return
          }
        }

        // Notify subscribers that state has changed
        store.emit()
      },
      emit: () => {
        listeners.current.forEach(l => l())
      },
    }
  }, [])

  const context: CommandContextType = React.useMemo(
    () => ({
      // Keep id → {value, keywords} mapping up-to-date
      value: (id, value, keywords) => {
        if (value !== ids.current.get(id)?.value) {
          ids.current.set(id, { value, keywords })
          state.current.filtered.items.set(id, score(value, keywords))
          schedule(2, () => {
            sort()
            store.emit()
          })
        }
      },
      // Track item lifecycle (mount, unmount)
      item: (id, groupId) => {
        allItems.current.add(id)

        // Track this item within the group
        if (groupId) {
          if (!allGroups.current.has(groupId)) {
            allGroups.current.set(groupId, new Set([id]))
          } else {
            allGroups.current.get(groupId)?.add(id)
          }
        }

        // Batch this, multiple items can mount in one pass
        // and we should not be filtering/sorting/emitting each time
        schedule(3, () => {
          filterItems()
          sort()

          // Could be initial mount, select the first item if none already selected
          if (!state.current.value) {
            selectFirstItem()
          }

          store.emit()
        })

        return () => {
          ids.current.delete(id)
          allItems.current.delete(id)
          state.current.filtered.items.delete(id)
          const selectedItem = getSelectedItem()

          // Batch this, multiple items could be removed in one pass
          schedule(4, () => {
            filterItems()

            // The item removed have been the selected one,
            // so selection should be moved to the first
            if (selectedItem?.getAttribute('id') === id) selectFirstItem()

            store.emit()
          })
        }
      },
      // Track group lifecycle (mount, unmount)
      group: id => {
        if (!allGroups.current.has(id)) {
          allGroups.current.set(id, new Set())
        }

        return () => {
          ids.current.delete(id)
          allGroups.current.delete(id)
        }
      },
      filter: () => {
        return propsRef.current.shouldFilter ?? true
      },
      label: label ?? String(props['aria-label' as keyof CommandProps]) ?? 'Suggestions',
      disablePointerSelection: disablePointerSelection ?? false,
      listId,
      inputId,
      labelId,
      listInnerRef,
    }),
    [],
  )

  function score(value: string, keywords?: string[]) {
    const filter = propsRef.current?.filter ?? defaultFilter
    return value && filter ? filter(value, state.current.search, keywords) : 0
  }

  /** Sorts items by score, and groups by highest item score. */
  function sort() {
    if (
      !state.current.search ||
      // Explicitly false, because true | undefined is the default
      propsRef.current.shouldFilter === false
    ) {
      return
    }

    const scores = state.current.filtered.items

    // Sort the groups
    const groups: [string, number][] = []
    state.current.filtered.groups.forEach(value => {
      const items = allGroups.current.get(value)
      if (!items) return
      // Get the maximum score of the group's items
      let max = 0
      items.forEach(item => {
        const score = scores.get(item)
        max = Math.max(score ?? 0, max)
      })

      groups.push([value, max])
    })

    // Sort items within groups to bottom
    // Sort items outside of groups
    // Sort groups to bottom (pushes all non-grouped items to the top)
    const listInsertionElement = listInnerRef.current

    // Sort the items
    getValidItems()
      .sort((a, b) => {
        const valueA = a.getAttribute('id')
        const valueB = b.getAttribute('id')

        if (!valueA || !valueB) return 0

        return (scores.get(valueB) ?? 0) - (scores.get(valueA) ?? 0)
      })
      .forEach(item => {
        const group = item.closest(GROUP_ITEMS_SELECTOR)

        const parentElement = item.parentElement as HTMLElement
        if (!parentElement) return // This should never happen
        if (group) {
          group.appendChild(
            parentElement === group ? item : (item.closest(`${GROUP_ITEMS_SELECTOR} > *`) as HTMLElement),
          )
        } else {
          listInsertionElement?.appendChild(
            parentElement === listInsertionElement
              ? item
              : (item.closest(`${GROUP_ITEMS_SELECTOR} > *`) as HTMLElement),
          )
        }
      })

    if (!listInsertionElement) return
    groups
      .sort((a, b) => b[1] - a[1])
      .forEach(group => {
        const element = listInnerRef.current?.querySelector(`${GROUP_SELECTOR}[${VALUE_ATTR}="${group[0]}"]`)
        element?.parentElement?.appendChild(element)
      })
  }

  function selectFirstItem() {
    const item = getValidItems().find(item => item.getAttribute('aria-disabled') !== 'true')
    const value = item?.getAttribute(VALUE_ATTR)
    store.setState('value', value ?? '')
  }

  /** Filters the current items. */
  function filterItems() {
    if (
      !state.current.search ||
      // Explicitly false, because true | undefined is the default
      propsRef.current.shouldFilter === false
    ) {
      state.current.filtered.count = allItems.current.size
      // Do nothing, each item will know to show itself because search is empty
      return
    }

    // Reset the groups
    state.current.filtered.groups = new Set()
    let itemCount = 0

    // Check which items should be included
    for (const id of allItems.current) {
      const value = ids.current.get(id)?.value ?? ''
      const keywords = ids.current.get(id)?.keywords ?? []
      const rank = score(value, keywords)
      state.current.filtered.items.set(id, rank)
      if (rank > 0) itemCount++
    }

    // Check which groups have at least 1 item shown
    for (const [groupId, group] of allGroups.current) {
      for (const itemId of group) {
        const items = state.current.filtered.items
        if (items.get?.(itemId) ?? 0 > 0) {
          state.current.filtered.groups.add(groupId)
          break
        }
      }
    }

    state.current.filtered.count = itemCount
  }

  function scrollSelectedIntoView() {
    const item = getSelectedItem()

    if (item) {
      if (item.parentElement?.firstChild === item) {
        // First item in Group, ensure heading is in view
        item.closest(GROUP_SELECTOR)?.querySelector(GROUP_HEADING_SELECTOR)?.scrollIntoView({ block: 'nearest' })
      }

      // Ensure the item is always in view
      item.scrollIntoView({ block: 'nearest' })
    }
  }

  /** Getters */

  function getSelectedItem() {
    return listInnerRef.current?.querySelector(`${ITEM_SELECTOR}[aria-selected="true"]`)
  }

  function getValidItems() {
    return Array.from(listInnerRef.current?.querySelectorAll(VALID_ITEM_SELECTOR) ?? [])
  }

  /** Setters */

  function updateSelectedToIndex(index: number) {
    const items = getValidItems()
    const item = items[index]
    if (item) store.setState('value', item.getAttribute(VALUE_ATTR) ?? '')
  }

  function updateSelectedByItem(change: 1 | -1) {
    const selected = getSelectedItem()
    const items = getValidItems()
    const index = items.findIndex(item => item === selected)

    // Get item at this index
    let newSelected = items[index + change]

    if (propsRef.current?.loop) {
      newSelected =
        index + change < 0
          ? items[items.length - 1]
          : index + change === items.length
            ? items[0]
            : items[index + change]
    }

    if (newSelected) store.setState('value', newSelected.getAttribute(VALUE_ATTR) ?? '')
  }

  function updateSelectedByGroup(change: 1 | -1) {
    const selected = getSelectedItem()
    let group = selected?.closest(GROUP_SELECTOR)
    let item: HTMLElement | undefined = undefined

    while (group && !item) {
      group = change > 0 ? findNextSibling(group, GROUP_SELECTOR) : findPreviousSibling(group, GROUP_SELECTOR)
      item = group?.querySelector(VALID_ITEM_SELECTOR) ?? undefined
    }

    if (item) {
      store.setState('value', item.getAttribute(VALUE_ATTR) ?? '')
    } else {
      updateSelectedByItem(change)
    }
  }

  const last = () => updateSelectedToIndex(getValidItems().length - 1)

  const next = (e: React.KeyboardEvent) => {
    e.preventDefault()

    if (e.metaKey) {
      // Last item
      last()
    } else if (e.altKey) {
      // Next group
      updateSelectedByGroup(1)
    } else {
      // Next item
      updateSelectedByItem(1)
    }
  }

  const prev = (e: React.KeyboardEvent) => {
    e.preventDefault()

    if (e.metaKey) {
      // First item
      updateSelectedToIndex(0)
    } else if (e.altKey) {
      // Previous group
      updateSelectedByGroup(-1)
    } else {
      // Previous item
      updateSelectedByItem(-1)
    }
  }

  return (
    <Primitive.div
      ref={forwardedRef}
      tabIndex={-1}
      {...etc}
      cmdk-root=""
      onKeyDown={e => {
        etc.onKeyDown?.(e)
        if (!e.defaultPrevented) {
          switch (e.key) {
            case 'n':
            case 'j': {
              // vim keybind down
              if (vimBindings && e.ctrlKey) {
                next(e)
              }
              break
            }
            case 'ArrowDown': {
              next(e)
              break
            }
            case 'p':
            case 'k': {
              // vim keybind up
              if (vimBindings && e.ctrlKey) {
                prev(e)
              }
              break
            }
            case 'ArrowUp': {
              prev(e)
              break
            }
            case 'Home': {
              // First item
              e.preventDefault()
              updateSelectedToIndex(0)
              break
            }
            case 'End': {
              // Last item
              e.preventDefault()
              last()
              break
            }
            case 'Enter': {
              // Check if IME composition is finished before triggering onSelect
              // This prevents unwanted triggering while user is still inputting text with IME
              // e.keyCode === 229 is for the Japanese IME and Safari.
              // isComposing does not work with Japanese IME and Safari combination.
              if (!e.nativeEvent.isComposing && e.keyCode !== 229) {
                e.preventDefault()
                const item = getSelectedItem()
                if (item) {
                  const event = new Event(SELECT_EVENT)
                  item.dispatchEvent(event)
                }
              }
            }
          }
        }
      }}
    >
      <label
        htmlFor={context.inputId}
        id={context.labelId}
        // Screen reader only
        style={srOnlyStyles}
      >
        {label}
      </label>
      {SlottableWithNestedChildren(props, child => (
        <StoreContext.Provider value={store}>
          <CommandContext.Provider value={context}>{child}</CommandContext.Provider>
        </StoreContext.Provider>
      ))}
    </Primitive.div>
  )
})
Command.displayName = 'Command'

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
export const CommandSeparator = React.forwardRef<HTMLDivElement, SeparatorProps>((props, forwardedRef) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const render = useCmdk(state => !state.search)

  if (!props.alwaysRender && !render) return null
  return <div ref={mergeRefs([ref, forwardedRef])} {...props} role="separator" />
})
CommandSeparator.displayName = 'CommandSeparator'

/**
 * Command menu input.
 * All props are forwarded to the underyling `input` element.
 */
export const CommandInput = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { onChange: onInputChange, ...etc } = props
  const isControlled = props.value != null
  const store = useStore()
  const search = useCmdk(state => state.search)
  const value = useCmdk(state => state.value)
  const context = useCommand()

  const selectedItemId = React.useMemo(() => {
    const item = context?.listInnerRef.current?.querySelector(
      `${ITEM_SELECTOR}[${VALUE_ATTR}="${encodeURIComponent(value)}"]`,
    )
    return item?.getAttribute('id')
  }, [])

  React.useEffect(() => {
    if (props.value != null) {
      store?.setState('search', String(props.value) ?? '')
    }
  }, [props.value])

  return (
    <Input
      ref={forwardedRef}
      {...etc}
      data-id="command-input"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      aria-autocomplete="list"
      role="combobox"
      aria-expanded={true}
      aria-controls={context?.listId}
      aria-labelledby={context?.labelId}
      aria-activedescendant={selectedItemId ?? undefined}
      id={context?.inputId}
      type="text"
      value={isControlled ? props.value : search}
      onChange={e => {
        if (!isControlled) {
          store?.setState('search', e.target.value)
        }
        onInputChange?.(e)
      }}
    />
  )
})
CommandInput.displayName = 'CommandInput'

/**
 * Contains `Item`, `Group`, and `Separator`.
 * Use the `--cmdk-list-height` CSS variable to animate height based on the number of results.
 */
export const CommandList = React.forwardRef<HTMLDivElement, ListProps>((props, forwardedRef) => {
  const { label = 'Suggestions', ...etc } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const height = React.useRef<HTMLDivElement>(null)
  const context = useCommand()

  React.useEffect(() => {
    if (height.current && ref.current) {
      const el = height.current
      const wrapper = ref.current
      let animationFrame = 0
      const observer = new ResizeObserver(() => {
        animationFrame = requestAnimationFrame(() => {
          const height = el.offsetHeight
          wrapper.style.setProperty(`--cmdk-list-height`, height.toFixed(1) + 'px')
        })
      })
      observer.observe(el)
      return () => {
        cancelAnimationFrame(animationFrame)
        observer.unobserve(el)
      }
    }
  }, [])

  const listInnerReference = context?.listInnerRef
  if (!listInnerReference) throw new Error('useCommand must be used within a <Command /> component. ')

  return (
    <div
      ref={mergeRefs([ref, forwardedRef])}
      {...etc}
      data-cmdk-list=""
      role="listbox"
      aria-label={label}
      id={context?.listId ?? undefined}
    >
      {SlottableWithNestedChildren(props, child => (
        <div ref={mergeRefs([height, listInnerReference])} data-cmdk-list-sizer="">
          {child}
        </div>
      ))}
    </div>
  )
})
CommandList.displayName = 'CommandList'

/**
 * Renders the command menu in a Radix Dialog.
 */
export const CommandDialog = React.forwardRef<HTMLDivElement, DialogProps>((props: DialogProps, forwardedRef) => {
  const { open, onClose, ...etc } = props
  return (
    <Modal open={open} onClose={onClose}>
      <Command ref={forwardedRef} {...etc} />
    </Modal>
  )
})
CommandDialog.displayName = 'CommandDialog'

/**
 * Automatically renders when there are no results for the search query.
 */
export const CommandEmpty = React.forwardRef<HTMLDivElement, EmptyProps>((props, forwardedRef) => {
  const render = useCmdk(state => state.filtered.count === 0)

  if (!render) return null
  return <div ref={forwardedRef} {...props} role="presentation" />
})
CommandEmpty.displayName = 'CommandEmpty'

/**
 *
 *
 * Helpers
 *
 *
 */

export function findNextSibling(el: Element, selector: string) {
  let sibling = el.nextElementSibling

  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.nextElementSibling
  }
}

export function findPreviousSibling(el: Element, selector: string) {
  let sibling = el.previousElementSibling

  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.previousElementSibling
  }
}

export function useAsRef<T>(data: T) {
  const ref = React.useRef<T>(data)

  useIsomorphicLayoutEffect(() => {
    ref.current = data
  })

  return ref
}

function useLazyRef<T>(fn: () => T) {
  const ref = React.useRef<T>()

  if (ref.current === undefined) {
    ref.current = fn()
  }

  return ref as React.MutableRefObject<T>
}

/** Run a selector against the store state. */
function useCmdk<T = any>(selector: (state: CommandState) => T) {
  const store = useStore()
  if (!store) {
    throw new Error('useCmdk must be used within a <Command /> component.')
  }

  const cb = () => selector(store.snapshot())
  return React.useSyncExternalStore(store.subscribe, cb, cb)
}

export function useValue(
  id: string,
  ref: React.RefObject<HTMLElement>,
  deps: (string | React.ReactNode | React.RefObject<HTMLElement>)[] = [],
  aliases: string[] = [],
) {
  const valueRef = React.useRef<string>()
  const context = useCommand()
  if (!context) throw new Error('useValue must be used within a <Command /> component. ')

  useIsomorphicLayoutEffect(() => {
    const value =
      ((() => {
        for (const part of deps) {
          if (typeof part === 'string') {
            return part.trim()
          }
          if (!part) continue

          if (typeof part === 'object' && 'current' in part) {
            if (part.current) {
              return part.current.textContent?.trim()
            }
            return valueRef.current
          }
        }
      })() as string) ?? ''

    const keywords = aliases.map(alias => alias.trim())

    context.value(id, value, keywords)
    if (typeof value === 'string') {
      ref.current?.setAttribute(VALUE_ATTR, value)
    }
    valueRef.current = value
  })

  return valueRef
}

/** Imperatively run a function on the next layout effect cycle. */
const useScheduleLayoutEffect = () => {
  const [s, ss] = React.useState<object>()
  const fns = useLazyRef(() => new Map<string | number, () => void>())

  useIsomorphicLayoutEffect(() => {
    fns.current.forEach(f => f())
    fns.current = new Map()
  }, [s])

  return (id: string | number, cb: () => void) => {
    fns.current.set(id, cb)
    ss({})
  }
}

function renderChildren(children: React.ReactElement) {
  const childrenType = children.type as any
  // The children is a component
  if (typeof childrenType === 'function') return childrenType(children.props)
  // The children is a component with `forwardRef`
  else if ('render' in childrenType) return childrenType.render(children.props)
  // It's a string, boolean, etc.
  else return children
}

export function SlottableWithNestedChildren(
  { asChild, children }: { asChild?: boolean; children?: React.ReactNode },
  render: (child: React.ReactNode) => JSX.Element,
) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(renderChildren(children), { ref: (children as any).ref }, render(children.props.children))
  }
  return render(children)
}

const srOnlyStyles = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0',
} as const
