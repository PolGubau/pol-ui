import type { Meta, StoryFn } from "@storybook/react";
import { ColorsEnum, MainSizesEnum } from "../../types";
import { Dot } from "./Dot";
const meta: Meta<typeof Dot> = {
  title: "Components/Dot",
  component: Dot,
};
export default meta;
export const Default: StoryFn = () => (
  <div className="flex gap-2 items-center">
    <Dot />
    Verified
  </div>
);
export const Sizes = () => {
  return (
    <ul className="flex flex-col gap-2">
      {Object.values(MainSizesEnum).map((size) => (
        <li className="flex gap-2 items-center" key={size}>
          <Dot size={size} />
          Verified
        </li>
      ))}
    </ul>
  );
};
export const Colors = () => {
  return (
    <ul className="flex flex-col gap-2">
      {Object.values(ColorsEnum).map((v) => (
        <li className="flex gap-2 items-center" key={v}>
          <Dot color={v} />
          Verified
        </li>
      ))}
    </ul>
  );
};
export const CustomStyles = () => (
  <div className="flex gap-2 items-center">
    <Dot className="bg-red-500 rounded-sm w-[40px]" />
    Verified
  </div>
);
export const Animated = () => (
  <ul className="flex flex-col gap-2">
    <li className="flex gap-2 items-center">
      <Dot className="animate-ping" />
      Verified
    </li>
    <li className="flex gap-2 items-center">
      <Dot className="animate-bounce" />
      Verified
    </li>
    <li className="flex gap-2 items-center">
      <Dot className="animate-pulse" />
      Verified
    </li>
    <li className="flex gap-2 items-center">
      <Dot className="animate-pulsing animate-iteration-count-infinite" />
      Verified
    </li>
    <li className="flex gap-2 items-center">
      <Dot className="bg-transparent border-primary border-r-2 border-b-2 animate-rotate-360 animate-iteration-count-infinite" />
      Verified
    </li>
  </ul>
);
