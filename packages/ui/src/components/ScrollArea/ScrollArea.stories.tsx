import type { ScrollAreaProps } from "@radix-ui/react-scroll-area";
import type { Meta, StoryFn } from "@storybook/react";

import { ScrollArea } from "./ScrollArea";

export default {
  title: "Components/ScrollArea",
  component: ScrollArea,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center  ">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
const Template: StoryFn<ScrollAreaProps> = (args: ScrollAreaProps) => (
  <ScrollArea {...args} className="my-[50vh] h-[800px]" />
);

export const Default = () => {
  return <ScrollArea className="w-full flex flex-col gap-[50vh] mb-96">Hello</ScrollArea>;
};
