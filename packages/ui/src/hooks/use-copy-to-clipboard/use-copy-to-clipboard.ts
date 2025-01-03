import { useCallback, useEffect, useRef, useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

type UseCopyToClipboardProps = {
  isCopiedDelay?: number;
  onCopySuccess?: (text: string) => void;
  onCopyFailure?: (error: Error) => void;
  clearCopiedTextOnUnmount?: boolean;
};

type UseCopyToClipboard = {
  copiedText: CopiedValue;
  copy: CopyFn;
  isCopied: boolean;
};

/**
 * Custom hook to copy text to the clipboard and manage the copied state.
 * @param {number} [isCopiedDelay=2000] - The duration to keep the copied state active. Default is 2000 milliseconds.
 * @param {function} [onCopySuccess] - Optional callback for when text is successfully copied to the clipboard.
 * @param {function} [onCopyFailure] - Optional callback for when the copy fails.
 * @param {boolean} [clearCopiedTextOnUnmount] - Option to clear copied text on component unmount.

 * @returns {UseCopyToClipboard} An object with the copied text, a function to copy text to the clipboard, and a boolean indicating if the text was copied.
 */
export function useCopyToClipboard(props?: UseCopyToClipboardProps): UseCopyToClipboard {
  const { isCopiedDelay = 2000, onCopyFailure, onCopySuccess, clearCopiedTextOnUnmount = false } = props || {};
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Ref to store the timeout ID
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // UseEffect to handle delay for `isCopied`
  useEffect(() => {
    if (!isCopied) {
      return;
    }

    // Clear previous timeout to avoid multiple timeouts running simultaneously
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, isCopiedDelay);

    // Clean up timeout on unmount or when isCopied changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isCopied, isCopiedDelay]);

  useEffect(() => {
    // Clear copiedText when unmounting if `clearCopiedTextOnUnmount` is true
    if (clearCopiedTextOnUnmount) {
      return () => setCopiedText(null);
    }
    return undefined;
  }, [clearCopiedTextOnUnmount]);

  const copy: CopyFn = useCallback(async (text) => {
    // Check if the clipboard API is available
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      console.warn("Clipboard API is not supported in this browser.");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);
      // Trigger success callback
      onCopySuccess?.(text);
      return true;
    } catch (error) {
      console.warn("Failed to copy text:", error);
      setCopiedText(null);
      setIsCopied(false);
      if (error instanceof Error) {
        onCopyFailure?.(error);
      }
      return false;
    }
  }, []);

  return { copiedText, copy, isCopied };
}
