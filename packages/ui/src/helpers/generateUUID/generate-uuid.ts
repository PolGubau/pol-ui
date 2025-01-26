export const generateUUID = (limit?: number): string => {
  // if limit is 0, return an empty string (why would you do this?)
  if (limit === 0) {
    return "";
  }

  // Generate a random array of 16 bytes (128 bits)
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);

  // Set version (4) and variant (10) bits
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

  // Map bytes to hexadecimal and insert hyphens
  const hexBytes = Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, "0"));

  // Join bytes into UUID format
  const uuid = `${hexBytes.slice(0, 4).join("")}-${hexBytes
    .slice(4, 6)
    .join("")}-${hexBytes.slice(6, 8).join("")}-${hexBytes.slice(8, 10).join("")}-${hexBytes.slice(10).join("")}`;

  // Apply the limit if provided
  return limit ? uuid.slice(0, limit) : uuid;
};
