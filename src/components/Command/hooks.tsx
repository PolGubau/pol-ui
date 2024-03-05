/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useRef } from 'react'
import { SELECTORS } from './Command'
import { useCommand, useStore } from './contexts'
import { useIsomorphicLayoutEffect } from '../../hooks'
import type { State } from './types'
import { useLazyRef } from '../../hooks/use-lazy-ref/use-lazy-ref'

export function useValue(
  id: string,
  ref: React.RefObject<HTMLElement>,
  deps: (string | React.ReactNode | React.RefObject<HTMLElement>)[],
  aliases: string[] = [],
) {
  const valueRef = useRef<string>()
  const context = useCommand()

  useLayoutEffect(() => {
    const value = (() => {
      for (const part of deps ?? []) {
        if (typeof part === 'string') {
          return part.trim()
        }
      }
    })()
    const keywords = aliases.map(alias => alias.trim())
    context.value(id, value ?? '', keywords)
    ref.current?.setAttribute(SELECTORS.VALUE_ATTR, value ?? '')
    valueRef.current = value
  })

  return valueRef
}

export function useAsRef<T>(data: T) {
  const ref = React.useRef<T>(data)

  useIsomorphicLayoutEffect(() => {
    ref.current = data
  })

  return ref
}

/** Run a selector against the store state. */
export function useCmdk<T = any>(selector: (state: State) => T) {
  const store = useStore()
  const cb = () => selector(store.snapshot())
  return React.useSyncExternalStore(store.subscribe, cb, cb)
}

/** Imperatively run a function on the next layout effect cycle. */
export const useScheduleLayoutEffect = () => {
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
