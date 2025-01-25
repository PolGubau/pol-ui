import type { Meta, StoryFn } from "@storybook/react";

import { useState } from "react";
import type { DebouncedInputProps } from "./DebouncedInput";
import { DebouncedInput } from "./DebouncedInput";

export default {
  title: "Components/Inputs/DebouncedInput",
  component: DebouncedInput,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: StoryFn<DebouncedInputProps> = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <>
      <DebouncedInput
        {...args}
        onChange={(value) => {
          setValue(value);
        }}
        value={value}
      />
      <p className="mt-4">Value: {value}</p>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "The returned value is debounced by 500ms (default)",
  placeholder: "Type something...",
};
export const LessDelay = Template.bind({});
LessDelay.args = {
  delay: 10,
  label: "The returned value is debounced by 10ms",
};

export const LongDelay = Template.bind({});
LongDelay.args = {
  delay: 1000,
  label: "The returned value is debounced by 1 second",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: "Initial value",
  label: "The returned value is debounced by 500ms (default)",
  placeholder: "Type something...",
};

export const WithError = Template.bind({});
WithError.args = {
  color: "error",
  helperText: "This is an error",
  label: "The returned value is debounced by 500ms (default)",
  placeholder: "Type something...",
};
