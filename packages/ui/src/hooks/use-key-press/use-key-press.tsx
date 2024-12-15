"use client";

import { useEffect } from "react";

import { checkCombination } from "./isValidKeyCombination";
import type { Keys } from "./valid-keys";

type KeysInput = (keyof typeof Keys)[];

interface KeyPressItem {
  key: KeysInput;
  event: (event: KeyboardEvent) => void;
  preventDefault?: boolean;
}

function useKeyPress({
  keyPressItems,
  tagsToIgnore = ["INPUT", "TEXTAREA", "SELECT"],
  triggerOnContentEditable = false,
}: {
  keyPressItems: KeyPressItem[];
  tagsToIgnore?: string[];
  triggerOnContentEditable?: boolean;
}) {
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      keyPressItems.forEach(({ key: keys, event: triggerEvent, preventDefault = true }) => {
        if (checkCombination(event, keys) && shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)) {
          if (preventDefault) {
            event.preventDefault();
          }

          triggerEvent(event);
        }
      });
    };

    document.addEventListener("keydown", keydownListener);
    return () => {
      document.removeEventListener("keydown", keydownListener);
    };
  }, [keyPressItems, tagsToIgnore, triggerOnContentEditable]);
}

function shouldFireEvent(event: KeyboardEvent, tagsToIgnore: string[], triggerOnContentEditable: boolean): boolean {
  const target = event.target as HTMLElement;
  return !((target.isContentEditable && !triggerOnContentEditable) || tagsToIgnore.includes(target.tagName));
}

export { useKeyPress, type KeyPressItem, type KeysInput };
