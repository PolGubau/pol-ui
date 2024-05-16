export type PopoverTheme = {
  content: {
    base: string
    amimation: string
  }
  close: string
}

export const popoverTheme: PopoverTheme = {
  content: {
    base: 'rounded-lg p-5 w-[260px] bg-secondary-50 dark:bg-secondary-900 shadow-lg',
    amimation:
      ' will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  },
  close:
    'rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default',
}
