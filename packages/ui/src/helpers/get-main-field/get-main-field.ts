import { DEFAULT_KEYS } from "../../constants";

/**
 * Retrieves the main field from an item object based on a predefined list of labels to highlight.
 *
 * @param item - The item object from which to extract the main field.
 * @returns An object containing the key and value of the main field.
 *
 * The function searches for the first label in the `labelsToHighlight` array that exists in the item object.
 * If a label is found, it returns an object with the label as the key and the corresponding value from the item.
 * If no label is found, it returns the first key-value pair from the item object.
 */
export const getMainField = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  item: Record<string, any>,
): {
  key: string;
  value: string;
} => {
  // search for the first time a label is found in labelsToHighlight (1st position has preference over 2nd position)

  const label = DEFAULT_KEYS.find((label) => {
    const value = item?.[label];
    if (value) {
      return true;
    }
  });

  if (label) {
    const value = item[label];
    return { key: label, value };
  }

  const object = {
    key: Object.keys(item)[0],
    value: item[Object.keys(item)[0] as string],
  };

  return object;
};
