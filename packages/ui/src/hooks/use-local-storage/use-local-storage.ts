"use client"

import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"

import { json, setToLocalStorage } from "../../helpers"
import { decrypt, encrypt } from "../../helpers/encryption/encryption"
import { useEventCallback } from "../use-event-callback/use-event-callback"
import { useEventListener } from "../use-event-listener/use-event-listener"

declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>

/**
 * @name useLocalStorage
 * @description A hook to use localStorage with ease and encriptation
 * @param key {string} - The key to store the value in localStorage
 * @param initialValue {T} - The initial value to store in localStorage
 * @param encriptationKey {string} - The key to encript the value in localStorage
 * @returns {[T, SetValue<T>]} The stored value and a function to set the value
 *
 * @example
 * ```tsx
 * const [value, setValue] = useLocalStorage('key', 'initialValue')
 * ```
 *
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  encriptationKey?: string
): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  if (initialValue === undefined) {
    throw new Error("initialValue is required")
  }
  if (typeof initialValue === "function") {
    throw new Error("initialValue cannot be a function")
  }

  function decryptAndParse<T>(data: string, keyToDecrypt?: string): T {
    if (!keyToDecrypt) {
      return json.parse(data) as T
    } else {
      // Decrypt data
      const decryptedData = decrypt(data, keyToDecrypt)
      return json.parse(decryptedData) as T
    }
  }
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? decryptAndParse(item, encriptationKey) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key, encriptationKey])

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue)

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useEventCallback((value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      )
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value

      // Save to local storage
      const maybeEncryptedvalue = encriptationKey
        ? encrypt(JSON.stringify(newValue), encriptationKey)
        : JSON.stringify(newValue)
      setToLocalStorage(key, maybeEncryptedvalue)

      // Save state
      setStoredValue(newValue)

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event("local-storage"))
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  })

  useEffect(() => {
    setStoredValue(readValue())
  }, [])

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent).key && (event as StorageEvent).key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue]
  )

  // this only works for other documents, not the current one
  useEventListener("storage", handleStorageChange)

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener("local-storage", handleStorageChange)

  return [storedValue, setValue]
}
