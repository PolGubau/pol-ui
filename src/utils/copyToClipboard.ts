export const copyToClipboard = (text: string | number) => {
  try {
    const toCopy = text.toString();
    navigator.clipboard.writeText(toCopy);
    alert(`${text} copied to clipboard`);
  } catch (err) {
    alert(`Error copying to clipboard: ${err}`);
  }
};
