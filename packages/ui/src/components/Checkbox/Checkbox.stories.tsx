import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import { ColorsEnum } from "../../types/enums";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./props";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.storyName = "Checkbox";
DefaultCheckbox.args = {
  label: "Checkbox",
};

export const Controlled = (): React.ReactNode => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-wrap gap-2">
      <Checkbox
        label="Controlled"
        color={ColorsEnum.primary}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};
export const AllColors = (): React.ReactNode => (
  <div className="flex flex-wrap gap-8">
    {Object.keys(ColorsEnum).map((status) => (
      <div key={status} className="flex flex-col items-center justify-center">
        <Checkbox color={status as keyof typeof ColorsEnum} defaultChecked={true} label={status} />
      </div>
    ))}
  </div>
);
