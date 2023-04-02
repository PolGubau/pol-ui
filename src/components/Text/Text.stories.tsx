import { Story, Meta } from "@storybook/react";
import Text, { TextProps } from "./Text";
import { withDesign } from "storybook-addon-designs";
import PolUiRoot from "../Root/PolUiRoot";
import { FIGMA_LINK } from "../../Constants/Constants";
export default {
  title: "Components/Text",
  component: Text,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_LINK,
    },
    docs: {
      description: {
        component:
          "The `Text` component is a versatile component for displaying text on a website. It can be customized with different font sizes and font weights, making it a useful tool for creating headings, paragraphs, and other text-based elements.",
      },
      props: {
        children: {
          description: "The text to be displayed",
          type: { name: "string", required: true },
          defaultValue: { value: "Default Text" },
        },
        value: {
          description:
            "An alternate value for the text, useful for dynamic rendering",
          type: { name: "string" },
          defaultValue: { value: "" },
        },
        color: {
          description: "The color of the text",
          type: { name: "string" },
          defaultValue: { value: "#000000" },
        },
        size: {
          description: "The size of the text",
          type: { name: "enum", value: "1 | 2 | 3 | 4 | 5 | 6" },
          defaultValue: { value: "1" },
        },
        fontWeight: {
          description: "The font weight of the text",
          type: { name: "string" },
          defaultValue: { value: "normal" },
        },
      },
    },
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <PolUiRoot>
    <Text {...args} />{" "}
  </PolUiRoot>
);

export const Default = Template.bind({});
Default.args = {
  children: "Text Component for titles and paragraphs",
  size: 1,
};

export const WithAlternateValue = Template.bind({});
WithAlternateValue.args = {
  value: "Alternate Text",
  size: 2,
};
export const WithAlternateWeight = Template.bind({});
WithAlternateWeight.args = {
  value: "Alternate Text",
  size: 3,
  weight: "bold",
};

export const WithDifferentColor = Template.bind({});
WithDifferentColor.args = {
  children: "Colored Text",
  color: "#FF0000",
  size: 2,
};

export const WithDifferentSize = Template.bind({});
WithDifferentSize.args = {
  children: "Different Size Text",
  size: 4,
  weight: "bold",
};

export const WithNoSize = Template.bind({});
WithNoSize.args = {
  children: "No Size Text",
};

export const AllSizes = () => (
  <>
    <Text size={1}>Heading 1</Text>
    <Text size={2}>Heading 2</Text>
    <Text size={3}>Heading 3</Text>
    <Text size={4}>Heading 4</Text>
    <Text size={5}>Heading 5</Text>
    <Text size={6}>Heading 6</Text>
    <Text>Paragraph</Text>
  </>
);
