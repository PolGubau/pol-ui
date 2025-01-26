import { describe, expect, it } from "vitest";
import { chunk, first, last, remove, removeFirst, removeLast } from "./arrayUtils";

describe("Array Utility Functions", () => {
  describe("first", () => {
    it("should return the first element of a non-empty array", () => {
      expect(first([1, 2, 3])).toBe(1);
    });

    it("should return undefined for an empty array", () => {
      expect(first([])).toBeUndefined();
    });
  });

  describe("last", () => {
    it("should return the last element of a non-empty array", () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    it("should return undefined for an empty array", () => {
      expect(last([])).toBeUndefined();
    });
  });

  describe("remove", () => {
    it("should remove the element at the specified index", () => {
      expect(remove([1, 2, 3], 1)).toEqual([1, 3]);
    });

    it("should return the same array if the index is out of bounds", () => {
      expect(remove([1, 2, 3], 5)).toEqual([1, 2, 3]);
      expect(remove([1, 2, 3], -4)).toEqual([1, 2, 3]); // Negative index out of bounds
    });

    it("should handle negative indices", () => {
      expect(remove([1, 2, 3], -1)).toEqual([1, 2]); // Removes the last element
      expect(remove([1, 2, 3], -2)).toEqual([1, 3]); // Removes the second-to-last element
      expect(remove([1, 2, 3], -3)).toEqual([2, 3]); // Removes the first element
    });
  });

  describe("removeFirst", () => {
    it("should remove the first element of the array", () => {
      expect(removeFirst([1, 2, 3])).toEqual([2, 3]);
    });

    it("should return an empty array if the input array has only one element", () => {
      expect(removeFirst([1])).toEqual([]);
    });

    it("should return an empty array if the input array is empty", () => {
      expect(removeFirst([])).toEqual([]);
    });
  });

  describe("removeLast", () => {
    it("should remove the last element of the array", () => {
      expect(removeLast([1, 2, 3])).toEqual([1, 2]);
    });

    it("should return an empty array if the input array has only one element", () => {
      expect(removeLast([1])).toEqual([]);
    });

    it("should return an empty array if the input array is empty", () => {
      expect(removeLast([])).toEqual([]);
    });
  });

  describe("chunk", () => {
    it("should chunk an array into smaller arrays of the specified size", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("should use a default chunk size of 10 if no size is specified", () => {
      expect(chunk([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]]);
    });

    it("should return an empty array if the input array is empty", () => {
      expect(chunk([], 2)).toEqual([]);
    });

    it("should handle chunk sizes larger than the array length", () => {
      expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
    });

    it("should handle a chunk size of 1 correctly", () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });
  });
});
