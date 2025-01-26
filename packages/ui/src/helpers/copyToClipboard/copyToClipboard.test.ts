import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { copyToClipboard } from "./copyToClipboard";

describe("copyToClipboard", () => {
  let originalClipboard: Clipboard;

  beforeAll(() => {
    originalClipboard = { ...global.navigator.clipboard };
  });

  afterEach(() => {
    // Restore the original clipboard after each test
    Object.defineProperty(global.navigator, "clipboard", {
      value: originalClipboard,
      writable: true,
    });
  });

  it("debería copiar el texto al portapapeles cuando se soporta clipboard", async () => {
    // Mock de navigator.clipboard.writeText
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(global.navigator, "clipboard", {
      value: { writeText: writeTextMock },
      writable: true,
    });

    const text = "Texto a copiar";
    await copyToClipboard(text);

    expect(writeTextMock).toHaveBeenCalledWith(text);
  });

  it("debería lanzar un warning si clipboard no está soportado", async () => {
    // Simulate clipboard not supported
    Object.defineProperty(global.navigator, "clipboard", {
      value: undefined,
      writable: true,
    });

    const consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => null);

    await copyToClipboard("Texto a copiar");

    expect(consoleWarnMock).toHaveBeenCalledWith("Clipboard not supported");
  });

  it("debería manejar un error cuando writeText falle", async () => {
    // Mock de navigator.clipboard.writeText para que falle
    const writeTextMock = vi.fn().mockRejectedValue(new Error("Error al copiar"));
    Object.defineProperty(global.navigator, "clipboard", {
      value: { writeText: writeTextMock },
      writable: true,
    });

    const text = "Texto a copiar";
    await expect(copyToClipboard(text)).rejects.toThrowError("Error al copiar");
  });
});
