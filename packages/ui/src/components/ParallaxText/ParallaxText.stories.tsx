import type { Meta } from "@storybook/react";

import { ParallaxText } from "./ParallaxText";

export default {
  title: "Components/ParallaxText",
  component: ParallaxText,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center justify-center overflow-hidden bg-primary">
        <div className="pt-20 min-h-[500px] my-20  ">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// const Template: StoryFn<ParallaxTextProps> = args => <ParallaxText {...args} />

export function Default() {
  const text = "Parallax text in Pol-ui";
  return (
    <section>
      <ParallaxText velocity={-5} className="">
        {text}
      </ParallaxText>
      <ParallaxText velocity={1}>{text}</ParallaxText>
      <ParallaxText>{text}</ParallaxText>
    </section>
  );
}

export function Blurred() {
  const text = "Parallax text in Pol-ui";
  return (
    <section>
      <ParallaxText velocity={-2} className="blur-[5px]">
        {text}
      </ParallaxText>
      <ParallaxText className="blur-[2px]" velocity={1}>
        {text}
      </ParallaxText>
      <ParallaxText>{text}</ParallaxText>
    </section>
  );
}
export function SameDirection() {
  const text = "Parallax text in Pol-ui";
  return (
    <section>
      <ParallaxText velocity={1}>{text}</ParallaxText>
      <ParallaxText velocity={2}>{text}</ParallaxText>
      <ParallaxText velocity={3}>{text}</ParallaxText>
      <ParallaxText velocity={5}>{text}</ParallaxText>
      <ParallaxText velocity={6}>{text}</ParallaxText>
    </section>
  );
}
export function CustomClass() {
  const text = "Parallax text in Pol-ui";
  return (
    <section>
      <ParallaxText className="text-error">{text}</ParallaxText>
      <ParallaxText className="text-success">{text}</ParallaxText>
      <ParallaxText className="text-info">{text}</ParallaxText>
      <ParallaxText className="text-warning">{text}</ParallaxText>
      <ParallaxText className="text-secondary">{text}</ParallaxText>
    </section>
  );
}
export function CustomElementsAmount() {
  const text = "Parallax text in Pol-ui";
  return (
    <section>
      <ParallaxText className="text-sm" renderedElements={20}>
        {text}
      </ParallaxText>
      <ParallaxText className="text-md" renderedElements={18}>
        {text}
      </ParallaxText>
      <ParallaxText className="text-lg" renderedElements={16}>
        {text}
      </ParallaxText>
      <ParallaxText className="text-xl" renderedElements={14}>
        {text}
      </ParallaxText>
      <ParallaxText className="text-2xl" renderedElements={12}>
        {text}
      </ParallaxText>
    </section>
  );
}
export function CustomElements() {
  return (
    <section>
      <ParallaxText as="h1">I'm a H1</ParallaxText>
      <ParallaxText as="h2">I'm a H2</ParallaxText>
      <ParallaxText as="h3">I'm a H3</ParallaxText>
      <ParallaxText as="h3">I'm a H4</ParallaxText>
      <ParallaxText as="button">I'm a button 😵‍💫</ParallaxText>
    </section>
  );
}
export function Resistence() {
  return (
    <section>
      <ParallaxText resistance={6000}>I'm a H1</ParallaxText>
    </section>
  );
}
