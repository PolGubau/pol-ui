import { describe, expect, it, vi } from "vitest";
import { debounce } from "./debounce"; // Make sure the import path is correct

describe("debounce", () => {
  it("should execute the function after the specified delay", async () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    // Call the debounced function
    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    // Wait slightly longer than the delay
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Now it should have been called
    expect(fn).toHaveBeenCalled();
  });

  it("should cancel the function execution if called before the delay is over", async () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    // Call the function multiple times quickly
    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Wait after the delay
    await new Promise((resolve) => setTimeout(resolve, 150));

    // The function should only have been called once
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should execute the function only after the final delay after multiple calls", async () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    // Call the function several times within the delay period
    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Wait longer than the delay to ensure the last call is executed
    await new Promise((resolve) => setTimeout(resolve, 200));

    // The function should have been executed only once
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should not execute the function if not called before the delay", async () => {
    const fn = vi.fn();

    // Do not call the debounced function

    // Wait longer than the delay
    await new Promise((resolve) => setTimeout(resolve, 150));

    // The function should not have been called
    expect(fn).not.toHaveBeenCalled();
  });
});
