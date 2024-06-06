// useKeyShortcuts.ts
import { useEffect, useCallback } from 'react'
import { KeyCombination, ModifierKey, RegularKey } from './valid-keys'
import { isValidKeyCombination } from './isValidKeyCombination'

type KeyShortcut = {
  keys: KeyCombination
  callback: () => void
}

const useKeyShortcuts = (shortcuts: KeyShortcut[]) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      shortcuts.forEach(shortcut => {
        const keys = shortcut.keys.split('+').map(k => k.trim().toLowerCase())
        const ctrl = keys.includes(ModifierKey.Ctrl)
        const shift = keys.includes(ModifierKey.Shift)
        const alt = keys.includes(ModifierKey.Alt)
        const key = keys.find(k => Object.values(RegularKey).includes(k as RegularKey))

        if (
          (ctrl === event.ctrlKey || !ctrl) &&
          (shift === event.shiftKey || !shift) &&
          (alt === event.altKey || !alt) &&
          key === event.key.toLowerCase()
        ) {
          event.preventDefault()
          shortcut.callback()
        }
      })
    },
    [shortcuts],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // Validate the keys
  useEffect(() => {
    shortcuts.forEach(shortcut => {
      if (!isValidKeyCombination(shortcut.keys)) {
        throw new Error(`Invalid key combination: ${shortcut.keys}`)
      }
    })
  }, [shortcuts])
}

export { useKeyShortcuts }
