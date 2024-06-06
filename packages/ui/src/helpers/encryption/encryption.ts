import CryptoJS from 'crypto-js'
type WordArray = CryptoJS.lib.WordArray
type CipherParams = CryptoJS.lib.CipherParams
type stringOrWordArray = string | WordArray

/**
 * @name encrypt
 * @description Encrypts a text using a key
 * @param text {string} - Text to encrypt
 * @param key {string} - Key to encrypt the text
 * @returns {string} - Encrypted text in base64
 * @example
 * ```javascript
 * console.log(encrypt('Hello World', 'key')) // 'W1tYXV0aF1d'
 * ```
 */
export function encrypt(value: stringOrWordArray, key: stringOrWordArray): string {
  const encrypted = CryptoJS.AES.encrypt(value, key).toString()
  return encrypted
}

/**
 * @name decrypt
 * @description Decrypts an encrypted text
 * @param encryptedText {string | CipherParams} - Encrypted text to decrypt
 * @param key {string} - Key to decrypt the text
 * @returns string - Decrypted text
 * @example
 * ```javascript
 * const encryptedText = encrypt('Hello World', 'key')
 * console.log(encryptedText) // 'W1tYXV0aF1d'
 * console.log(decrypt(encryptedText, 'key')) // 'Hello World'
 * ```
 */
export const decrypt = (encryptedText: CipherParams | string, key: stringOrWordArray): string => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key)
  const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8)
  return decrypted
}
