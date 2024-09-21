"use client"

import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"

const Directions = {
  STATIC: 0,
  FORWARD: 1,
  BACKWARD: -1,
} as const
type Direction = (typeof Directions)[keyof typeof Directions]

interface UseStepActions {
  goToNextStep: () => void
  goToPrevStep: () => void
  reset: () => void
  canGoToNextStep: boolean
  canGoToPrevStep: boolean
  setStep: Dispatch<SetStateAction<number>>
  direction: Direction
}

type SetStepCallbackType = (step: number | ((step: number) => number)) => void

export function useStep(
  maxStep: number,
  startingStep: number = 1
): [number, UseStepActions] {
  const [currentStep, setCurrentStep] = useState(startingStep)

  /**
   * Direction is used to determine if the user is going forward or backward
   * If 0 = no direction
   * If 1 = forward
   * If -1 = backward
   */
  const [direction, setDirection] = useState<Direction>(1)
  const canGoToNextStep = currentStep + 1 <= maxStep
  const canGoToPrevStep = currentStep - 1 > 0

  const setStep = useCallback<SetStepCallbackType>(
    (step) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step

      setDirection(newStep > currentStep ? 1 : -1)

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep)
        return
      }

      throw new Error("Step not valid")
    },
    [maxStep, currentStep]
  )

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setDirection(1)
      setCurrentStep((step) => step + 1)
    }
  }, [canGoToNextStep])

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setDirection(-1)
      setCurrentStep((step) => step - 1)
    }
  }, [canGoToPrevStep])

  const reset = useCallback(() => {
    setDirection(0)
    setCurrentStep(1)
  }, [])

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
      direction,
    },
  ]
}
