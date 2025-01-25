import type { Meta, StoryFn } from "@storybook/react";
import { TbSearch } from "react-icons/tb";

import { Card } from "../Card";
import { HelperText } from "../HelperText";
import { FollowerPointer, type FollowerPointerProps } from "./FollowerPointer";

export default {
  title: "Components/FollowerPointer",
  component: FollowerPointer,
  decorators: [
    (Story) => (
      <div className="grid h-full place-items-center p-8 min-h-[600px]">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<FollowerPointerProps> = (args) => <FollowerPointer {...args} />;
const blogContent = {
  author: "Pol Gubau",
  date: "19th March, 2024",
  title: "Mastering UI Design in React: A Comprehensive Guide",
  description:
    "Explore the intricate world of User Interface (UI) design in React with our insightful blog. From essential principles to advanced techniques, discover how to create stunning, responsive, and user-friendly interfaces that elevate your React applications to the next level. ",
  authorAvatar: "https://avatars.githubusercontent.com/u/63197171?v=4",
};

const TitleComponent = ({
  content,
  avatar,
}: {
  content: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center text-primary-50 bg-primary p-1 rounded-full pr-3">
    <img src={avatar} height="30" width="30" alt="thumbnail" className="rounded-full" />
    <p>{content}</p>
  </div>
);
const CompleteCard = () => {
  return (
    <Card className="max-w-xl">
      <HelperText>{blogContent.date}</HelperText>
      <h2 className="font-bold my-4 -mt-1 text-lg text-zinc-700">{blogContent.title}</h2>
      <p className="font-normal text-sm text-zinc-500">{blogContent.description}</p>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: <TitleComponent content={blogContent.author} avatar={blogContent.authorAvatar} />,
  children: <CompleteCard />,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  content: <TitleComponent content={blogContent.author} avatar={blogContent.authorAvatar} />,
  icon: (
    <div className="bg-primary-700 rounded-full   w-5 h-5 flex justify-center items-center">
      <TbSearch className="text-primary-50 " size={10} />
    </div>
  ),
  children: <CompleteCard />,
};

export const CustomElement = Template.bind({});
CustomElement.args = {
  content: <div className="bg-info p-2 rounded-md">🚀🚀🚀🔥🔥🔥</div>,
  icon: <div className="bg-info-700 rounded-full w-5 h-5 mb-2 flex justify-center items-center" />,
  children: <CompleteCard />,
};
