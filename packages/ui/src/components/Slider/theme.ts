import { cn } from "../../helpers";

export interface SliderTheme {
  base: string;
  track: {
    base: string;
    vertical: string;
    horizontal: string;
  };
  range: string;
  thumb: string;
}
export const sliderTheme: SliderTheme = {
  base: "relative flex w-full touch-none select-none items-center group data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-3 data-[orientation=vertical]:h-full data-[disabled=true]:opacity-50  data-[disabled=true]:pointer-events-none",

  track: {
    base: cn(
      "relative grow overflow-hidden rounded-full bg-secondary-200 dark:bg-secondary-800 cursor-ew-resize h-3 w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3",
    ),

    vertical: "w-3 h-full",
    horizontal: "h-3 w-full",
  },

  range: "absolute h-full data-[orientation=vertical]:w-full",
  thumb:
    "block w-4 h-4 group-hover:h-6 group-hover:w-6 rounded-full border-8 group-hover:border-4 focus-visible:border-4 bg-secondary-50 dark:bg-secondary-900 transition-all ring-0 focus-visible:ring-2 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
};
