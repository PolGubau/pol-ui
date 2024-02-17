export interface FollowerPointerTheme {
  base: string
  icon: string
  pointerWrapper: string
  pointer: string
}
export const followerPointerTheme: FollowerPointerTheme = {
  base: 'cursor-none relative',
  icon: 'h-6 w-6 text-primary transform -rotate-[70deg] -translate-x-[8px] -translate-y-[6px] stroke-primary-600 z-50',
  pointerWrapper: 'h-4 w-4 rounded-full absolute z-50',
  pointer: 'whitespace-nowrap min-w-max text-xs rounded-full z-50',
}
