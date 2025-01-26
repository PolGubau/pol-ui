type CopyFn = (text: string) => void; // Return success

export const copyToClipboard: CopyFn = async (text) => {
  if (!navigator?.clipboard) {
    console.warn("Clipboard not supported");
    return false;
  }

  // Try to save to clipboard then save it in the state if worked
  await navigator.clipboard.writeText(text);
};
