import React from 'react'
import type { CommandState, CommandStore, CommandContextType, GroupType } from './types'
export const StoreContext = React.createContext<CommandStore | undefined>(undefined)

export const GroupContext = React.createContext<GroupType | undefined>(undefined)
export const CommandContext = React.createContext<CommandContextType | undefined>(undefined)

export const useCommand = () => React.useContext(CommandContext)
export const useStore = () => React.useContext(StoreContext)
export function useCmdk<T = unknown>(selector: (state: CommandState) => T) {
  const store = useStore()
  if (!store) throw new Error('useCmdk must be used within a CommandProvider')

  const cb = () => selector(store.snapshot())
  return React.useSyncExternalStore(store.subscribe, cb, cb)
}
