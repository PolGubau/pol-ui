import { useEffect } from "react";
import { UseKeyboardShortcutsProps } from "./types";

function useKeyboardShortcuts(newShortcuts: UseKeyboardShortcutsProps[]) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      newShortcuts.forEach((shortcut) => {
        const keys = shortcut.key.split("+");
        const key = keys.pop();
        const modifiers = new Set(keys);

        const modPressed = ["Control", "Alt", "Shift", "Meta"].every(
          (mod) => modifiers.has(mod) === event.getModifierState(mod)
        );

        if (modPressed && key?.toLowerCase() === event.key.toLowerCase()) {
          shortcut.action();
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [newShortcuts]);
}

export default useKeyboardShortcuts;
