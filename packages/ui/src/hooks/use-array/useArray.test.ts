import { renderHook } from "@testing-library/react";
import { act } from "react";
import { describe, expect, it, vi } from "vitest";
import { useArray } from "./use-array";

describe("useArray", () => {
  it("should initialize the array with the given default value", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));

    // Verify that the array is initialized with the correct values
    expect(result.current.array).toEqual([1, 2, 3]);
  });

  it("should update the array when using the set function", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));

    // Update the array using the set function
    act(() => {
      result.current.set([4, 5, 6]);
    });

    // Verify that the array is correctly updated
    expect(result.current.array).toEqual([4, 5, 6]);
  });

  it("should push a new element to the array", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));

    // Push a new element to the array
    act(() => {
      result.current.push(4);
    });

    // Verify that the new element is added to the array
    expect(result.current.array).toEqual([1, 2, 3, 4]);
  });

  it("should filter the array based on the callback", () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4, 5]));

    // Filter elements greater than 3
    act(() => {
      result.current.filter((element) => element > 3);
    });

    // Verify that the array is correctly filtered
    expect(result.current.array).toEqual([4, 5]);
  });

  it("should update an element at a specific index", () => {
    const { result } = renderHook(() => useArray([1, 2, 3]));

    // Update the element at index 1
    act(() => {
      result.current.update(1, 5);
    });

    // Verify that the element at index 1 is updated
    expect(result.current.array).toEqual([1, 5, 3]);
  });

  it("should remove an element at a specific index", () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4]));

    // Remove the element at index 2
    act(() => {
      result.current.remove(2);
    });

    // Verify that the element at index 2 is removed
    expect(result.current.array).toEqual([1, 2, 4]);
  });

  it("should clear the array", () => {
    const { result } = renderHook(() => useArray([1, 2, 3, 4]));

    // Clear the array
    act(() => {
      result.current.clear();
    });

    // Verify that the array is empty
    expect(result.current.array).toEqual([]);
  });

  it("should call the callback function when the array is updated", () => {
    const mockCallback = vi.fn(); // Create a mock function
    const { result } = renderHook(() => useArray([1, 2, 3], mockCallback));

    // Update the array using the set function
    act(() => {
      result.current.set([4, 5, 6]);
    });

    // Verify that the callback was called with the updated array
    expect(mockCallback).toHaveBeenCalledWith([4, 5, 6]);
  });

  it("should call the callback when pushing a new element", () => {
    const mockCallback = vi.fn(); // Create a mock function
    const { result } = renderHook(() => useArray([1, 2, 3], mockCallback));

    // Push a new element to the array
    act(() => {
      result.current.push(4);
    });

    // Verify that the callback was called with the updated array
    expect(mockCallback).toHaveBeenCalledWith([1, 2, 3, 4]);
  });
});
