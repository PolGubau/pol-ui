import { Keys } from "./valid-keys"

export function checkCombination(
  event: KeyboardEvent,
  keys: (keyof typeof Keys)[]
): boolean {
  return keys.every((key) => {
    if (key === "Meta") return event.metaKey
    if (key === "Control") return event.ctrlKey
    if (key === "Shift") return event.shiftKey
    if (key === "Alt") return event.altKey
    return event.key === Keys[key]
  })
}
