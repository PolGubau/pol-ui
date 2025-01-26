import { renderHook } from "@testing-library/react";
import { act } from "react";
import { describe, expect, it, vi } from "vitest";
import { useWatchLocalStorage } from "./use-watch-localstorage-value";

describe("useWatchLocalStorage", () => {
  it("triggers onChange when the watched key changes in localStorage", () => {
    const onChange = vi.fn();
    const watchKey = "testKey";

    renderHook(() =>
      useWatchLocalStorage({
        key: watchKey,
        onChange,
      }),
    );

    // Simulate a change to localStorage that matches the watchKey
    act(() => {
      localStorage.setItem(watchKey, "newValue");
      window.dispatchEvent(new StorageEvent("storage", { key: watchKey, newValue: "newValue" }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("newValue");
  });

  it("does not trigger onChange when the watched key does not change in localStorage", () => {
    const onChange = vi.fn();
    const watchKey = "testKey";

    renderHook(() =>
      useWatchLocalStorage({
        key: watchKey,
        onChange,
      }),
    );

    // Simulate a change to localStorage with a different key
    act(() => {
      localStorage.setItem("otherKey", "otherValue");
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "otherKey",
          newValue: "otherValue",
        }),
      );
    });

    expect(onChange).toHaveBeenCalledTimes(0); // onChange should not be called
  });

  it("removes the event listener on unmount", () => {
    const onChange = vi.fn();
    const watchKey = "testKey";

    const { unmount } = renderHook(() =>
      useWatchLocalStorage({
        key: watchKey,
        onChange,
      }),
    );

    // Simulate a change to localStorage that matches the watchKey
    act(() => {
      localStorage.setItem(watchKey, "newValue");
      window.dispatchEvent(new StorageEvent("storage", { key: watchKey, newValue: "newValue" }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);

    // Unmount the hook and simulate another change
    unmount();
    act(() => {
      localStorage.setItem(watchKey, "newValue2");
      window.dispatchEvent(new StorageEvent("storage", { key: watchKey, newValue: "newValue2" }));
    });

    expect(onChange).toHaveBeenCalledTimes(1); // onChange should not be triggered after unmount
  });
});
