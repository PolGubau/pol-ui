export type TooltipTheme = {
  content: {
    base: string
    animation: string
  }
}

export const tooltipTheme: TooltipTheme = {
  content: {
    base: ' bg-secondary-50 dark:bg-secondary-900 px-3 py-2 leading-none shadow-xl will-change-[transform,opacity] text-sm rounded-xl select-none',
    animation:
      'data-[state=delayed-open]:data-[side=top]:animate-slideDownIn data-[state=delayed-open]:data-[side=right]:animate-slideLeftIn data-[state=delayed-open]:data-[side=left]:animate-slideRightIn data-[state=delayed-open]:data-[side=bottom]:animate-slideUpIn',
  },
}
