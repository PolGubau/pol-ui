import type { Meta, StoryFn } from "@storybook/react";
import { BiCheck, BiTrash } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { TbBulb, TbInfoCircle } from "react-icons/tb";
import { theme } from "../../theme";
import { ColorsEnum } from "../../types/enums";
import { Button } from "../Button";
import type { AlertProps } from "./Alert";
import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    color: {
      options: Object.keys(theme.alert.color),
      control: { type: "inline-radio" },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<AlertProps> = (props) => <Alert {...props} />;

export const Default = Template.bind({});
Default.args = {
  onDismiss: undefined,
  children: (
    <>
      An alert could be an incredible useful component when showing an important advice is needed. You can easily
      customize it's colors, actions and texts. Use it for feedback or warnings.
    </>
  ),
};

export const AlertWithIcons = Template.bind({});
AlertWithIcons.storyName = "With Icon";
AlertWithIcons.args = {
  icon: TbBulb,
  onDismiss: undefined,
  children: (
    <>
      Our recommendation is to use a descriptible icon with the content so the user will know faster what the context or
      the alert is, examples could be a LightBulb, a question mark, a info symbol...
    </>
  ),
};

export const AlertDismissible = Template.bind({});
AlertDismissible.storyName = "Dismissible";
AlertDismissible.args = {
  color: ColorsEnum.success,
  onDismiss: () => {
    alert("Alert dismissed!");
  },
  children: (
    <>
      Yeyy, that's a success alert! How the component has 'onDismiss' as a prop, you can trigger an action when clicking
      the cross.
    </>
  ),
};

export const AlertRounded = Template.bind({});
AlertRounded.args = {
  color: ColorsEnum.warning,
  rounded: "none",
  onDismiss: undefined,
  children: <>Warning alert! This alert is trying to advice you, be carefully that this actions is not undonable.</>,
};

export const Alertbordered = Template.bind({});
Alertbordered.storyName = "Bordered";
Alertbordered.args = {
  color: ColorsEnum.warning,
  onDismiss: undefined,
  bordered: true,
  children: (
    <>Easier to see, right? Use this border when you have complexe contrast to increase the Alert visual importance</>
  ),
};

export const AlertWithAdditionalContent = Template.bind({});
AlertWithAdditionalContent.args = {
  color: "info",
  icon: TbInfoCircle,
  onDismiss: undefined,
  bordered: true,
  additionalContent: (
    <>
      <div className="mb-4 mt-2 text-sm text-info-700 dark:text-info-800">
        This is the component comming from additionalContent as a prop, could be used when you need to present a large
        text that is better be cutted due to the icon.
      </div>
      <div className="flex gap-2">
        <Button color={ColorsEnum.info}>
          <BiCheck className="h-4 w-4" />
          Understood
        </Button>

        <Button color={ColorsEnum.secondary}>Dismiss</Button>
      </div>
    </>
  ),
  children: (
    <>
      <h3 className="text-lg font-medium text-cyan-700 dark:text-cyan-800">This is a info alert</h3>
      This content is the real one, the children.
    </>
  ),
};

export const AlertWithAllOptions = Template.bind({});
AlertWithAllOptions.args = {
  color: ColorsEnum.error,
  rounded: "none",
  bordered: true,
  onDismiss: () => {
    alert("Alert dismissed!");
  },
  icon: BiTrash,
  additionalContent: (
    <>
      <div className="mb-4 mt-2 text-sm text-green-700 dark:text-green-800" />
      <div className="flex gap-2">
        <Button color={ColorsEnum.error}>
          <HiX /> Delete Data
        </Button>
        <Button color={ColorsEnum.secondary}>Return</Button>
      </div>
    </>
  ),
  children: <>Error Alert! Example: If you continue all data stored here will be deleted forever (a lot of time)</>,
};
