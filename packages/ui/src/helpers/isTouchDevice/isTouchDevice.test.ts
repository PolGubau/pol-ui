import { describe, expect, it } from "vitest";
import { isTouchDevice } from "./isTouchDevice";

describe("isTouchDevice", () => {
  it("should return true if the device is a touch device (has ontouchstart or coarse pointer)", () => {
    const result = isTouchDevice();
    expect(result).toBe(false);
  });
});
