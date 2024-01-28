import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { Colors } from '../PoluiProvider'
import { ColorsEnum } from '../../types/enums'
import { Label } from '../Label'
import { TbCheck } from 'react-icons/tb'
import type { CheckboxTheme } from './theme'
import { AnimatePresence, motion } from 'framer-motion'

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  theme?: DeepPartial<CheckboxTheme>
  color?: keyof Colors
  label?: string
}

const AnimatedCheckIcon = ({
  initial = true,
  isVisible,
  className,
}: {
  initial?: boolean
  isVisible: boolean
  className: string
}) => {
  return (
    <AnimatePresence initial={initial}>
      {isVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={(twMerge('top-[5px] left-1 w-[60%] h-[60%] text-white z-[1]'), className)}
        >
          <motion.path
            d="M2.5 9.5L8.5 15.5L21.5 2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            strokeWidth="4"
            transition={{
              type: 'tween',
              duration: 0.3,
              ease: isVisible ? 'easeOut' : 'easeIn',
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </AnimatePresence>
  )
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, color = ColorsEnum.primary, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme)

    return (
      <>
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="ripple-on"
            data-ripple-dark="true"
          >
            <input
              id="ripple-on"
              {...props}
              className={twMerge(theme.base, theme.before, theme.color[color], className)}
              ref={ref}
              type="checkbox"
            />

            {typeof props.checked === 'undefined' ? (
              <span className={twMerge(theme.check.base, theme.check.color[color])}>
                <TbCheck />
              </span>
            ) : (
              <AnimatedCheckIcon
                isVisible={props.checked ?? false}
                className={twMerge(theme.floating.base, theme.check.color[color])}
              />
            )}
          </label>
          {label && <Label htmlFor="ripple-on">{label}</Label>}{' '}
        </div>
      </>
    )
  },
)

Checkbox.displayName = 'Checkbox'
