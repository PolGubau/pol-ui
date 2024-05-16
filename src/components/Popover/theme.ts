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
      'will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  },
  close: 'absolute top-2 right-2 height-[25px] width-[25px]',
}
