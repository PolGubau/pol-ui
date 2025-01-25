import type { Meta } from "@storybook/react";
import React from "react";

import { Toaster } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useHover } from "./use-hover";

export default {
  title: "Hooks/useHover",
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
  const ref = React.useRef<HTMLDivElement>(null);
  const isHovering = useHover(ref);

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>useHover Example</h1>
      <div ref={ref} className="border rounded-xl flex justify-center items-center p-4">
        {" "}
        Hover me
      </div>

      <p>{isHovering ? "Hovering" : "Not hovering"}</p>
    </div>
  );
};
