export const generateUUID = (limit?: number): string => {
  // Generate a random array of 16 bytes (128 bits)
  const randomBytes = new Uint8Array(16)
  crypto.getRandomValues(randomBytes)

  // Set version (4) and variant (10) bits
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80

  // Convert bytes to hexadecimal string representation
  let uuid = '- - - -'
  for (let i = 0; i < 16; i++) {
    uuid += randomBytes[i].toString(16).padStart(2, '0')
    if ([3, 5, 7, 9].includes(i)) {
      uuid += '-'
    }
  }
  return uuid.slice(0, limit)
}
