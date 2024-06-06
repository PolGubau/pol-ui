'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '../../theme-store'
import { mergeDeep } from '../../helpers'
import type { TextGeneratorTheme } from './theme'
import type { DeepPartial } from '../../types'

export interface TextGeneratorProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  theme?: DeepPartial<TextGeneratorTheme>
}

/**
 * TextGenerator is a component that takes a string and animates it word by word.
 * @param text - The text to be animated.
 * @param speed - The speed of the animation.
 * @param delay - The delay between each word.
 * @param className - The class name to be applied to the text.
 * @param theme - The theme to be applied to the text.
 *
 */
export const TextGenerator = ({
  text,
  speed = 1,
  delay = 0.2,
  className,
  theme: customTheme = {},
}: TextGeneratorProps) => {
  const [scope, animate] = useAnimate()
  const wordsArray = text.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: speed,
        delay: stagger(delay),
      },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current])
  const theme = mergeDeep(getTheme().textGenerator, customTheme)

  return (
    <motion.div ref={scope} className={theme.wrapper}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span key={word + idx} className={twMerge(theme.base, className)}>
            {word}
            {` `}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
