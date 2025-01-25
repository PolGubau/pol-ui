import type { Meta, StoryFn } from "@storybook/react";
import { Divider } from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
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

export const Default: StoryFn = () => (
  <>
    Texts 1
    <Divider />
    Texts 2
  </>
);
export const Vertical: StoryFn = () => (
  <div className="flex gap-2">
    Texts 1
    <Divider orientation="vertical" />
    Texts 2
  </div>
);
