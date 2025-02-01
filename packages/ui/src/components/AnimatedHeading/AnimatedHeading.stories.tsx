import type { Meta } from "@storybook/react";
import { useState } from "react";
import { TbReload } from "react-icons/tb";
import { Button } from "../Button";
import { AnimatedSplitText } from "./AnimatedHeading";

export default {
  title: "Components/AnimatedText",
  component: AnimatedSplitText,
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

export const Default = () => {
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
        <p className="animate-wiggle">Wiggle</p>
        <p className="animate-grow">Grow text</p>
        <p className="animate-grow-complete">Complete Grow text</p>
        <p className="animate-[wiggle_1s_ease-in-out_infinite]">Infinite Wiggle</p>
        <p className="animate-shake">Shaking</p>
        <p className="animate-[shake_1s_ease-in-out_infinite]">Infinite Shaking</p>
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
    <div className="flex flex-col gap-4">
      <Button onClick={() => setKey((prev) => prev + 1)} type="button">
        Render again
      </Button>

      <div className="grid grid-cols-4 gap-4 *:p-2 *:rounded-xl *:bg-primary-100 ">
        <AnimatedSplitText key={`right-${key}`} text="slide from right" animation="slide-right" />
        <AnimatedSplitText key={`left-${key}`} text="slide from left" animation="slide-left" />
        <AnimatedSplitText key={`top-${key}`} text="slide from left" animation="slide-top" />
        <AnimatedSplitText key={`bottom-${key}`} text="slide from left" animation="slide-bottom" />
        <AnimatedSplitText key={`blurred-${key}`} text="Blurred text" animation="blur" />
        <AnimatedSplitText key={`left-alt-${key}`} text="Lettered" wrapperClassName="space-x-0" separator="" />
        <AnimatedSplitText key={`grow-x-${key}`} text="Horizontal text" animation="grow-x" />
        <AnimatedSplitText key={`grow-y-${key}`} text="Vertical text" animation="grow-y" />
      </div>
    </div>
  );
};
