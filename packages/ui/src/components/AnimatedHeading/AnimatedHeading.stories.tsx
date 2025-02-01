import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { TbReload } from "react-icons/tb";
import { Button } from "../Button";
import type { AnimatedHeadingProps } from "./AnimatedHeading";
import { AnimatedHeading, AnimationsForWords } from "./AnimatedHeading";
import { AnimatedHeadingAnimationsEnum } from "./types";

export default {
  title: "Components/AnimatedText",
  component: AnimatedHeading,
  decorators: [
    (Story) => (
      <div className="flex p-6 text-center w-full justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<AnimatedHeadingProps> = (args) => <AnimatedHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Pol-ui, powering web development",
};
export const CssAnimations = () => {
  const [key, setKey] = useState(0);
  return (
    <article className="flex flex-col gap-4">
      <Button onClick={() => setKey(key + 1)} type="button">
        <TbReload />
        Render again
      </Button>
      <div className="flex flex-col gap-4" key={key}>
        <p className="animate-slide-in-right">Slide from right</p>
        <p className="animate-slide-in-left">Slide from left</p>
        <p className="animate-slide-in-top">Slide from top</p>
        <p className="animate-slide-in-bottom">Slide from bottom</p>
        <p className="animate-grow-x">Grow Horizontal</p>
        <p className="animate-grow-y">Grow vertical</p>
        <p className="animate-blur">Slide from top</p>
        <p className="animate-to-blur" style={{ animationFillMode: "both" }}>
          Slide from bottom
        </p>
      </div>
    </article>
  );
};
export const AnimateEachWords = () => {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col gap-4 ">
      <Button onClick={() => setKey(key + 1)} type="button">
        Render again
      </Button>
      <table cellSpacing={10} cellPadding={20}>
        <tr className="*:outline *:px-4 *:p-1">
          <td>
            <AnimationsForWords key={key} text="slide from right" animation="slide-right" />
          </td>
          <td>
            <AnimationsForWords key={key} text="slide from left" animation="slide-left" />
          </td>
          <td>
            <AnimationsForWords key={key} text="slide from left" suffix=" " separator="" />
          </td>
        </tr>
      </table>
    </div>
  );
};
export const FadeLeft = Template.bind({});
FadeLeft.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["fade-left"],
};
export const FadeRight = Template.bind({});
FadeRight.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["fade-right"],
};
export const FadeBottom = Template.bind({});
FadeBottom.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["fade-up"],
};
export const Blur = Template.bind({});
Blur.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum.blur,
};
export const PullUp = Template.bind({});
PullUp.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["pull-up"],
};
export const StaggeredFadeIn = Template.bind({});
StaggeredFadeIn.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["staggered-fade-in"],
};
export const Gradual = Template.bind({});
Gradual.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum.gradual,
};
export const LetterPullUp = Template.bind({});
LetterPullUp.args = {
  ...Default.args,
  animation: AnimatedHeadingAnimationsEnum["letter-pull-up"],
};
