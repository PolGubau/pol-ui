import type { Meta } from "@storybook/react";

import FocusEffect from "./FocusEffect";

export default {
  title: "Components/FocusEffect",
  tags: ["autodocs"],
  component: FocusEffect,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => {
  return (
    <button className="group relative overflow-hidden h-10 w-[60px] bg-gray-100">
      <FocusEffect />
      Tab me
    </button>
  );
};
