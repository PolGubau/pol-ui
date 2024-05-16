export type TooltipTheme = {
  content: {
    base: string
    animation: string
  }
}

export const tooltipTheme: TooltipTheme = {
  content: {
    base: ' bg-secondary-50 dark:bg-secondary-900 px-3 py-2 leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] text-sm rounded-xl select-none',
    animation:
      'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
  },
}
