import type { Meta } from "@storybook/react";
import React, { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { cn } from "../../helpers";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Drawer, NestedDrawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
export default meta;

const SampleContent = () => (
  <div className="flex flex-col h-full gap-4 pt-8">
    <h1 className="text-2xl font-bold text-center">Drawer Content</h1>
    <p className="text-gray-500 text-center">This is a sample content for the drawer</p>

    <div className="flex gap-2 justify-center">
      <Button>Action 1</Button>
      <Button>Action 2</Button>
      <Button>Action 3</Button>
    </div>
  </div>
);

export const Example = () => {
  return (
    <Drawer>
      <SampleContent />
    </Drawer>
  );
};
export const CustomTrigger = () => {
  return (
    <Drawer
      trigger={
        <IconButton className="w-[40px]">
          <TbDotsVertical />
        </IconButton>
      }
    >
      <SampleContent />
    </Drawer>
  );
};

export const Controlled = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <pre> The drawer is {open ? "open" : "closed"} </pre>
      <Drawer open={open} onClose={() => setOpen(false)} label="Now the state commes from the other button">
        <SampleContent />
      </Drawer>
    </>
  );
};

export const NotScaledBackground = () => {
  return (
    <Drawer shouldScaleBackground={false}>
      <SampleContent />
    </Drawer>
  );
};
export const Directions = () => {
  return (
    <div className="flex flex-col gap-4">
      <Drawer direction="bottom" label="Bottom">
        <SampleContent />
      </Drawer>
      <Drawer direction="left" label="Left">
        <SampleContent />
      </Drawer>
      <Drawer direction="right" label="Right">
        <SampleContent />
      </Drawer>
      <Drawer direction="top" label="Top">
        <SampleContent />
      </Drawer>
    </div>
  );
};
export const DirectionsFilled = () => {
  return (
    <div className="flex flex-col gap-4">
      <Drawer direction="bottom" label="Bottom" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
      <Drawer direction="left" label="Left" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
      <Drawer direction="right" label="Right" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
      <Drawer direction="top" label="Top" shouldScaleBackground={true}>
        <SampleContent />
      </Drawer>
    </div>
  );
};
export const Undismissible = () => {
  return (
    <Drawer dismissible={false}>
      <SampleContent />
    </Drawer>
  );
};

export const HandleOnly = () => {
  return (
    <Drawer handleOnly={true}>
      <SampleContent />
    </Drawer>
  );
};

export const Nested = () => {
  return (
    <Drawer>
      <NestedDrawer direction="left">
        <NestedDrawer direction="right">
          <NestedDrawer direction="top">
            <NestedDrawer direction="left">
              <SampleContent />
            </NestedDrawer>
          </NestedDrawer>
        </NestedDrawer>
      </NestedDrawer>
    </Drawer>
  );
};
export const Snapped = () => {
  const [snap, setSnap] = useState<number | string | null>("148px");

  return (
    <Drawer
      snapPoints={["160px", "355px", 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      label="drag multiple times"
    >
      <div
        className={cn("flex flex-col max-w-md mx-auto w-full p-4 pt-5", {
          "overflow-y-auto": snap === 1,
          "overflow-hidden": snap !== 1,
        })}
      >
        <div className="flex items-center">
          <svg
            className="text-yellow-400 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            className="text-yellow-400 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            className="text-yellow-400 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            className="text-yellow-400 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            className="text-gray-300 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            />
          </svg>
        </div>{" "}
        <h1 className="text-2xl mt-2 font-medium">The Hidden Details</h1>
        <p className="text-sm mt-1 text-gray-600 mb-6">2 modules, 27 hours of video</p>
        <p className="text-gray-600">
          The world of user interface design is an intricate landscape filled with hidden details and nuance. In this
          course, you will learn something cool. To the untrained eye, a beautifully designed UI.
        </p>
        <button className="bg-black text-gray-50 mt-8 rounded-md h-[48px] flex-shrink-0 font-medium" type="button">
          Buy for $199
        </button>
        <div className="mt-12">
          <h2 className="text-xl font-medium">Module 01. The Details</h2>
          <div className="space-y-4 mt-4">
            <div>
              <span className="block">Layers of UI</span>
              <span className="text-gray-600">A basic introduction to Layers of Design.</span>
            </div>
            <div>
              <span className="block">Typography</span>
              <span className="text-gray-600">The fundamentals of type.</span>
            </div>
            <div>
              <span className="block">UI Animations</span>
              <span className="text-gray-600">Going through the right easings and durations.</span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <figure>
            <blockquote className="font-serif">
              “I especially loved the hidden details video. That was so useful, learned a lot by just reading it.
              Can&rsquo;t wait for more course content!”
            </blockquote>
            <figcaption>
              <span className="text-sm text-gray-600 mt-2 block">Yvonne Ray, Frontend Developer</span>
            </figcaption>
          </figure>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-medium">Module 02. The Process</h2>
          <div className="space-y-4 mt-4">
            <div>
              <span className="block">Build</span>
              <span className="text-gray-600">Create cool components to practice.</span>
            </div>
            <div>
              <span className="block">User Insight</span>
              <span className="text-gray-600">Find out what users think and fine-tune.</span>
            </div>
            <div>
              <span className="block">Putting it all together</span>
              <span className="text-gray-600">Let&apos;s build an app together and apply everything.</span>
            </div>
          </div>
        </div>
      </div>{" "}
    </Drawer>
  );
};
