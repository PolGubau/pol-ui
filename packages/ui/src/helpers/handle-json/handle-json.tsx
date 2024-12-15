/**
 * @name parseJSON
 * @description A wrapper for "JSON.parse()"" to support "undefined" value, if fails -> throw an error
 * @param value - string | null
 * @returns T | undefined
 * Author: Pol Gubau Amores
 */

const errorLabel = "parsing error on value: ";

export function parseJSON<T>(value: string | null): T | undefined {
  try {
    if (!value) {
      return undefined;
    }
    return JSON.parse(value ?? "");
  } catch {
    console.error(errorLabel, { value });
    throw new Error(errorLabel + value);
  }
}

// A wrapper for "JSON.parse()"" to support "undefined" value
export function saveParseJson<T>(value: string | null): T | undefined {
  try {
    if (!value) {
      return undefined;
    }
    return JSON.parse(value ?? "");
  } catch {
    console.error(errorLabel, { value });
    return undefined;
  }
}

/** stringify
 * @param value - T
 * @returns string | undefined
 */

export function stringify<T>(value: T): string | undefined {
  try {
    return JSON.stringify(value);
  } catch {
    console.error(errorLabel, { value });
    return undefined;
  }
}

export const json = {
  saveParse: saveParseJson,
  parse: parseJSON,
  stringify,
};
