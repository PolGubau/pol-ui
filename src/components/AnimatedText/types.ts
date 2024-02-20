export enum AnimatedHeadingAnimationsEnum {
  'fade-down' = 'fade-down',
  'fade-up' = 'fade-up',
  'fade-left' = 'fade-left',
  'fade-right' = 'fade-right',
  'blur' = 'blur',
  'pull-up' = 'pull-up',
  'staggered-fade-in' = 'staggered-fade-in',
  'gradual' = 'gradual',
  'letter-pull-up' = 'letter-pull-up',
}
export const wholeSenteceAnimations: string[] = [
  AnimatedHeadingAnimationsEnum.blur,
  AnimatedHeadingAnimationsEnum['fade-down'],
  AnimatedHeadingAnimationsEnum['fade-left'],
  AnimatedHeadingAnimationsEnum['fade-right'],
  AnimatedHeadingAnimationsEnum['fade-up'],
]
export const wordsAnimations: string[] = [
  AnimatedHeadingAnimationsEnum['pull-up'],
  AnimatedHeadingAnimationsEnum['staggered-fade-in'],
]
export const lettersAnimations: string[] = [
  AnimatedHeadingAnimationsEnum.gradual,
  AnimatedHeadingAnimationsEnum['letter-pull-up'],
]
export const animations = {
  'fade-down': {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  },
  'fade-up': {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' } },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' } },
  },
  blur: {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    show: { filter: 'blur(0px)', opacity: 1 },
  },
  'pull-up': {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1 },
    },
  },
  'staggered-fade-in': {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    },
  },
  gradual: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  'letter-pull-up': {
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
}
export type AnimatedHeadingsAnimations = `${AnimatedHeadingAnimationsEnum}`
