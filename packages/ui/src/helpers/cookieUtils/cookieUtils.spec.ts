// cookieUtils.test.ts

import { beforeEach, describe, expect, test } from "vitest";

import { deleteCookie, getCookie, setCookie } from "./cookieUtils";

describe("Cookie Utils", () => {
  beforeEach(() => {
    document.cookie = ""; // Clear all cookies before each test
  });

  test("setCookie should set a cookie with the specified name and value", () => {
    setCookie("testCookie", "cookieValue");
    expect(document.cookie).toContain("testCookie=cookieValue");
  });

  test("getCookie should return the value of an existing cookie", () => {
    document.cookie = "existingCookie=existingValue";
    const value = getCookie("existingCookie");
    expect(value).toBe("existingValue");
  });

  test("getCookie should return null for a non-existing cookie", () => {
    const value = getCookie("nonExistingCookie");
    expect(value).toBeUndefined();
  });

  test("deleteCookie should delete an existing cookie", () => {
    document.cookie = "toBeDeletedCookie=toBeDeletedValue";
    deleteCookie("toBeDeletedCookie");
    expect(document.cookie).not.toContain("toBeDeletedCookie");
  });
});
