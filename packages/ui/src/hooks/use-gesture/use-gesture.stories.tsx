import type { Meta } from "@storybook/react";
import { useRef } from "react";

import { Card, Toaster, toast } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { type GestureConfig, useGesture } from "./use-gesture";

export default {
  title: "Hooks/useGesture",
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
  tags: ["autodocs"],
} as Meta;

export const Default = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleSwipe: GestureConfig = {
    gesture: "zoom",
    touchCount: 1,
    callback: () => {
      toast("zoom!");
    },
    elementRef,
  };

  useGesture(handleSwipe);

  return (
    <div ref={elementRef} className="cursor-move">
      <Card>
        <p>Swipe me!</p>
      </Card>
    </div>
  );
};
