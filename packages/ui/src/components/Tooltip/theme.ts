export interface TooltipTheme {
  content: {
    base: string
    animation: string
  }
  arrow: string
}

export const tooltipTheme: TooltipTheme = {
  content: {
    base: "bg-secondary-50 dark:bg-secondary-900 px-3 py-2 leading-none shadow-md will-change-[transform,opacity] text-sm rounded-xl select-none text-secondary-800 dark:text-secondary-50 shadow dark:shadow-secondary/20",
    animation:
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  },
  arrow: "fill-secondary-50 dark:fill-secondary-900",
}
