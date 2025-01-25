import type { Meta, StoryFn } from "@storybook/react";

import { type RoundedSizes, RoundedSizesEnum } from "../../types";
import { Banner, type BannerComponentProps } from "./Banner";

export default {
  title: "Components/Banner",
  component: Banner,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<BannerComponentProps> = (args) => <Banner {...args} />;

export const DefaultBanner = Template.bind({});
DefaultBanner.args = {
  children: <span>Welcome back to Pol-ui</span>,
};

export const BorderedBanner = Template.bind({});
BorderedBanner.storyName = "With border";
BorderedBanner.args = {
  bordered: true,
  children: <span>Welcome back to Pol-ui</span>,
};
export const CustomBanner = Template.bind({});
CustomBanner.storyName = "Custom styles";
CustomBanner.args = {
  closable: false,
  color: "success",
  className: "py-4 px-6 rounded-b-3xl",
  children: <span>Welcome back to Pol-ui</span>,
};
export const CustomCloseButton = Template.bind({});
CustomCloseButton.args = {
  className: "bg-info-300 py-4 px-6 rounded-3xl",
  children: <span>Welcome back to Pol-ui, check our blog!</span>,
};

export const AllColors = () => (
  <div className="flex flex-col gap-4">
    <Banner color="error">Error</Banner>
    <Banner color="info">Info</Banner>
    <Banner color="success">Success</Banner>
    <Banner color="warning">Warning</Banner>
    <Banner color="secondary">Secondary</Banner>
    <Banner color="primary">Primary</Banner>
  </div>
);

export const AllRounded = () => (
  <div className="flex flex-col gap-4">
    {Object.keys(RoundedSizesEnum).map((rounded) => (
      <Banner key={rounded} rounded={rounded as RoundedSizes}>
        {rounded}
      </Banner>
    ))}
  </div>
);
