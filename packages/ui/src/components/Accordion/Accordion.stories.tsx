import type { Meta, StoryFn } from "@storybook/react";
import type { ComponentProps, FC } from "react";
import { HiChevronDown, HiOutlineArrowCircleDown } from "react-icons/hi";

import { HeadingLevelEnum } from "../../types/enums";
import { Accordion } from "./Accordion";
import type { AccordionProps } from "./types";

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center ">
        <div className="max-w-2xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const icon: FC<ComponentProps<"svg">> = HiChevronDown;
const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>This is our most basic accordion</Accordion.Title>
      <Accordion.Content>
        <p>
          This content is a div by default, but you can place inside any other component you like, for example, this p
          tag.
        </p>
        <p>
          As we use tailwind, you can style this accordion however you like. For example, you can add a border to the
          content.
        </p>
        <p className="border border-green-400 px-2 py-1 w-fit rounded-xl bg-green-200 mt-2">You see :)</p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title as={HeadingLevelEnum.h3}>What if I don't like classes in my html</Accordion.Title>
      <Accordion.Content
        theme={{
          base: "bg-red-200 border border-red-400 p-6",
        }}
      >
        <p>
          No problem, you can use the theme prop to style the accordion. You can also use the theme prop to override the
          default classes.
        </p>
        <p className="bg-blue-200 border border-blue-400 px-2 py-1 w-fit rounded-xl mt-2">
          This text is blue but the main content is red.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>What can I change by props</Accordion.Title>
      <Accordion.Content>
        <h3 className="mb-4 text-lg first-letter:uppercase">The main props for the accordion are:</h3>
        <ol className="flex flex-col gap-2 divide-y w-fit">
          <li>
            <strong>alwaysOpen</strong> - if true, the accordion will always be open
          </li>
          <li>
            <strong>bordered</strong> - if true, the accordion will have a border
          </li>
          <li>
            <strong>arrowIcon</strong> - the icon to use for the arrow
          </li>
          <li>
            <strong>collapseAll</strong> - if true, all panels will be closed
          </li>
          <li>
            <strong>theme</strong> - the theme to use for the accordion as we did above
          </li>
        </ol>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);
export const Default = Template.bind({});

export const AlwaysOpen = Template.bind({});
AlwaysOpen.storyName = "Always open";
AlwaysOpen.args = {
  alwaysOpen: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  isBordered: false,
};

export const WithArrowIcon = Template.bind({});
WithArrowIcon.storyName = "With arrow icon";
WithArrowIcon.args = {
  arrowIcon: HiOutlineArrowCircleDown,
};
