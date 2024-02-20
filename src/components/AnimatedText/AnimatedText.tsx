import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { type HeadingLevel } from '../../types'
export interface AnimatedTextProps extends PropsWithChildren {
  as: HeadingLevel | 'p' | 'span'
  animation: AnimatedTextAnimations
}

export enum AnimatedTextAnimationsEnum {
  'fade-down' = 'fade-down',
  'fade-up' = 'fade-up',
  'fade-left' = 'fade-left',
  'fade-right' = 'fade-right',
  'blur' = 'blur',
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
  }

  const Text = as ?? 'h2'

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
        variants={animations[animation]}
      >
        <Text>{children}</Text>
      </motion.div>
    </motion.div>
  )
}
