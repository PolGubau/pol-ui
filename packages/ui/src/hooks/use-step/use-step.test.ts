import { renderHook } from "@testing-library/react";
import { act } from "react";
import { describe, expect, it } from "vitest";
import { useStep } from "./use-step";

describe("useStep", () => {
  it("initializes with the correct step", () => {
    const { result } = renderHook(() => useStep(5));
    expect(result.current[0]).toBe(0); // Default minStep is 0
  });

  it("sets the step correctly when setStep is called", () => {
    const { result } = renderHook(() => useStep(5));

    act(() => {
      result.current[1].setStep(2); // Setting step directly
    });

    expect(result.current[0]).toBe(2);
  });

  it("throws an error when setting an invalid step", () => {
    const { result } = renderHook(() => useStep(5));

    expect(() => {
      act(() => {
        result.current[1].setStep(6); // Invalid step (greater than max)
      });
    }).toThrowError("Step not valid");

    expect(() => {
      act(() => {
        result.current[1].setStep(-1); // Invalid step (less than min)
      });
    }).toThrowError("Step not valid");
  });

  it("goes to the next step if possible", () => {
    const { result } = renderHook(() => useStep(5));

    act(() => {
      result.current[1].goToNextStep();
    });

    expect(result.current[0]).toBe(1); // Should go to step 1 (minStep 0)
  });

  it("does not go to the next step if already at the max step", () => {
    const { result } = renderHook(() => useStep(1));

    act(() => {
      result.current[1].goToNextStep(); // Max step is 1, can't go beyond
    });

    expect(result.current[0]).toBe(0); // Should remain at step 0
  });

  it("goes to the previous step if possible", () => {
    const { result } = renderHook(() => useStep(5, 0, 1));

    act(() => {
      result.current[1].goToNextStep(); // Go to step 1
    });

    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1].goToPrevStep(); // Now go back to step 0
    });

    expect(result.current[0]).toBe(0);
  });
  it("correctly handles the case where step is a function", () => {
    const { result } = renderHook(() => useStep(5));

    // Define step as a function that increments the current step
    act(() => {
      result.current[1].setStep((prevStep) => prevStep + 2); // Increase step by 2
    });

    expect(result.current[0]).toBe(2); // The step should now be 2 (0 + 2)

    // Define step as a function that sets it to the previous step
    act(() => {
      result.current[1].setStep((prevStep) => prevStep - 1); // Decrease step by 1
    });

    expect(result.current[0]).toBe(1); // The step should now be 1 (2 - 1)

    // Try an invalid step with a function that would go below minStep
    expect(() => {
      act(() => {
        result.current[1].setStep((prevStep) => prevStep - 2); // Invalid step (goes below 0)
      });
    }).toThrowError("Step not valid");
  });
  it("does not go to the previous step if already at the min step", () => {
    const { result } = renderHook(() => useStep(5));

    act(() => {
      result.current[1].goToPrevStep(); // Min step is 0, can't go below
    });

    expect(result.current[0]).toBe(0); // Should remain at step 0
  });

  it("resets to the min step", () => {
    const { result } = renderHook(() => useStep(5));

    act(() => {
      result.current[1].setStep(3); // Set step to 3
    });

    expect(result.current[0]).toBe(3);

    act(() => {
      result.current[1].reset(); // Reset the step
    });

    expect(result.current[0]).toBe(0); // Should go back to minStep
  });

  it("correctly determines if next and previous steps are possible", () => {
    const { result } = renderHook(() => useStep(5));

    expect(result.current[1].canGoToNextStep).toBe(true);
    expect(result.current[1].canGoToPrevStep).toBe(false);

    act(() => {
      result.current[1].goToNextStep();
    });

    expect(result.current[1].canGoToNextStep).toBe(true);
    expect(result.current[1].canGoToPrevStep).toBe(true);

    act(() => {
      result.current[1].setStep(5);
    });

    expect(result.current[1].canGoToNextStep).toBe(false);
    expect(result.current[1].canGoToPrevStep).toBe(true);
  });
});
