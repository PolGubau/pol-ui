import { describe, expect, it } from "vitest";
import { generateUUID } from "./generate-uuid";

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const hexaRegex = /^[0-9a-f-]+$/;
describe("generateUUID", () => {
  it("should generate a UUID of the correct format without a limit", () => {
    const uuid = generateUUID();
    expect(uuid).toMatch(uuidRegex);
    expect(uuid.length).toBe(36); // Standard UUID length
  });

  it("should generate a UUID limited to the specified number of characters", () => {
    const limit = 10;
    const uuid = generateUUID(limit);
    expect(uuid.length).toBe(limit);
    expect(uuid).toMatch(hexaRegex); // Only hexadecimal characters and dashes
  });

  it("should return an empty string if the limit is 0", () => {
    const uuid = generateUUID(0);
    expect(uuid).toBe("");
  });

  it("should return a valid partial UUID if the limit is less than 36", () => {
    const limit = 15;
    const uuid = generateUUID(limit);
    expect(uuid.length).toBe(limit);
    expect(uuid).toMatch(hexaRegex); // Only hexadecimal characters and dashes
  });

  it("should return a complete UUID if the limit is greater than or equal to 36", () => {
    const limit = 50;
    const uuid = generateUUID(limit);
    expect(uuid.length).toBe(36); // Full UUID length
    expect(uuid).toMatch(uuidRegex);
  });

  it("should correctly handle edge cases for limits within hyphen positions", () => {
    const limit = 8; // Cuts through the first part of the UUID
    const uuid = generateUUID(limit);
    expect(uuid.length).toBe(limit);
    expect(uuid).toMatch(hexaRegex); // Only hexadecimal characters and dashes
  });
});
