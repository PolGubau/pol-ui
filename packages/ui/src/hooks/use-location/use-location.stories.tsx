import type { Meta } from "@storybook/react";
import type React from "react";

import { Card, Toaster } from "../../components";
import { PoluiProvider } from "../../providers/PoluiProvider";
import { useLocation } from "./use-location";

export default {
  title: "Hooks/useLocation",
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
  const location = useLocation();

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>useLocation Example</h1>
      <Card>
        <pre>
          <code>{JSON.stringify(location, null, 2)}</code>
        </pre>
      </Card>
      <p>
        This hook requires the permission to access the user's location. If you are on a desktop, you can use the Chrome
        DevTools to simulate location events.
      </p>
    </div>
  );
};
