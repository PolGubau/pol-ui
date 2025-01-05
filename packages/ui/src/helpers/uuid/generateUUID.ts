export const generateUUID = (limit?: number): string => {
  if (typeof crypto === "undefined" || !crypto.getRandomValues) {
    throw new Error("crypto.getRandomValues is not available in this environment");
  }

  // Generate a random array of 16 bytes (128 bits)
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);

  const randomBytes6 = randomBytes[6];
  const randomBytes8 = randomBytes[8];

  if (!(randomBytes6 && randomBytes8)) {
    throw new Error("Uint8Array is not available in this environment");
  }

  // Set version (4) and variant (10) bits
  randomBytes[6] = (randomBytes6 & 0x0f) | 0x40;
  randomBytes[8] = (randomBytes8 & 0x3f) | 0x80;

  // Convert bytes to hexadecimal string representation
  let uuid = "- - - -";

  if (!randomBytes) {
    return uuid.slice(0, limit);
  }
  for (let i = 0; i < 16; i++) {
    const byte = randomBytes[i];
    if (!byte) {
      return uuid.slice(0, limit);
    }
    uuid += byte.toString(16).padStart(2, "0");
    if ([3, 5, 7, 9].includes(i)) {
      uuid += "-";
    }
  }
  return uuid.slice(0, limit);
};
