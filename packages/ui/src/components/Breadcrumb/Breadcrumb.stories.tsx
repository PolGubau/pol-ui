import type { Meta, StoryFn } from "@storybook/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { TbHome, TbUser } from "react-icons/tb";

import { Dropdown, DropdownItem } from "../Dropdown";
import { Breadcrumb, type BreadcrumbComponentProps } from "./Breadcrumb";
import { BreadcrumbItem } from "./BreadcrumbItem";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<BreadcrumbComponentProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href="https://polgubau.com/" icon={TbHome}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="https://polgubau.com/" icon={TbUser}>
      Profiles
    </BreadcrumbItem>
    <HiOutlineChevronRight className="text-secondary-600 ml-2" />

    <Dropdown defaultTriggerOptions={{ variant: "ghost" }} label={"..."} className="bg-transparent text-secondary-900">
      <DropdownItem label="Authors" />
      <DropdownItem label="Selected" />
      <DropdownItem label="Matched" />
    </Dropdown>

    <BreadcrumbItem>Pol Gubau Amores</BreadcrumbItem>
  </Breadcrumb>
);

export const Default = Template.bind({});

export const SolidBackground = Template.bind({});
SolidBackground.storyName = "Solid background";
SolidBackground.args = {
  className: "bg-primary-400 w-fit py-2 px-4 rounded-xl",
};
