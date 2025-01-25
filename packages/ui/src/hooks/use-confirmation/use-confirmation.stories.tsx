import type { Meta } from "@storybook/react";

import { Button, Toaster, toast } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useConfirmation } from "./use-confirmation";

export default {
  title: "Hooks/useConfirmation",
  component: PoluiProvider,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
export const Default: React.FC = () => {
  const { isUnlocked, triggerSafeClick } = useConfirmation(() => {
    toast("Action confirmed");
  }, 5000);

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>Double-click Confirmation Example</h1>
      <Button onClick={triggerSafeClick} color={isUnlocked ? "error" : "secondary"}>
        {isUnlocked ? "Confirm action" : "Click twice to confirm"}
      </Button>
    </div>
  );
};
