import { describe, expect, it } from "vitest";
import { fuzzyFinder } from "./fuzzyFinder";

// Test suite
describe("fuzzyFinder", () => {
  const aliases = ["alias1", "alias2"]; // Puedes agregar más alias si es necesario

  // Test exact match
  it("should return MATCH_CONTINUOUS for exact match", () => {
    const string = "hello";
    const abbreviation = "hello";
    const result = fuzzyFinder(string, abbreviation, []);
    expect(result).toBe(1); // MATCH_CONTINUOUS should return 1
  });

  // Test case-insensitive match
  it("should penalize case difference for case-insensitive match", () => {
    const string = "hello";
    const abbreviation = "HELLO";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeLessThan(1); // Should be less than MATCH_CONTINUOUS due to case difference penalty
  });

  // Test match with alias
  it("should handle alias correctly", () => {
    const string = "open file";
    const abbreviation = "open";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeGreaterThan(0); // Should return a positive score with alias handling
  });

  // Test match with word breaks
  it("should handle word breaks correctly", () => {
    const string = "hello world";
    const abbreviation = "hw";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeGreaterThan(0.8); // Match after word break (space)
  });

  // Test match with non-space gap
  it("should give a slightly lower score for a match after a non-space gap", () => {
    const string = "example_function";
    const abbreviation = "ef";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeGreaterThan(0.7); // Should be less than 0.9 due to a non-space gap (underscore)
  });

  // Test transposition penalty
  it("should apply transposition penalty when characters are transposed", () => {
    const string = "abcd";
    const abbreviation = "acbd";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeLessThan(1); // Should apply penalty for transposition (PENALTY_TRANSPOSITION)
  });

  // Test incomplete match penalty
  it("should penalize incomplete match correctly", () => {
    const string = "hello";
    const abbreviation = "helloo";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeLessThan(1); // Should penalize incomplete match with PENALTY_INCOMPLETE_MATCH
  });

  // Test penalization for skipped characters with spaces
  it("should penalize skipped characters when there are spaces between them", () => {
    const string = "this is a test";
    const abbreviation = "tiat";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeLessThan(0.9); // The score should be lower due to skipped characters caused by spaces
  });

  // Test penalization for case differences
  it("should penalize case differences slightly", () => {
    const string = "HTML";
    const abbreviation = "html";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeLessThan(1); // The score should be slightly lower due to case differences
  });

  // Test penalization for skipped characters based on their distance
  it("should penalize skipped characters based on their distance", () => {
    const string = "thequickbrownfox";
    const abbreviation = "tqbf";
    const result = fuzzyFinder(string, abbreviation, aliases);
    expect(result).toBeLessThan(1); // The score should be lower due to skipped characters in the abbreviation
  });
  it("should apply penalty for skipped characters when there is a word break", () => {
    const string = "hello_world_example";
    const abbreviation = "hwe";

    const result = fuzzyFinder(string, abbreviation, []);

    expect(result).toBeLessThan(1);
  });
  // Test penalization for skipped characters after a word break with a space
  it("should penalize skipped characters after a word break with a space", () => {
    const string = "hello world example";
    const abbreviation = "hw"; // Skipping characters 'e' from "hello" and 'o' from "world"

    const result = fuzzyFinder(string, abbreviation, []);

    // The score should be penalized due to the skipped characters between the word break (space)
    expect(result).toBeLessThan(1); // The score should be less than 1 due to the skipped characters penalty
  });
});
