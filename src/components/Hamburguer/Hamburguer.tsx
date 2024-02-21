import type { SVGMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import type { Colors, RoundedSizes, DeepPartial } from '../../types'
import { ColorsEnum } from '../../types'
import type { IconButtonTheme } from '../IconButton'
import { cn, mergeDeep, rippleClass } from '../../helpers'
import { getTheme } from '../../theme-store'
import { useRipple } from '../../hooks'

export interface HamburguerProps extends Omit<SVGMotionProps<SVGSVGElement>, 'color'> {
  open?: boolean
  color?: Colors
  strokeWidth?: string | number
  lineProps?: SVGMotionProps<SVGLineElement>
  theme?: DeepPartial<IconButtonTheme>
  disabled?: boolean
  rounded?: RoundedSizes
  outline?: boolean
}

export const Hamburguer = ({
  open = false,
  width = 24,
  height = 24,
  strokeWidth = 3,
  color = ColorsEnum.primary,
  lineProps = {},
  theme: customTheme = {},
  disabled = false,
  rounded = 'full',
  outline = false,
  className = '',

  ...props
}: HamburguerProps) => {
  const variant = open ? 'opened' : 'closed'
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  }
  lineProps = {
    stroke: 'currentColor',
    strokeWidth: strokeWidth as number,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
    strokeLinecap: 'round',
    ...lineProps,
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  const theme = mergeDeep(getTheme().iconButton, customTheme)
  const [ripple, event] = useRipple({
    opacity: 0.2,
    className: rippleClass(color),
  })

  return (
    <motion.svg
      ref={ripple}
      onPointerDown={event}
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      className={cn(
        theme.base,
        disabled && theme.disabled,
        theme.rounded[rounded],
        theme.color[color],
        theme.inner.base,
        outline && theme.inner.outline,
        outline && theme.inner.color[color],
        className,
      )}
      width={width}
      height={height}
      {...props}
    >
      <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1={unitHeight / 2} y2={unitHeight / 2} variants={center} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1={unitHeight} y2={unitHeight} variants={bottom} {...lineProps} />
    </motion.svg>
  )
}
