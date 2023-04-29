export const getRandomFromArray = <T>(array: T[], amount: number = 1): T[] => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  const selectedItems = shuffledArray.slice(0, amount);

  return selectedItems;
};

/**
 * Shuffles the elements of an array randomly.
 *
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 * @template T
 */
export const shuffleArray = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);
