import { expect, test } from "vitest";
import { limitArray } from "./limit-array";

test("limitArray function tests", () => {
  const inputArray: number[] = [1, 2, 3, 4, 5];
  const result = limitArray(inputArray);

  expect(result.limitedArray.length).toEqual(3);
  expect(result.remaining).toEqual(2);

  // Test if the limitedArray contains the first 3 elements of inputArray
  expect(result.limitedArray).toEqual([1, 2, 3]);

  // Test with custom limit
  const customResult = limitArray(inputArray, 2);
  expect(customResult.limitedArray.length).toEqual(2);
  expect(customResult.remaining).toEqual(3);
  expect(customResult.limitedArray).toEqual([1, 2]);
});
