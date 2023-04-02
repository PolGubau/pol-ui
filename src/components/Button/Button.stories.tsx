import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Button, { ButtonProps } from "./Button";
import PolUiRoot from "../Root/PolUiRoot";
import { FaWineGlass } from "react-icons/fa";
import { FIGMA_LINK } from "../../Constants/Constants";
export default {
  title: "Components/Button",
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_LINK,
    },
    docs: {
      description: {
        component:
          "The `Button` component is a versatile component for creating buttons on a website. It can be customized with different colors and icons, making it a useful tool for creating call-to-action buttons, social media buttons, and other interactive elements.",
      },
      props: {
        onClick: {
          description: "The function to be called when the button is clicked",
          type: { name: "function" },
          defaultValue: { value: "null" },
        },
        color: {
          description: "The color of the button",
          type: { name: "string" },
          defaultValue: { value: "#000000" },
        },
        icon: {
          description: "The icon to be displayed next to the button text",
          type: { name: "React.ReactNode | IconName | null" },
          defaultValue: { value: "null" },
        },
        text: {
          description: "The text to be displayed on the button",
          type: { name: "string | null" },
          defaultValue: { value: "null" },
        },
        mainAction: {
          description:
            "If true, the button will be styled as a primary call-to-action button",
          type: { name: "boolean" },
          defaultValue: { value: "false" },
        },
      },
    },
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <PolUiRoot>
    <Button {...args} />
  </PolUiRoot>
);

export const Default = Template.bind({});
Default.args = {
  text: "Default Button",
  primary: false,
  disabled: false,
  icon: null,
  color: undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Button With Icon",
  icon: "arrow",
  primary: false,
  disabled: false,
};
export const CustomIcon = Template.bind({});
CustomIcon.args = {
  text: "Button With Custom Icon",
  icon: <FaWineGlass />,
  primary: false,
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  primary: true,
  disabled: false,
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  text: "Primary Button with fancy icon",
  primary: true,
  disabled: false,
  icon: "settings",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  text: "Custom Color Button",
  color: "#FF0000",
  primary: false,
  disabled: false,
};

const BigButton: Story<ButtonProps> = (args) => (
  <PolUiRoot>
    <Button {...args} fullWidth />
  </PolUiRoot>
);

export const Big = BigButton.bind({});
Big.args = {
  text: "Big Button",
  primary: false,
  fullWidth: true,
  disabled: false,
  icon: null,
  color: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  primary: true,
  disabled: true,
  icon: "baguette",
  color: undefined,
};
