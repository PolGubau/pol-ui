import { assert, test } from "vitest";
import { isEqual } from "./is-equal";

test("isEqual should return true for equal arrays", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  assert.isTrue(isEqual(array1, array2));
});

test("isEqual should return false for arrays with different elements", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 4];
  assert.isFalse(isEqual(array1, array2));
});

test("isEqual should return false for arrays with different lengths", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3, 4];
  assert.isFalse(isEqual(array1, array2));
});
