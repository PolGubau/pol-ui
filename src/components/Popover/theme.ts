export type PopoverTheme = {
  content: {
    base: string
    animation: string
  }
  close: string
}

export const popoverTheme: PopoverTheme = {
  content: {
    base: 'relative rounded-lg p-4 w-[260px] bg-secondary-50 dark:bg-secondary-900 shadow-lg',
    animation:
      'will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownIn data-[state=open]:data-[side=right]:animate-slideLeftIn data-[state=open]:data-[side=bottom]:animate-slideUpIn data-[state=open]:data-[side=left]:animate-slideRightIn',
  },
  close: 'absolute top-2 right-2 height-[25px] width-[25px]',
}
