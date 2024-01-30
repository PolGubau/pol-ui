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
  isVisible = false,
  theme: customTheme = {},
  color = ColorsEnum.primary,
}: {
  initial?: boolean
  isVisible?: boolean
  theme?: DeepPartial<CheckboxTheme>
  color?: CheckboxProps['color']
}) => {
  const theme = mergeDeep(getTheme().checkbox, customTheme)

  console.log('isVisible', isVisible)
  return (
    <AnimatePresence initial={initial} mode="wait">
      {isVisible && (
        <div className={twMerge(theme.floating.base)}>
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(theme.floating.svg, theme.check.color[color], 'stroke-current')}
          >
            <motion.path
              d="M2.5 9.5L8.5 15.5L21.5 2.5"
              animate={{ pathLength: 1 }}
              initial={{ pathLength: 0 }}
              exit={{ pathLength: 0 }}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transition={{
                type: 'tween',
                duration: 0.3,
                ease: isVisible ? 'easeOut' : 'easeIn',
              }}
            />
          </svg>
        </div>
      )}
    </AnimatePresence>
  )
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, color = ColorsEnum.primary, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme)

    return (
      <>
        <div className="inline-flex items-center gap-3 relative">
          <input
            id={props.id ?? label}
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
            <AnimatedCheckIcon isVisible={props.checked ?? false} color={color} />
          )}
          {label && <Label htmlFor={props.id ?? label}>{label}</Label>}
        </div>
      </>
    )
  },
)

Checkbox.displayName = 'Checkbox'
