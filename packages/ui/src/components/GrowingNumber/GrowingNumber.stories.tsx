import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { TbReload } from "react-icons/tb";

import { IconButton } from "../IconButton";
import GrowingNumber, { type GrowingNumberProps } from "./GrowingNumber";

export default {
  title: "Components/GrowingNumber",
  component: GrowingNumber,

  tags: ["autodocs"],
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

const Template: StoryFn<GrowingNumberProps> = (props) => {
  const [key, setKey] = useState(0);
  function sum() {
    setKey(key + 1);
  }
  return (
    <div className="grid place-items-center min-h-[200px] relative w-full">
      <IconButton onClick={sum} className="absolute top-2 right-2">
        <TbReload />
      </IconButton>
      <GrowingNumber {...props} key={key} />
    </div>
  );
};

export const Default = Template.bind({});

export const CustomProps = Template.bind({});
CustomProps.parameters = {
  docs: {
    description: {
      story: "This story shows the `className` prop set to `text-4xl text-green-400 font-bold`.",
    },
  },
};
CustomProps.args = {
  className: "text-4xl text-green-400 font-bold",
};
export const CustomDuration = Template.bind({});
CustomDuration.parameters = {
  docs: {
    description: {
      story: "This story shows the `duration` prop set to 15.",
    },
  },
};
CustomDuration.args = {
  duration: 15,
};
export const CustomUntil = Template.bind({});
CustomUntil.parameters = {
  docs: {
    description: {
      story: "This story shows the `until` prop set to 777.",
    },
  },
};
CustomUntil.args = {
  until: 777,
};
export const CustomSince = Template.bind({});
CustomSince.parameters = {
  docs: {
    description: {
      story: "This story shows the `from` prop set to 50.",
    },
  },
};

CustomSince.args = {
  from: 50,
};
