/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Based on https://cmdk.paco.me and https://react-cmdk.com

import * as React from 'react'
import { commandScore } from './score'
import { useAsRef, useCmdk, useScheduleLayoutEffect } from './hooks'
import { cn, mergeDeep } from '../../helpers'
import type { CommandProps, Context, State, Store } from './types'
import { useLazyRef } from '../../hooks/use-lazy-ref/use-lazy-ref'
import { useIsomorphicLayoutEffect } from '../../hooks'
import { CommandContext, StoreContext } from './contexts'
import { Empty } from './components/empty'
import { Group } from './components/group'
import { List } from './components/list'
import { Input } from './components/input'
import { Item } from './components/item'
import { Separator } from './components/separator'
import { Loading } from './components/loading'
import { SlottableWithNestedChildren, findNextSibling, findPreviousSibling } from './utils'
import { getTheme } from '../../theme-store'

export const SELECTORS = {
  GROUP_SELECTOR: `[data-command-group=""]`,
  GROUP_ITEMS_SELECTOR: `[data-command-group-items=""]`,
  GROUP_HEADING_SELECTOR: `[data-command-group-heading=""]`,
  ITEM_SELECTOR: `[data-command-item=""]`,
  VALID_ITEM_SELECTOR: `[data-command-item=""]:not([aria-disabled="true"])`,
  SELECT_EVENT: `data-command-item-select`,
  VALUE_ATTR: `data-value`,
}

const defaultFilter: CommandProps['filter'] = (value, search, keywords) => commandScore(value, search, keywords ?? [])

/**
 * Command is a component that provides a way to navigate through a list of items using the keyboard. It is a combination of a list and an input, where the input is used to filter the list of items.
 */
const Command = React.forwardRef<HTMLDivElement, CommandProps>((props, forwardedRef) => {
  const state = useLazyRef<State>(() => ({
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
  const { label, value, disablePointerSelection = false, vimBindings = true, theme: customTheme = {}, ...etc } = props

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

  const store: Store = React.useMemo(() => {
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

  const context: Context = React.useMemo(
    () => ({
      // Keep id → {value, keywords} mapping up-to-date
      value: (id, value, keywords) => {
        if (value !== ids.current.get(id)?.value) {
          ids.current.set(id, { value, keywords })
          state.current.filtered.items.set(id, score(value, keywords) ?? 0)
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
      label: label ?? String(props['aria-label']),
      disablePointerSelection,
      listId,
      inputId,
      labelId,
      listInnerRef,
    }),
    [],
  )

  function score(value: string, keywords?: string[]) {
    const filter = propsRef.current?.filter ?? defaultFilter
    return value ? filter?.(value, state.current.search, keywords) : 0
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

      // Get the maximum score of the group's items
      let max = 0
      items?.forEach(item => {
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
        const group = item.closest(SELECTORS.GROUP_ITEMS_SELECTOR)

        if (!group) {
          listInsertionElement?.appendChild(item)
        }

        if (group) {
          // Append to the group
          group.appendChild(
            item.parentElement === group
              ? item
              : (item.closest(`${SELECTORS.GROUP_ITEMS_SELECTOR} > *`) as HTMLElement),
          )
        } else {
          if (!listInsertionElement) {
            return
          }

          listInsertionElement.appendChild(
            item.parentElement === listInsertionElement
              ? item
              : (item.closest(`${SELECTORS.GROUP_ITEMS_SELECTOR} > *`) as HTMLElement),
          )
        }
      })

    groups
      .sort((a, b) => b[1] - a[1])
      .forEach(group => {
        const element = listInnerRef.current?.querySelector(
          `${SELECTORS.GROUP_SELECTOR}[${SELECTORS.VALUE_ATTR}="${group[0]}"]`,
        )
        element?.parentElement?.appendChild(element)
      })
  }

  function selectFirstItem() {
    const item = getValidItems().find(item => item.getAttribute('aria-disabled') !== 'true')
    const value = item?.getAttribute(SELECTORS.VALUE_ATTR)
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
      state.current.filtered.items.set(id, rank ?? 0)
      if (rank && rank > 0) itemCount++
    }

    // Check which groups have at least 1 item shown
    for (const [groupId, group] of allGroups.current) {
      for (const itemId of group) {
        if (state.current.filtered.items.get(itemId) ?? 0 > 0) {
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
        item
          .closest(SELECTORS.GROUP_SELECTOR)
          ?.querySelector(SELECTORS.GROUP_HEADING_SELECTOR)
          ?.scrollIntoView({ block: 'nearest' })
      }

      // Ensure the item is always in view
      item.scrollIntoView({ block: 'nearest' })
    }
  }

  /** Getters */

  function getSelectedItem() {
    return listInnerRef.current?.querySelector(`${SELECTORS.ITEM_SELECTOR}[aria-selected="true"]`)
  }

  function getValidItems() {
    return Array.from(listInnerRef.current?.querySelectorAll(SELECTORS.VALID_ITEM_SELECTOR) ?? [])
  }

  /** Setters */

  function updateSelectedToIndex(index: number) {
    const items = getValidItems()
    const item = items[index]
    if (item) store.setState('value', item.getAttribute(SELECTORS.VALUE_ATTR) ?? '')
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

    if (newSelected) store.setState('value', newSelected.getAttribute(SELECTORS.VALUE_ATTR) ?? '')
  }

  function updateSelectedByGroup(change: 1 | -1) {
    const selected = getSelectedItem()
    let group = selected?.closest(SELECTORS.GROUP_SELECTOR)
    let item: HTMLElement | undefined = undefined

    while (group && !item) {
      group =
        change > 0
          ? findNextSibling(group, SELECTORS.GROUP_SELECTOR)
          : findPreviousSibling(group, SELECTORS.GROUP_SELECTOR)
      item = group?.querySelector(SELECTORS.VALID_ITEM_SELECTOR) ?? undefined
    }

    if (item) {
      store.setState('value', item.getAttribute(SELECTORS.VALUE_ATTR) ?? '')
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

  const theme = mergeDeep(getTheme().command, customTheme)

  return (
    <div
      role="menu"
      tabIndex={-1}
      ref={forwardedRef}
      {...etc}
      className={cn(theme.root.base, props.className)}
      data-command-root=""
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
                // Trigger item onSelect
                e.preventDefault()
                const item = getSelectedItem()
                if (item) {
                  const event = new Event(SELECTORS.SELECT_EVENT)
                  item.dispatchEvent(event)
                }
              }
            }
          }
        }
      }}
    >
      <label
        data-command-label=""
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
    </div>
  )
})
Command.displayName = 'Command'

const command = Object.assign(Command, {
  List,
  Item,
  Input,
  Group,
  Separator,
  Loading,
  Empty,
})

export { useCmdk as useCommandState }
export { Group as CommandGroup }
export { command as Command }
export { Command as CommandRoot }
export { List as CommandList }
export { Item as CommandItem }
export { Input as CommandInput }
export { Separator as CommandSeparator }
export { Loading as CommandLoading }
export { Empty as CommandEmpty }

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
