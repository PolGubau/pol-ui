import { expect, it } from "vitest";
import { describe } from "vitest";
import { clsx } from "./clsx";

const fn = clsx;

it("strings", () => {
  expect(fn("")).toBe("");
  expect(fn("foo")).toBe("foo");
  expect(fn(true && "foo")).toBe("foo");
});

it("strings (variadic)", () => {
  expect(fn("")).toBe("");
  expect(fn("foo", "bar")).toBe("foo bar");
  expect(fn(true && "foo", false && "bar", "baz")).toBe("foo baz");
  expect(fn(false && "foo", "bar", "baz", "")).toBe("bar baz");
});

it("numbers", () => {
  expect(fn(1)).toBe("1");
  expect(fn(12)).toBe("12");
  expect(fn(0.1)).toBe("0.1");
  expect(fn(0)).toBe("");

  expect(fn(Number.POSITIVE_INFINITY)).toBe("Infinity");
  expect(fn(Number.NaN)).toBe("");
});

it("numbers (variadic)", () => {
  expect(fn(0, 1)).toBe("1");
  expect(fn(1, 2)).toBe("1 2");
});

it("objects", () => {
  expect(fn({})).toBe("");
  expect(fn({ foo: true })).toBe("foo");
  expect(fn({ foo: true, bar: false })).toBe("foo");
  expect(fn({ foo: "hiya", bar: 1 })).toBe("foo bar");
  expect(fn({ foo: 1, bar: 0, baz: 1 })).toBe("foo baz");
  expect(fn({ "-foo": 1, "--bar": 1 })).toBe("-foo --bar");
});

it("objects (variadic)", () => {
  expect(fn({}, {})).toBe("");
  expect(fn({ foo: 1 }, { bar: 2 })).toBe("foo bar");
  expect(fn({ foo: 1 }, null, { baz: 1, bat: 0 })).toBe("foo baz");
  expect(fn({ foo: 1 }, {}, {}, { bar: "a" }, { baz: null, bat: Number.POSITIVE_INFINITY })).toBe("foo bar bat");
});

it("arrays", () => {
  expect(fn([])).toBe("");
  expect(fn(["foo"])).toBe("foo");
  expect(fn(["foo", "bar"])).toBe("foo bar");
  expect(fn(["foo", 0 && "bar", 1 && "baz"])).toBe("foo baz");
});

it("arrays (nested)", () => {
  expect(fn([[[]]])).toBe("");
  expect(fn([[["foo"]]])).toBe("foo");
  expect(fn([true, [["foo"]]])).toBe("foo");
  expect(fn(["foo", ["bar", ["", [["baz"]]]]])).toBe("foo bar baz");
});

it("arrays (variadic)", () => {
  expect(fn([], [])).toBe("");
  expect(fn(["foo"], ["bar"])).toBe("foo bar");
  expect(fn(["foo"], null, ["baz", ""], true, "", [])).toBe("foo baz");
});

it("arrays (no `push` escape)", () => {
  expect(fn({ push: 1 })).toBe("push");
  expect(fn({ pop: true })).toBe("pop");
  expect(fn({ push: true })).toBe("push");
  expect(fn("hello", { world: 1, push: true })).toBe("hello world push");
});

describe("clsx compatibility", () => {
  it("keeps object keys with truthy values", () => {
    const out = clsx({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 });
    expect(out).toBe("a f");
  });

  it("joins arrays of class names and ignores falsy values", () => {
    const out = clsx("a", 0, null, undefined, true, 1, "b");
    expect(out).toBe("a 1 b");
  });

  it("supports heterogeneous arguments", () => {
    expect(clsx({ a: true }, "b", 0)).toBe("a b");
  });

  it("should be trimmed", () => {
    expect(clsx("", "b", {}, "")).toBe("b");
  });

  it("returns an empty string for an empty configuration", () => {
    expect(clsx({})).toBe("");
  });

  it("supports an array of class names", () => {
    expect(clsx(["a", "b"])).toBe("a b");
  });

  it("joins array arguments with string arguments", () => {
    expect(clsx(["a", "b"], "c")).toBe("a b c");
    expect(clsx("c", ["a", "b"])).toBe("c a b");
  });

  it("handles multiple array arguments", () => {
    expect(clsx(["a", "b"], ["c", "d"])).toBe("a b c d");
  });

  it("handles arrays that include falsy and true values", () => {
    expect(clsx(["a", 0, null, undefined, false, true, "b"])).toBe("a b");
  });

  it("handles arrays that include arrays", () => {
    expect(clsx(["a", ["b", "c"]])).toBe("a b c");
  });

  it("handles arrays that include objects", () => {
    expect(clsx(["a", { b: true, c: false }])).toBe("a b");
  });

  it("handles deep array recursion", () => {
    expect(clsx(["a", ["b", ["c", { d: true }]]])).toBe("a b c d");
  });

  it("handles arrays that are empty", () => {
    expect(clsx("a", [])).toBe("a");
  });

  it("handles nested arrays that have empty nested arrays", () => {
    expect(clsx("a", [[]])).toBe("a");
  });

  it("handles all types of truthy and falsy property values as expected", () => {
    const out = clsx({
      // falsy:
      null: null,
      emptyString: "",
      noNumber: Number.NaN,
      zero: 0,
      negativeZero: -0,
      false: false,
      undefined: undefined,

      // truthy (literally anything else):
      nonEmptyString: "foobar",
      whitespace: " ",
      function: Object.prototype.toString,
      emptyObject: {},
      nonEmptyObject: { a: 1, b: 2 },
      emptyList: [],
      nonEmptyList: [1, 2, 3],
      greaterZero: 1,
    });

    expect(out).toBe(
      "nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero",
    );
  });
});
