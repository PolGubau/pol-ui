import type { Meta, StoryFn } from "@storybook/react";

import { ContainerScroll, type ContainerScrollProps } from "./ContainerScroll";

export default {
  title: "Components/ContainerScroll",
  component: ContainerScroll,
  decorators: [(Story): React.ReactNode => <Story />],
} as Meta;

const Template: StoryFn<ContainerScrollProps> = (args) => <ContainerScroll {...args} />;

const titleComponent = (
  <h1 className="flex flex-col gap-2">
    <span className="text-6xl font-bold text-black dark:text-white">Pol-ui</span>
    <span className="text-2xl font-bold text-black dark:text-white">Empowering web development</span>
  </h1>
);
const cards = (
  <div className="flex items-center gap-4 flex-col justify-center w-full ">
    {[1, 2, 3, 4, 5, 6].map((n) => {
      return (
        <div className="w-fit h-fit bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg" key={n}>
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Card {n}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula, nisl et aliquam cursus, ligula ante
              auctor nulla, at accumsan ex leo in enim.
            </p>
          </div>
        </div>
      );
    })}
  </div>
);
export const Default = Template.bind({});
Default.args = {
  titleComponent,
  children: cards,
};
export const AnimationInTop = Template.bind({});
AnimationInTop.args = {
  ...Default.args,

  top: true,
};
export const AnimationJustInTop = Template.bind({});
AnimationJustInTop.args = {
  ...Default.args,

  top: true,
  bottom: false,
};
export const CustomRotation = Template.bind({});
CustomRotation.args = {
  ...Default.args,
  rotation: 40,
  top: true,
};
export const WithoutDevice = Template.bind({});
WithoutDevice.args = {
  ...Default.args,
  deviceWrapper: false,
  children: (
    <div className="flex items-center gap-4 flex-col justify-center w-full ">
      {[1, 2, 3].map((n) => {
        return (
          <div className="w-fit h-fit bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg" key={n}>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-black dark:text-white">Card {n}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula, nisl et aliquam cursus, ligula
                ante auctor nulla, at accumsan ex leo in enim.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  ),
};
