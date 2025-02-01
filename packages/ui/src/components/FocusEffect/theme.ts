export interface FocusEffectTheme {
  container: string;
  wrapper: string;
  circle: string;
}

export const focusEffectTheme: FocusEffectTheme = {
  container:
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden group-focus:hidden group-focus-visible:flex justify-center items-center",
  wrapper: "animate-zoom w-full h-full flex justify-center items-center group-disabled:hidden",
  circle:
    "animate-pump rounded-full bg-secondary-800/50 group-focus-visible:w-[80%] aspect-square group-focus-visible:h-auto",
};
