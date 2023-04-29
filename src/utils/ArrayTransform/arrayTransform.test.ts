import { getRandomFromArray } from "./arrayTransform";

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("getRandomFromArray", () => {
  it("returns one random item from the array", () => {
    const result = getRandomFromArray(testArray);
    expect(testArray).toContain(result[0]);
    expect(result.length).toBe(1);
  });

  it("returns two random items from the array", () => {
    const result = getRandomFromArray(testArray, 2);
    expect(result.length).toBe(2);
    expect(testArray).toContain(result[0]);
    expect(testArray).toContain(result[1]);
    expect(result[0]).not.toBe(result[1]);
  });

  it("returns the entire array when requesting more items than are in the array", () => {
    const result = getRandomFromArray(testArray, 20);
    expect(result.length).toBe(testArray.length);
    expect(result).toEqual(expect.arrayContaining(testArray));
  });
});
