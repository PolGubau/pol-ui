const encoder = new TextEncoder();
const decoder = new TextDecoder();

async function getKey(key: string): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(key.padEnd(32, " ").slice(0, 32)),
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
  return keyMaterial;
}

/**
 * Encrypts a text using AES-GCM.
 * @param text - Text to encrypt
 * @param key - Key to encrypt the text
 * @returns Encrypted text in base64
 */
export async function encrypt(text: string, key: string): Promise<string> {
  const keyMaterial = await getKey(key);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, keyMaterial, encoder.encode(text));
  return btoa(String.fromCharCode(...iv, ...new Uint8Array(encrypted)));
}

/**
 * Decrypts an encrypted text using AES-GCM.
 * @param encryptedText - Encrypted text in base64
 * @param key - Key to decrypt the text
 * @returns Decrypted text
 */
export async function decrypt(encryptedText: string, key: string): Promise<string> {
  const keyMaterial = await getKey(key);
  const data = Uint8Array.from(atob(encryptedText), (c) => c.charCodeAt(0));
  const iv = data.slice(0, 12);
  const encryptedData = data.slice(12);
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, keyMaterial, encryptedData);
  return decoder.decode(decrypted);
}
