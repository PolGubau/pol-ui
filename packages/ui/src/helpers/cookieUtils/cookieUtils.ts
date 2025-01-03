// cookieUtils.ts
/**
 * Sets a cookie with the specified name, value, and optional expiration in days.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value to be stored in the cookie.
 * @param {number} [days] - Optional number of days until the cookie expires.
 */
export const setCookie = (name: string, value: string, days?: number): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + (days ?? 0));

  const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : "");
  document.cookie = `${name}=${cookieValue}; path=/`;
};

/**
 * Retrieves the value of a cookie by its name.
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string|null} The value of the cookie if found, or null if not found.
 */
export const getCookie = (name: string): string | undefined => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue ?? "");
    }
  }
  return undefined;
};
/**
 * Deletes a cookie by setting its expiration date to the past.
 * @param {string} name - The name of the cookie to delete.
 */
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
