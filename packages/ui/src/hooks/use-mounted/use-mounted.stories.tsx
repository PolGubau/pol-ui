import type { Meta } from "@storybook/react";
import type React from "react";

import { Toaster } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useMounted } from "./use-mounted";

export default {
  title: "Hooks/useMounted",
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
export const Default: React.FC = () => {
  // Example media query for screen widths less than 600px
  const isMounted = useMounted();

  return <div>{isMounted ? <p>The component is mounted.</p> : <p>The component is not mounted.</p>}</div>;
};
