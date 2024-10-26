import { useState } from "react"
import * as Popover from "@radix-ui/react-popover"
import type { Meta } from "@storybook/react"
import { TbDots, TbX } from "react-icons/tb"

import { useMeasure, useStep } from "../../hooks"
import { Button } from "../Button"
import { Popover as Pop } from "../Popover"
import { TransitionPanel } from "./TransitionPanel"

export default {
  title: "Components/TransitionPanel",
  component: TransitionPanel,
  decorators: [
    (Story) => (
      <div className="flex p-6 grid place-items-center min-h-[200px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const FEATURES = [
  {
    title: "Brand",
    description:
      "Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.",
  },
  {
    title: "Product",
    description:
      "Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions. We specialize in web applications.",
  },
  {
    title: "Website",
    description:
      "Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.",
  },
  {
    title: "Design System",
    description:
      "Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.",
  },
]

export const Default = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const direction = 1
  const { ref, bounds } = useMeasure<HTMLDivElement>()

  return (
    <>
      <TransitionPanel
        className="border overflow-hidden rounded-xl border-zinc-950/10 shadow dark:bg-zinc-700"
        activeIndex={activeIndex}
        variants={{
          enter: (direction) => ({
            x: direction > 0 ? 364 : -364,
            opacity: 0,
            height: bounds.height > 0 ? bounds.height : "auto",
            position: "initial",
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : "auto",
          },
          exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 364 : -364,
            opacity: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }),
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {FEATURES.map((feature, index) => (
          <div key={index} ref={ref}>
            <div className="flex flex-col gap-2 p-4">
              <h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </TransitionPanel>
      <Button onClick={() => setActiveIndex(activeIndex - 1)}>Previous</Button>
      <Button
        onClick={() =>
          activeIndex === FEATURES.length - 1
            ? null
            : setActiveIndex(activeIndex + 1)
        }
      >
        {activeIndex === FEATURES.length - 1 ? "Close" : "Next"}
      </Button>
    </>
  )
}

export function TransitionPanelCard() {
  const [
    currentStep,
    { goToNextStep, goToPrevStep, canGoToNextStep, canGoToPrevStep, direction },
  ] = useStep(FEATURES.length)

  const { ref, bounds } = useMeasure<HTMLDivElement>()

  return (
    <div className="w-[364px] overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700">
      <TransitionPanel
        activeIndex={currentStep - 1}
        variants={{
          enter: (direction) => ({
            x: direction > 0 ? 364 : -364,
            opacity: 0,
            height: bounds.height > 0 ? bounds.height : "auto",
            position: "initial",
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : "auto",
          },
          exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 364 : -364,
            opacity: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }),
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {FEATURES.map((feature, index) => (
          <div key={index} className="px-4 pt-4" ref={ref}>
            <small>
              {currentStep}/{FEATURES.length}
            </small>
            <h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </TransitionPanel>
      <div className="flex justify-between p-4">
        <Button disabled={!canGoToPrevStep} onClick={goToPrevStep}>
          Previous
        </Button>
        <Button disabled={!canGoToNextStep} onClick={goToNextStep}>
          Next
        </Button>
      </div>
    </div>
  )
}
export const InPopover = () => {
  const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
          aria-label="Update dimensions"
        >
          <TbDots />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">
            <p className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">
              Dimensions
            </p>
            <fieldset className="flex gap-5 items-center">
              <label
                className="text-[13px] text-violet11 w-[75px]"
                htmlFor="width"
              >
                Width
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="width"
                defaultValue="100%"
              />
            </fieldset>
            <fieldset className="flex gap-5 items-center">
              <label
                className="text-[13px] text-violet11 w-[75px]"
                htmlFor="maxWidth"
              >
                Max. width
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="maxWidth"
                defaultValue="300px"
              />
            </fieldset>
            <fieldset className="flex gap-5 items-center">
              <label
                className="text-[13px] text-violet11 w-[75px]"
                htmlFor="height"
              >
                Height
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="height"
                defaultValue="25px"
              />
            </fieldset>
            <fieldset className="flex gap-5 items-center">
              <label
                className="text-[13px] text-violet11 w-[75px]"
                htmlFor="maxHeight"
              >
                Max. height
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="maxHeight"
                defaultValue="none"
              />
            </fieldset>
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close"
          >
            <TbX />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
  return (
    <>
      <Pop>
        <TransitionPanelCard />
      </Pop>
      <PopoverDemo />
    </>
  )
}
