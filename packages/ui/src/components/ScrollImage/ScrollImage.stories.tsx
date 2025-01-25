import type { Meta, StoryFn } from "@storybook/react";
import ScrollImage, { type ScrollImageProps } from "./ScrollImage";

export default {
  title: "Components/ScrollImage",
  component: ScrollImage,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
const Template: StoryFn<ScrollImageProps> = (args: ScrollImageProps) => (
  <ScrollImage {...args} className="my-[50vh] h-[800px]" />
);

export const Default = () => {
  return (
    <div className="w-full flex flex-col gap-[50vh] mb-96">
      scroll :)
      <ScrollImage
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/4aa6b4a9-a08d-4fa1-8979-0c4cd1c3c397"
      />
      <ScrollImage
        displacementScale={200}
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/2cfbd531-90d6-4238-8d40-e4378d8c9f73"
      />
      <ScrollImage
        baseFrequency={1}
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/9c162a41-91bc-4bce-b63c-e954387b4161"
      />
      <ScrollImage
        baseFrequency={4}
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/a68f9631-052b-4dc9-ae6b-1592f958f32c"
      />
      <ScrollImage
        numOctaves={6}
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/145e3ba8-bf61-4653-8973-6fe05363d183"
      />
      <ScrollImage
        speed={3}
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/00915018-4099-4f9a-bdbe-5f1eae686f64"
      />
      <ScrollImage
        initialRadius={100}
        className="h-[600px]"
        image="https://image.lexica.art/full_webp/24a0200b-abc5-4a99-9118-77a29468b21e"
      />
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  image: "https://image.lexica.art/full_webp/4aa6b4a9-a08d-4fa1-8979-0c4cd1c3c397",
};
export const CustomSpeed = Template.bind({});
CustomSpeed.args = {
  ...Base.args,
  speed: 5,
};
export const CustomDisplacement = Template.bind({});
CustomDisplacement.parameters = {
  docs: {
    description: {
      story: "Custom displacement scale",
    },
  },
};

CustomDisplacement.args = {
  ...Base.args,
  displacementScale: 555,
};
