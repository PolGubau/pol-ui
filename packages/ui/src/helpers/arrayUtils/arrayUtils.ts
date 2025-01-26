/**
 * Returns the first element of an array
 * @param arr
 * @returns the first element of the array
 * @example first([1, 2, 3]) // 1
 */
export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

/**
 * Returns the last element of an array
 * @param arr
 * @returns the last element of the array
 * @example last([1, 2, 3]) // 3
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

/**
 * Removes the element at the specified index from the array.
 * This modifies the original array.
 * @param arr - The array from which to remove the element.
 * @param index - The index of the element to remove.
 * @returns The modified array with the element removed.
 * @example remove([1, 2, 3], 1) // [1, 3]
 */
export function remove<T>(arr: T[], index: number): T[] {
  // Adjust the index if it's negative
  const adjustedIndex = index < 0 ? arr.length + index : index;

  // If the adjusted index is out of bounds, return the original array
  if (adjustedIndex < 0 || adjustedIndex >= arr.length) {
    return arr;
  }

  // Remove the element at the specified index
  arr.splice(adjustedIndex, 1);
  return arr;
}

/**
 * Removes the first element of an array
 * @param arr
 * @returns a new array without the first element
 * @example removeFirst([1, 2, 3]) // [2, 3]
 */
export function removeFirst<T>(arr: T[]): T[] {
  return arr.slice(1);
}

/**
 * Removes the last element of an array
 * @param arr
 * @returns a new array without the last element
 * @example removeLast([1, 2, 3]) // [1, 2]
 */
export function removeLast<T>(arr: T[]): T[] {
  return arr.slice(0, arr.length - 1);
}

/**
 * Chunk an array into smaller arrays of a specified size
 * @param data - the array to chunk
 * @param size - the size of each chunk (default 10)
 * @returns an array of smaller arrays (data[])
 */
export const chunk = <T>(data: T[], size = 10): T[][] => {
  return data.reduce((chunks: T[][], item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};
