'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export interface TextGeneratorProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

/**
 * TextGenerator is a component that takes a string and animates it word by word.
 * @param text - The text to be animated.
 * @param speed - The speed of the animation.
 * @param delay - The delay between each word.
 * @param className - The class name to be applied to the text.
 *
 */
export const TextGenerator = ({ text, speed = 1, delay = 0.2, className }: TextGeneratorProps) => {
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

  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span key={word + idx} className={twMerge('opacity-0', className)}>
            {word}{' '}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
