import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Input } from "../../components";
import { useMergeValue } from "./use-merge-value";
const meta: Meta = {
  title: "Hooks/useMergeValue",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center ">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
};
export default meta;

const ControlledInput = ({ value, onChange }: { value?: string; onChange?: (value: string) => void }) => {
  const [inputValue, setInputValue] = useMergeValue("", {
    value,
    onChange,
  });

  return <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} label="Type something..." />;
};
export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string | undefined>("Controlled Value");
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Controlled Component</h3>
        <ControlledInput value={value} onChange={setValue} />
        <Button
          onClick={() => setValue((prev) => (prev === "Controlled Value" ? "Updated Value" : "Controlled Value"))}
        >
          Toggle Controlled Value
        </Button>
      </div>
    );
  },
};

export const Uncontrolled: StoryObj = {
  render: () => {
    const UncontrolledInput = () => {
      const [inputValue, setInputValue] = useMergeValue("Default Value");

      return <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} label="Type something..." />;
    };

    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Uncontrolled Component</h3>
        <UncontrolledInput />
      </div>
    );
  },
};

export const ToggleControlledToUncontrolled: StoryObj = {
  render: () => {
    const FlexibleInput = ({ controlled }: { controlled: boolean }) => {
      const [value, setValue] = useMergeValue("Default Value", controlled ? { value: "Controlled Value" } : {});

      return (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label={controlled ? "Controlled" : "Uncontrolled"}
        />
      );
    };

    const [isControlled, setIsControlled] = useState(true);

    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Toggle Between Controlled and Uncontrolled</h3>
        <FlexibleInput controlled={isControlled} />
        {/*  */}
        <Button onClick={() => setIsControlled((prev) => !prev)}>
          Toggle Mode ({isControlled ? "Controlled" : "Uncontrolled"})
        </Button>
      </div>
    );
  },
};
