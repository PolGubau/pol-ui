import type { Meta, StoryFn } from "@storybook/react";

import { type Colors, ColorsEnum } from "../../types";
import { Slider, type SliderProps } from "./Slider";

export default {
  title: "Components/Slider",

  component: Slider,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: [20],
};
export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: [50],
  disabled: true,
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

export const Vertical = () => {
  return <Slider orientation="vertical" />;
};
export const Range = () => {
  return <Slider defaultValue={[25, 75]} />;
};
export const Steps = () => {
  return <Slider defaultValue={[50]} step={10} />;
};
export const PreventedOverlap = () => {
  return <Slider defaultValue={[25, 75]} step={10} minStepsBetweenThumbs={1} />;
};
export const Custom = () => {
  return (
    <Slider
      classNames={{
        track: "bg-green-300 overflow-hidden h-[30px]",
        range: "bg-blue-400",
        thumb:
          "bg-blue-400 rounded-l-none border-2 ring-0 border-blue-400 ring-blue-700 h-[30px] w-[30px] group-hover:border-0 group-hover:h-[30px] group-hover:w-[30px]",
      }}
    />
  );
};
