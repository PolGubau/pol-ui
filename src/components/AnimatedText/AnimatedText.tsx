import { AnimatePresence, motion } from 'framer-motion'
import { type HeadingLevel } from '../../types'
export interface AnimatedTextProps {
  as: HeadingLevel | 'p' | 'span'
  animation: AnimatedTextAnimations
  children: string
}

export enum AnimatedTextAnimationsEnum {
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
export type AnimatedTextAnimations = `${AnimatedTextAnimationsEnum}`

export const AnimatedText = ({
  as,
  children,
  animation = AnimatedTextAnimationsEnum['fade-down'],
}: AnimatedTextProps) => {
  const animations = {
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

  const wholeSenteceAnimations: string[] = [
    AnimatedTextAnimationsEnum.blur,
    AnimatedTextAnimationsEnum['fade-down'],
    AnimatedTextAnimationsEnum['fade-left'],
    AnimatedTextAnimationsEnum['fade-right'],
    AnimatedTextAnimationsEnum['fade-up'],
  ]
  const wordsAnimations: string[] = [
    AnimatedTextAnimationsEnum['pull-up'],
    AnimatedTextAnimationsEnum['staggered-fade-in'],
  ]
  const lettersAnimations: string[] = [AnimatedTextAnimationsEnum.gradual, AnimatedTextAnimationsEnum['letter-pull-up']]

  const Text = as ?? 'p'

  if (wholeSenteceAnimations.includes(animation)) {
    return (
      <AnimationsForWholeSentence animation={animations[animation]} TextComponents={Text}>
        {children}
      </AnimationsForWholeSentence>
    )
  } else if (wordsAnimations.includes(animation)) {
    return (
      <AnimationsForWords animation={animations[animation]} TextComponents={Text}>
        {children}
      </AnimationsForWords>
    )
  } else if (lettersAnimations.includes(animation)) {
    return (
      <AnimationsForLetters animation={animations[animation]} TextComponents={Text}>
        {children}
      </AnimationsForLetters>
    )
  }

  return 'not implemented'
}

interface AnimationsItemProps {
  animation: (typeof AnimatedText.prototype.animations)[0]
  TextComponents: HeadingLevel | 'p' | 'span'
  children: string
}
export const AnimationsForWholeSentence = ({ animation, children, TextComponents }: AnimationsItemProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={animation}
      >
        <TextComponents>{children}</TextComponents>
      </motion.div>
    </motion.div>
  )
}

export const AnimationsForWords = ({ animation, children, TextComponents }: AnimationsItemProps) => {
  const MotionText = motion(TextComponents)
  return (
    <motion.h1 variants={animation.container} initial="hidden" animate="show" className="flex flex-wrap gap-1">
      {children.split(' ').map((word, i) => (
        <MotionText key={i} variants={animation.item}>
          {word === '' ? <span>&nbsp;</span> : word}
        </MotionText>
      ))}
    </motion.h1>
  )
}

export const AnimationsForLetters = ({ animation, children }: AnimationsItemProps) => {
  return (
    <div className="flex flex-wrap">
      <AnimatePresence>
        {children.split('').map((char, i) => (
          <motion.p
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animation}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className=""
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  )
}
