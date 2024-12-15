import type { Meta, StoryFn } from "@storybook/react";
import { TbStarFilled } from "react-icons/tb";

import { useBoolean } from "../../hooks";
import { theme } from "../../theme";
import type { Colors, MainSizes, RoundedSizes } from "../../types";
import { Button, type ButtonProps } from "./Button";

export default {
  title: "Components/Button",
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

  component: Button,
  tags: ["button", "autodocs"],
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: "inline-radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
    fullSized: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    variant: {
      options: ["filled", "outline", "link", "ghost"],
      control: { type: "inline-radio" },
    },

    rounded: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full", "none"],
      control: { type: "inline-radio" },
    },
    href: {
      control: { type: "text" },
    },
    target: {
      control: { type: "text" },
    },
  },
} as Meta;

const NewTemplate: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = NewTemplate.bind({});
DefaultButton.storyName = "Default";
DefaultButton.args = {
  children: "Button",
};

export const OutlineButton = NewTemplate.bind({});
OutlineButton.storyName = "Outline";
OutlineButton.args = {
  ...DefaultButton.args,
  variant: "outline",
};

export const Loading = () => {
  const { value, toggle } = useBoolean(true);
  return (
    <Button loading={value} onClick={toggle}>
      Click me
    </Button>
  );
};
export const Disabled = NewTemplate.bind({});
Disabled.args = {
  ...DefaultButton.args,
  disabled: true,
};
export const Ghost = NewTemplate.bind({});
Ghost.args = {
  ...DefaultButton.args,
  variant: "ghost",
};
export const Link = () => {
  return (
    <a href="https://google.com">
      <Button variant={"link"}>Google</Button>
    </a>
  );
};
export const FullSized = NewTemplate.bind({});
FullSized.args = {
  ...DefaultButton.args,
  fullSized: true,
};

export const Rounded = () => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.button.rounded).map((r) => (
      <Button key={r} rounded={r as RoundedSizes}>
        {r}
      </Button>
    ))}
  </div>
);
export const Sizes = (args: ButtonProps) => (
  <div className="flex gap-3 flex-wrap items-center">
    {Object.keys(theme.button.size).map((size) => (
      <Button key={size} {...args} size={size as MainSizes}>
        {size}
      </Button>
    ))}
  </div>
);

export const AllColors = () => (
  <div className="flex gap-3 flex-wrap p-4 rounded-xl">
    <nav className="flex gap-4 flex-col">
      <div className="flex gap-2 flex">
        {Object.keys(theme.button.color).map((color) => (
          <Button key={color} color={color as Colors}>
            {color}
          </Button>
        ))}
      </div>
    </nav>
  </div>
);
export const WithIcon = (args: ButtonProps) => (
  <Button {...args}>
    <TbStarFilled />
    Button
  </Button>
);
