import type { Meta } from "@storybook/react";
import { useState } from "react";

import { Button } from "../Button";
import { ListeningAnimation } from "./ListeningAnimation";

export default {
  title: "Components/ListeningAnimation",
  component: ListeningAnimation,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export function Default() {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="flex gap-4 items-center flex-col ">
      <Button onClick={() => setIsListening(!isListening)}>{isListening ? "Stop" : "Start"} Listening</Button>
      <ListeningAnimation isListening={isListening} />
    </div>
  );
}
