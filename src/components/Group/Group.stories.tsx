// Author: Pol Gubau Amores 2023

import { Story, Meta } from "@storybook/react";
import Group, { GroupProps } from "./Group";
import PolUiRoot from "../Root/PolUiRoot";
import Button from "../Button/Button";
import Text from "../Text/Text";
import { withDesign } from "storybook-addon-designs";
import { FIGMA_LINK } from "../../Constants/Constants";

export default {
  title: "Components/Group ",
  component: Group,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_LINK,
    },
    docs: {
      description: {
        component:
          "The `Group` component is a versatile component for creating groups of components on a website. It can be customized with different colors and icons, making it a useful tool for creating call-to-action buttons, social media buttons, and other interactive elements.",
      },
      props: {
        vertical: {
          description: "If true, the group will be displayed vertically",
          type: { name: "boolean" },
          defaultValue: { value: "false" },
        },
        fullSize: {
          description: "If true, the group will be displayed full size",
          type: { name: "boolean" },
          defaultValue: { value: "false" },
        },
        center: {
          description: "If true, the group will be centered",
          type: { name: "boolean" },
          defaultValue: { value: "false" },
        },
        space: {
          description: "The space between the components",
          type: { name: "string" },
          defaultValue: { value: "small" },
        },
      },
    },
  },
} as Meta;

const Template: Story<GroupProps> = (args) => (
  <PolUiRoot>
    <Group {...args}>
      <Button text="These" />
      <Button text="Are" primary />
      <Text>Different</Text>
      <Button text="Components" />
    </Group>
  </PolUiRoot>
);

export const Primary = Template.bind({});
Primary.args = {
  vertical: false,
  fullSize: false,
};

export const Vertical = Template.bind({
  vertical: true,
});

Vertical.args = {
  vertical: true,
};

export const FullSize = Template.bind({
  vertical: false,
});

FullSize.args = {
  fullSize: true,
  center: false,
  vertical: false,
};

export const Center = Template.bind({
  vertical: false,
});

Center.args = {
  space: "large",
  center: true,
  vertical: false,
};

export const Space = Template.bind({
  center: true,
  vertical: false,
});
Space.args = {
  space: "none",
  center: false,
  vertical: false,
};
