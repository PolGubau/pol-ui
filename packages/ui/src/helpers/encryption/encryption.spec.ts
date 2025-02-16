import { describe, expect, test } from "vitest";
import { decrypt, encrypt } from "./encryption";

describe("Encryption and Decryption Functions", () => {
  const textToEncrypt = "Hello, World!";
  const encryptionKey = "mysecretkey";

  test("Encrypts and decrypts correctly", async () => {
    const encryptedText = await encrypt(textToEncrypt, encryptionKey);
    const decryptedText = decrypt(encryptedText, encryptionKey);

    expect(decryptedText).toBe(textToEncrypt);
  });

  test("Encryption is reversible", async () => {
    const encryptedText = await encrypt(textToEncrypt, encryptionKey);
    const decryptedText = decrypt(encryptedText, encryptionKey);

    expect(encryptedText).not.toBe(textToEncrypt);
    expect(decryptedText).toBe(textToEncrypt);
  });
});
