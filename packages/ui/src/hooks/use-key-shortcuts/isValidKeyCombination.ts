// utils.ts
import { ModifierKey, RegularKey, KeyCombination } from './valid-keys'

export const isValidKeyCombination = (keys: string): keys is KeyCombination => {
  const parts = keys.split('+').map(k => k.trim().toLowerCase())
  const modifiers = parts.filter(part => Object.values(ModifierKey).includes(part as ModifierKey))
  const regular = parts.filter(part => Object.values(RegularKey).includes(part as RegularKey))

  if (regular.length !== 1) return false
  if (modifiers.length > 2) return false
  if (parts.length !== modifiers.length + regular.length) return false

  return true
}
