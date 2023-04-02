// Author: Pol Gubau Amores 2023

import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import PolUiRoot from "../Root/PolUiRoot";
import Quote, { QuoteProps } from "./Quote";
import { FIGMA_LINK } from "../../Constants/Constants";
import { TbHearts } from "react-icons/tb";
import Button from "../Button/Button";
export default {
  title: "Components/Quote",
  component: Quote,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_LINK,
    },
    docs: {
      description: {
        component:
          "A `quote` is a short quotation that is repeated in a text. It is usually set off from the main text by quotation marks, or indentation, and sometimes by a different typeface or size of type.",
      },
      props: {
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
        children: {
          description: "The text to be displayed on the button",
          type: { name: "string | null" },

          defaultValue: { value: "null" },
        },
      },
    },
  },
} as Meta<QuoteProps>;

const Template: Story<QuoteProps> = (args) => (
  <PolUiRoot>
    <Quote {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.
    </Quote>
  </PolUiRoot>
);

export const Default = Template.bind({});
Default.args = {
  color: undefined,
  icon: null,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  color: undefined,
  icon: "arrow",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: "red",
  icon: null,
};

export const WithIconAndCustomColor = Template.bind({});
WithIconAndCustomColor.args = {
  color: "red",
  icon: "alarm",
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  color: undefined,
  icon: <TbHearts />,
};

const TemplateWithButton: Story<QuoteProps> = (args) => (
  <PolUiRoot>
    <Quote {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.
      <Button
        onClick={() => {
          alert("Baguette");
        }}
        text="Baguette "
        icon="baguette"
      />
    </Quote>
  </PolUiRoot>
);

export const WithButton = TemplateWithButton.bind({});
WithButton.args = {
  color: undefined,
  icon: null,
};

export const WithButtonAndIcon = TemplateWithButton.bind({});
WithButtonAndIcon.args = {
  color: undefined,
  icon: "balloon",
};
