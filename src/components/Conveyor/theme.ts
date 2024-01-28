export interface ConveyorTheme {
  scroller: string
  list: string
  pauseAnimation: string
  animation: string
}

export const conveyorTheme: ConveyorTheme = {
  scroller: 'scroller relative z-20 justify-center w-full max-w-7xl overflow-hidden',
  list: 'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ',
  pauseAnimation: 'hover:[animation-play-state:paused]',
  animation: 'animate-scroll ',
}
