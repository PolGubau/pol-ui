import type { Meta, StoryFn } from "@storybook/react";
import type { Colors, MainSizes } from "../../types";
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from "../../types/enums";
import type { ProgressProps } from "./Progress";
import { Progress } from "./Progress";

export default {
  title: "Components/Progress",
  component: Progress,
  tags: ["Progress", "autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col pt-10 bg-secondary-50">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 45,
};

export const AllColors = (): React.ReactNode => (
  <div className="flex gap-4 flex-col">
    {Object.keys(ColorsEnum).map((color) => (
      <Progress progress={45} color={color as Colors} label={color} key={color} />
    ))}
  </div>
);
export const Sizes = (): React.ReactNode => (
  <div className="flex gap-4 flex-col">
    {Object.keys(MainSizesEnum).map((v) => (
      <Progress progress={45} size={v as MainSizes} label={v} key={v} />
    ))}
  </div>
);
export const Roundness = (): React.ReactNode => (
  <div className="flex gap-4 flex-col">
    {Object.keys(RoundedSizesEnum).map((r) => (
      <Progress progress={45} rounded={r} label={r} key={r} size={"lg"} />
    ))}
  </div>
);

export const CustomClassNames = Template.bind({});
CustomClassNames.storyName = "Custom ClassNames";
CustomClassNames.args = {
  progress: 45,
  className: "bg-orange-100 text-white rounded-sm ",
};
export const WithoutMotion = Template.bind({});
WithoutMotion.args = {
  hasMotion: false,
  progress: 45,
  label: "This progress bar has no motion",
};

export const WithLabelOutside = Template.bind({});
WithLabelOutside.storyName = "Label positions";
WithLabelOutside.args = {
  label: "Label of the progress bar",
  progress: 45,
};
