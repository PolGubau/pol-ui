import type { Meta } from "@storybook/react";
import type React from "react";

import { Button, Toaster } from "../../components";
import { useStep } from "./use-step";

const Test = () => {
  return "test";
};

export default {
  title: "Hooks/useStep",
  component: Test,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} as Meta;
export const Default: React.FC = () => {
  const [currentStep, { goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep, setStep, reset }] = useStep(5);

  return (
    <div>
      <h1>Step Navigation</h1>
      <h2>Max count = 5</h2>
      <p>Current Step: {currentStep}</p>
      <Button onClick={goToPrevStep} disabled={!canGoToPrevStep}>
        Previous Step
      </Button>
      <Button onClick={goToNextStep} disabled={!canGoToNextStep}>
        Next Step
      </Button>
      <Button onClick={reset}>Reset</Button>
      <Button onClick={() => setStep(3)}>Go to Step 3</Button>
    </div>
  );
};
