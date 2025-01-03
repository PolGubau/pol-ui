import type { Meta, StoryFn } from "@storybook/react";
import { TbDots, TbTrash, TbX } from "react-icons/tb";

import { type Colors, ColorsEnum } from "../../types";
import { Divider } from "../Divider";
import { Dropdown, DropdownItem } from "../Dropdown";
import { Toaster, toast } from "../Toaster";
import { Chip, type ChipProps } from "./Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-center p-6">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Chip",
};
export const OnClick = Template.bind({});
OnClick.args = {
  children: "Chip",
  onClick: () => {
    toast("Clicked");
  },
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: "disabled",
  disabled: true,
};
export const OnDelete = Template.bind({});
OnDelete.args = {
  children: "Chip",
  actions: [
    {
      label: "Delete",
      onClick: () => {
        toast("Delete");
      },
      icon: <TbX />,
    },
  ],
};
export const MultipleActions = Template.bind({});
MultipleActions.args = {
  children: "Custom Icon",
  actions: [
    {
      label: "More actions",
      onClick: () => {
        toast("More actions");
      },
      icon: <TbDots />,
    },
    {
      label: "Delete",
      onClick: () => {
        toast("Delete");
      },
      icon: <TbTrash />,
    },
  ],
};
export const DropdownExample = Template.bind({});
DropdownExample.args = {
  children: "Custom Icon",
  actions: [
    {
      label: "Delete",
      element: (
        <Dropdown
          label="Example"
          trigger={
            <div className="flex items-center justify-center pr-1">
              <TbDots color="#000" />
            </div>
          }
        >
          <DropdownItem
            label="Undo"
            onClick={() => {
              alert("Undo");
            }}
            shortcut="⌘Z"
          />
          <DropdownItem
            label="Redo"
            shortcut="⌘Y"
            onClick={() => {
              alert("Redo");
            }}
          />
          <Divider />
          <DropdownItem
            label="More actions"
            onClick={() => {
              alert("More actions");
            }}
          />
        </Dropdown>
      ),
    },
  ],
};
export const AllColors = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 rounded-3xl p-3">
      {Object.keys(ColorsEnum).map((color) => (
        <Chip key={color} color={color as Colors}>
          {color}
        </Chip>
      ))}
    </div>
  );
};
