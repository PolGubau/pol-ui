import type { Meta, StoryFn } from "@storybook/react";
import { TbStarFilled } from "react-icons/tb";
import { Timeline } from ".";
import type { TimelineProps } from "./Timeline";
import { TimelineItem } from "./TimelineItem";

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

const Template: StoryFn<TimelineProps> = (args) => <Timeline {...args} />;

const Example = () => (
  <>
    <TimelineItem>
      April 2023
      <h2 className="text-black font-bold">Pol-ui is released</h2>
      Our first major release of Pol-ui is out. We have a lot of features and components to help you build your
    </TimelineItem>
    <TimelineItem>
      October 2023
      <h2 className="text-black font-bold">We now support Tailwind CSS</h2>
      To make it easier to customize the look and feel of Pol-ui, we now support Tailwind CSS out of the box.
    </TimelineItem>
    <TimelineItem icon={TbStarFilled}>
      February 2024
      <h2 className="text-black font-bold">Our base components are now ready</h2>
      We have a lot of base components to help you build your application faster.
    </TimelineItem>
  </>
);
export const Default = Template.bind({});
Default.args = {
  children: <Example />,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  horizontal: true,
  children: <Example />,
};
