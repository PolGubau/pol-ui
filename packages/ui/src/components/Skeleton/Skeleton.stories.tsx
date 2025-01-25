import type { Meta } from "@storybook/react";

import { Skeleton } from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta;

export const Default = () => {
  return (
    <div className="flex gap-4">
      <div className="h-[30px] flex gap-2">
        <Skeleton className="h-full aspect-square rounded-full" />
        <Skeleton className="h-full w-[80px] bg-secondary-400" />
        <Skeleton className="h-full w-[160px] bg-secondary-600" />
      </div>
    </div>
  );
};
