/**
 * Limit array to a certain number of elements and return the remaining count.
 * It is useful for displaying the first few elements and showing the remaining count.
 * @param arr <T>[]
 * @param limit number
 * @returns  { limitedArray: T[], remaining: number }
 */
export const limitArray = <T>(arr: T[], limit = 3): { limitedArray: T[]; remaining: number } => {
  const limitedArray = arr.slice(0, limit);
  const remaining = arr.length - limit;

  return {
    limitedArray,
    remaining,
  };
};
