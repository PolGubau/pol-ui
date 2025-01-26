"use client";

import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

interface UseStepActions {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: Dispatch<SetStateAction<number>>;
}

type SetStepCallbackType = (step: number | ((step: number) => number)) => void;

/**
 * Custom hook to manage steps in a wizard
 * @param maxStep The maximum step
 * @param minStep The minimum step (default 0)
 * @param step The initial step (default 1)
 * @returns The current step and the actions to manage the steps
 */
export function useStep(maxStep: number, minStep = 0, step = 1): [number, UseStepActions] {
  const [currentStep, setCurrentStep] = useState(minStep);

  const canGoToNextStep = currentStep + step + 1 <= maxStep;
  const canGoToPrevStep = currentStep - step >= minStep;

  const setStep = useCallback<SetStepCallbackType>(
    (step) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step;

      if (newStep >= minStep && newStep <= maxStep) {
        setCurrentStep(newStep);
        return;
      }

      throw new Error("Step not valid");
    },
    [maxStep, currentStep, minStep],
  );

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((s) => s + step);
    }
  }, [canGoToNextStep, step]);

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((s) => s - step);
    }
  }, [canGoToPrevStep, step]);

  const reset = useCallback(() => {
    setCurrentStep(minStep);
  }, [minStep]);

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ];
}
