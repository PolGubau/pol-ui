import type { Meta, StoryFn } from "@storybook/react";
import { TbMouse } from "react-icons/tb";
import type { ImageTrailProps } from "./ImageTrail";
import { ImageTrail } from "./ImageTrail";

export default {
  title: "Components/ImageTrail",
  component: ImageTrail,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col w-full min-h-[400px] justify-center items-center">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<ImageTrailProps> = (args) => <ImageTrail {...args} />;
const images = [
  "https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600",
];
export const Default = Template.bind({});
Default.args = {
  renderImageBuffer: 50,
  rotationRange: 20,
  children: (
    <section className="flex h-[400px] w-full place-content-center bg-primary-200">
      <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
        <TbMouse />
        <span>Move your mouse</span>
      </p>
    </section>
  ),
  images: images,
};
export const MoreRotation = Template.bind({});
MoreRotation.args = {
  renderImageBuffer: 50,
  rotationRange: 80,
  children: (
    <section className="flex h-[400px] w-full place-content-center bg-primary-200">
      <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
        <TbMouse />
        <span>Move your mouse</span>
      </p>
    </section>
  ),
  images: images,
};
export const MoreRenderBuffer = Template.bind({});
MoreRenderBuffer.args = {
  renderImageBuffer: 300,
  rotationRange: 20,
  children: (
    <section className="flex h-[400px] w-full place-content-center bg-primary-200">
      <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
        <TbMouse />
        <span>Move your mouse</span>
      </p>
    </section>
  ),
  images: images,
};
