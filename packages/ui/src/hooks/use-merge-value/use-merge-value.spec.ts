import { renderHook } from "@testing-library/react";
import { act } from "react";
import { describe, expect, it, vi } from "vitest";
import { useMergeValue } from "./use-merge-value";

describe("useMergeValue", () => {
  it("debe inicializarse con el valor por defecto en modo no controlado", () => {
    const { result } = renderHook(() => useMergeValue("default"));

    const [value] = result.current;
    expect(value).toBe("default");
  });

  it("debe permitir actualizar el valor interno en modo no controlado", () => {
    const { result } = renderHook(() => useMergeValue("default"));

    const [_, setValue] = result.current;
    act(() => {
      setValue("new value");
    });

    const [value] = result.current;
    expect(value).toBe("new value");
  });

  it("debe respetar el valor controlado cuando se proporciona", () => {
    const { result } = renderHook(() => useMergeValue("default", { value: "controlled" }));

    const [value] = result.current;
    expect(value).toBe("controlled");
  });

  it("debe llamar a `onChange` en modo controlado pero no actualizar el valor interno", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useMergeValue("default", { value: "controlled", onChange }));

    const [_, setValue] = result.current;
    act(() => {
      setValue("new value");
    });

    const [value] = result.current;
    expect(value).toBe("controlled"); // Valor controlado permanece igual.
    expect(onChange).toHaveBeenCalledWith("new value");
  });

  it("debe cambiar entre modo controlado y no controlado correctamente", () => {
    const { result, rerender } = renderHook(
      ({ controlled }: { controlled: boolean }) =>
        useMergeValue("default", controlled ? { value: "controlled" } : undefined),
      { initialProps: { controlled: false } },
    );

    // Modo no controlado
    const [initialValue, setValue] = result.current;
    expect(initialValue).toBe("default");

    act(() => {
      setValue("updated");
    });

    const [updatedValue] = result.current;
    expect(updatedValue).toBe("updated");

    // Cambiar a modo controlado
    rerender({ controlled: true });
    const [controlledValue] = result.current;
    expect(controlledValue).toBe("controlled");
  });

  it("debe manejar valores complejos (objetos) en modo no controlado", () => {
    const defaultValue = { key: "default" };
    const { result } = renderHook(() => useMergeValue(defaultValue));

    const [_, setValue] = result.current;
    act(() => {
      setValue({ key: "new value" });
    });

    const [value] = result.current;
    expect(value).toEqual({ key: "new value" });
  });

  it("debe manejar valores complejos (objetos) en modo controlado", () => {
    const controlledValue = { key: "controlled" };
    const onChange = vi.fn();
    const { result } = renderHook(() => useMergeValue({ key: "default" }, { value: controlledValue, onChange }));

    const [_, setValue] = result.current;
    act(() => {
      setValue({ key: "new value" });
    });

    const [value] = result.current;
    expect(value).toEqual(controlledValue);
    expect(onChange).toHaveBeenCalledWith({ key: "new value" });
  });
});
