import { AnimatePresence, motion } from 'framer-motion'
import type { DeepPartial, WithClassName } from '../../types'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { AnimatedTextTheme } from './theme'
import type { DynamicHeadingProps } from '../DynamicHeading'
import { DynamicHeading } from '../DynamicHeading'
import {
  AnimatedHeadingAnimationsEnum,
  wholeSenteceAnimations,
  type AnimatedHeadingsAnimations,
  wordsAnimations,
  lettersAnimations,
  animations,
} from './types'

export interface AnimatedTextProps extends WithClassName, Pick<DynamicHeadingProps, 'as'> {
  animation: AnimatedHeadingsAnimations
  children: string
  theme?: DeepPartial<AnimatedTextTheme>
}

export const AnimatedHeading = ({
  as,
  children,
  className,
  theme: customTheme = {},
  animation = AnimatedHeadingAnimationsEnum['fade-down'],
}: AnimatedTextProps) => {
  const theme = mergeDeep(getTheme().animatedText, customTheme)

  if (wholeSenteceAnimations.includes(animation)) {
    return (
      <AnimationsForWholeSentence className={className} animation={animations[animation]} as={as} theme={theme}>
        {children}
      </AnimationsForWholeSentence>
    )
  } else if (wordsAnimations.includes(animation)) {
    return (
      <AnimationsForWords animation={animations[animation]} as={as} theme={theme}>
        {children}
      </AnimationsForWords>
    )
  } else if (lettersAnimations.includes(animation)) {
    return (
      <AnimationsForLetters animation={animations[animation]} as={as} theme={theme}>
        {children}
      </AnimationsForLetters>
    )
  }

  return 'not implemented'
}

interface AnimationsItemProps extends WithClassName, Pick<AnimatedTextProps, 'as' | 'children'> {
  animation: (typeof AnimatedHeading.prototype.animations)[0]
  theme: AnimatedTextTheme
}
export const AnimationsForWholeSentence = ({ animation, children, as, className, theme }: AnimationsItemProps) => {
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
      <motion.div className={cn(theme.base, className)} variants={animation}>
        <DynamicHeading as={as}>{children}</DynamicHeading>
      </motion.div>
    </motion.div>
  )
}

export const AnimationsForWords = ({ animation, children, className, theme, as }: AnimationsItemProps) => {
  const MotionHeading = motion(DynamicHeading)
  return (
    <MotionHeading as={as}>
      <motion.div variants={animation.container} initial="hidden" animate="show" className={cn(theme.base,theme.word, className)}>
        {children.split(' ').map((word, i) => (
          <motion.span key={i} variants={animation.item} className={cn(theme.word, theme.base, className)}>
            {word === '' ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.div>
    </MotionHeading>
  )
}

export const AnimationsForLetters = ({ animation, children, className, theme }: AnimationsItemProps) => {
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
            className={cn(theme.base, className)}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  )
}
