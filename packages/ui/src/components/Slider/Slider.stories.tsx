import type { Meta, StoryObj } from "@storybook/react";

import { type Colors, ColorsEnum } from "../../types";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  component: Slider,
} as Meta;
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { defaultValue: [20] },
};
export const Disabled: Story = {
  args: { disabled: true, defaultValue: [20] },
};

export const AllColors = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {Object.keys(ColorsEnum).map((color) => (
        <Slider key={color} color={color as Colors} />
      ))}
    </div>
  );
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
};
export const Range: Story = {
  args: { defaultValue: [25, 75] },
};
export const Steps: Story = {
  args: { defaultValue: [50], step: 10 },
};
export const PreventedOverlap: Story = {
  args: { defaultValue: [25, 75], step: 10, minStepsBetweenThumbs: 1 },
};
export const Custom: Story = {
  args: {
    classNames: {
      track: "bg-green-300 overflow-hidden h-[30px]",
      range: "bg-blue-400",
      thumb:
        "bg-blue-400 rounded-l-none border-2 ring-0 border-blue-400 ring-blue-700 h-[30px] w-[30px] group-hover:border-0 group-hover:h-[30px] group-hover:w-[30px] -mt-2",
    },
  },
};
