import type { Primitive } from '@radix-ui/react-primitive'
import type { DeepPartial } from '../../types'
import type { DividerTheme } from '../Divider'
import type { CommandTheme } from './theme'

export type DivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>

export type LoadingProps = DivProps & {
  /** Estimated progress of loading asynchronous options. */
  progress?: number
  /**
   * Accessible label for this loading progressbar. Not shown visibly.
   */
  label?: string
  children?: React.ReactNode
}

export type SeparatorProps = DivProps & {
  /** Whether this separator should always be rendered. Useful if you disable automatic filtering. */
  alwaysRender?: boolean
  theme?: DeepPartial<DividerTheme>
}

export type GroupProps = Omit<DivProps, 'heading' | 'value'> & {
  /** Optional heading to render for this group. */
  heading?: React.ReactNode
  /** If no heading is provided, you must provide a value that is unique for this group. */
  value?: string
  /** Whether this group is forcibly rendered regardless of filtering. */
  forceMount?: boolean
  headingClassName?: string
  children?: React.ReactNode
  theme?: DeepPartial<CommandTheme>
}
export type CommandProps = DivProps & {
  /**
   * Accessible label for this command menu. Not shown visibly.
   */
  label?: string
  /**
   * Optionally set to `false` to turn off the automatic filtering and sorting.
   * If `false`, you must conditionally render valid items based on the search query yourself.
   */
  shouldFilter?: boolean
  /**
   * Custom filter function for whether each command menu item should matches the given search query.
   * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
   * By default, uses the `command-score` library.
   */
  filter?: (value: string, search: string, keywords?: string[]) => number
  /**
   * Optional default item value when it is initially rendered.
   */
  defaultValue?: string
  /**
   * Optional controlled state of the selected command menu item.
   */
  value?: string
  /**
   * Event handler called when the selected item of the menu changes.
   */
  onValueChange?: (value: string) => void
  /**
   * Optionally set to `true` to turn on looping around when using the arrow keys.
   */
  loop?: boolean
  /**
   * Optionally set to `true` to disable selection via pointer events.
   */
  disablePointerSelection?: boolean
  /**
   * Set to `false` to disable ctrl+n/j/p/k shortcuts. Defaults to `true`.
   */
  vimBindings?: boolean

  theme?: DeepPartial<CommandTheme>
  children?: React.ReactNode
}

export interface Context {
  value: (id: string, value: string, keywords?: string[]) => void
  item: (id: string, groupId: string) => () => void
  group: (id: string) => () => void
  filter: () => boolean
  label: string
  disablePointerSelection: boolean
  // Ids
  listId: string
  labelId: string
  inputId: string
  // Refs
  listInnerRef: React.RefObject<HTMLDivElement | null>
}
export interface State {
  search: string
  value: string
  filtered: { count: number; items: Map<string, number>; groups: Set<string> }
}
export interface Store {
  subscribe: (callback: () => void) => () => void
  snapshot: () => State
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: <K extends keyof State>(key: K, value: State[K], opts?: any) => void
  emit: () => void
}
export interface Group {
  id: string
  forceMount?: boolean
}
