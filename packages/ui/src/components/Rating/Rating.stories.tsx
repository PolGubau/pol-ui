import type { Meta, StoryFn } from "@storybook/react";
import { TbAdjustmentsBolt, TbCactus, TbLayout, TbPhoneCheck, TbPhotoFilled } from "react-icons/tb";

import { Rating, type RatingTheme } from ".";
import { theme } from "../../theme";
import type { MainSizes } from "../../types";
import { Progress } from "../Progress";
import type { RatingProps } from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,

  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

const ratingTheme: RatingTheme = theme.rating;

export const DefaultRating = Template.bind({});
DefaultRating.storyName = "Default";

export const CustomStarAmount = Template.bind({});
CustomStarAmount.storyName = "Custom stars amount";
CustomStarAmount.args = {
  stars: 10,
};

export const CustomFilledAmount = (): React.ReactNode => (
  <div className="flex flex-col gap-4 w-full">
    <Rating stars={2} filled={1} />
    <Rating stars={2} filled={3} />
    <Rating stars={10} filled={3} />
    <Rating stars={10} filled={5} />
    <Rating stars={10} filled={10} />
  </div>
);
export const CustomSize = (): React.ReactNode => (
  <div className="flex flex-col gap-4 w-full">
    {Object.keys(ratingTheme.star.size).map((size) => (
      <Rating key={size} size={size as MainSizes} />
    ))}
  </div>
);
export const CustomIcon = (): React.ReactNode => (
  <div className="flex flex-col gap-4 w-full">
    <Rating starIcon={TbCactus} filled={1} />
    <Rating starIcon={TbAdjustmentsBolt} filled={2} />
    <Rating starIcon={TbPhotoFilled} filled={3} />
    <Rating starIcon={TbLayout} filled={4} />
    <Rating starIcon={TbPhoneCheck} filled={5} />
  </div>
);
export const MoreDetails = (): React.ReactNode => (
  <div className="flex flex-col gap-4 w-full">
    <Rating />
    <section className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        5 stars
        <Progress progress={85} className="w-[400px]" size={"lg"} />
        2174 votes
      </div>
      <div className="flex gap-2 items-center">
        4 stars
        <Progress progress={42} className="w-[400px]" size={"lg"} />
        1234 votes
      </div>
      <div className="flex gap-2 items-center">
        3 stars
        <Progress progress={6} className="w-[400px]" size={"lg"} />
        23 votes
      </div>
      <div className="flex gap-2 items-center">
        2 stars
        <Progress progress={12} className="w-[400px]" size={"lg"} />
        432 votes
      </div>
      <div className="flex gap-2 items-center">
        1 stars
        <Progress progress={23} className="w-[400px]" size={"lg"} />
        432 votes
      </div>
    </section>
  </div>
);
