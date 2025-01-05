import { DEFAULT_KEYS } from "@/constants";

export type GetMainFieldType = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  item: Record<string, any>,
  preferenceLabels?: string[],
) => {
  key: string;
  value: string;
};
export const getMainField: GetMainFieldType = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  item: Record<string, any>,
  preferenceLabels,
) => {
  // search for the first time a label is found in labelsToHighlight (1st position has preference over 2nd position)
  const lth = preferenceLabels ?? DEFAULT_KEYS;
  const label = lth.find((label) => Boolean(item[label]));

  if (label) {
    const value = item[label];
    return { key: label, value };
  }

  const object = {
    key: Object.keys(item)[0] as string,
    value: item[Object.keys(item)[0] as string],
  };

  return object;
};
