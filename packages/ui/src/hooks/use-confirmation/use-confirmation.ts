"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Custom React hook for double-click confirmation for critical actions.
 *
 * @param action - The action to be executed on the second click.
 * @param timeout - Time in milliseconds to reset the unlocked state.
 * @returns The current unlocked state and the trigger function.
 */
const useConfirmation = (action: () => void, timeout = 5000) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false)

  // Using useRef to persist the timerId without causing re-renders
  const timerId = useRef<ReturnType<typeof setTimeout>>()

  const triggerSafeClick = useCallback(() => {
    if (isUnlocked) {
      action()
      setIsUnlocked(false)
      if (timerId.current) {
        clearTimeout(timerId.current)
      }
    } else {
      setIsUnlocked(true)
      timerId.current = setTimeout(() => {
        setIsUnlocked(false)
      }, timeout)
    }
  }, [isUnlocked, action, timeout])

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current)
      }
    }
  }, [])

  return { isUnlocked, triggerSafeClick }
}

export { useConfirmation }
