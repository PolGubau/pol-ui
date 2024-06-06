import { describe, expect, test } from 'vitest'
import { encrypt, decrypt } from './encryption'

describe('Encryption and Decryption Functions', () => {
  const textToEncrypt = 'Hello, World!'
  const encryptionKey = 'mysecretkey'

  test('Encrypts and decrypts correctly', () => {
    const encryptedText = encrypt(textToEncrypt, encryptionKey)
    const decryptedText = decrypt(encryptedText, encryptionKey)

    expect(decryptedText).toBe(textToEncrypt)
  })

  test('Encryption is reversible', () => {
    const encryptedText = encrypt(textToEncrypt, encryptionKey)
    const decryptedText = decrypt(encryptedText, encryptionKey)

    expect(encryptedText).not.toBe(textToEncrypt)
    expect(decryptedText).toBe(textToEncrypt)
  })
})
