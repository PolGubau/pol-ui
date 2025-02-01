import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { TbAlt, TbAt, TbUser } from "react-icons/tb";
import type { Colors, MainSizes } from "../../types";
import { ColorsEnum, MainSizesEnum } from "../../types/enums";
import { TextArea, type TextAreaProps } from "./Textarea";
type Story = StoryObj<typeof TextArea>;

const meta: Meta<typeof TextArea> = {
  title: "Components/Inputs/TextArea",
  component: TextArea,

  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
};
export default meta;

const Template: StoryFn<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = "Text input";
Default.args = {
  label: "Username",
};

export const WithIcon: Story = Template.bind({});
WithIcon.args = {
  label: "Username",
  icon: TbUser,
};
export const RightIcon: Story = Template.bind({});
RightIcon.args = {
  label: "Username",
  icon: TbUser,
  iconPosition: "right",
};
export const WithLeftContent: Story = Template.bind({});
WithLeftContent.args = {
  label: "Username",
  leftContent: (
    <div className="flex">
      <TbUser className="ml-1" />
      <TbAlt className="ml-1" />
    </div>
  ),
};
export const Higher: Story = Template.bind({});
Higher.args = {
  label: "Username",
  className: "h-96",
};

export const WithHelperText: Story = Template.bind({});
WithHelperText.args = {
  label: "Username",
  helperText: "This is a helper text",
};

export const AllColors = () => (
  <div className="flex flex-col gap-4 p-4 ">
    {Object.keys(ColorsEnum).map((color) => (
      <TextArea key={color} label={color} color={color as Colors} icon={TbAt} />
    ))}
  </div>
);
export const AllSizes = () => (
  <div className="flex flex-col gap-4 p-4 ">
    {Object.keys(MainSizesEnum).map((size) => (
      <TextArea key={size} label={size} size={size as MainSizes} />
    ))}
  </div>
);
export const AllColorsFilled = () => (
  <div className="flex flex-col gap-4 p-4 ">
    {Object.keys(ColorsEnum).map((color) => (
      <TextArea key={color} label={color} color={color as Colors} icon={TbAt} defaultValue="I am in light mode" />
    ))}
  </div>
);
