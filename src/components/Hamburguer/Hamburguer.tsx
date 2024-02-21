import type { SVGMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { type Colors, type RoundedSizes, type DeepPartial, ColorsEnum } from '../../types'
import type { IconButtonTheme } from '../IconButton'
import { Toggle } from '../Toggle'
import { getTheme } from '../../theme-store'
import { cn, mergeDeep } from '../../helpers'

export interface HamburguerProps extends Omit<SVGMotionProps<SVGSVGElement>, 'color'> {
  open?: boolean
  color?: Colors
  strokeWidth?: string | number
  lineProps?: SVGMotionProps<SVGLineElement>
  theme?: DeepPartial<IconButtonTheme>
  disabled?: boolean
  rounded?: RoundedSizes
  outline?: boolean
  onClick?: () => void
}

export const Hamburguer = ({
  open = false,
  width = 16,
  height = 16,
  strokeWidth = 3,
  lineProps = {},
  onClick,
  color = ColorsEnum.primary,
  theme: customTheme = {},
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
  const theme = mergeDeep(getTheme().hamburguer, customTheme)

  return (
    <Toggle onClick={onClick} active={open}>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        width={width}
        height={height}
        fill="none"
        className={cn(theme.base, theme.color[color])}
        {...props}
      >
        <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1={unitHeight / 2} y2={unitHeight / 2} variants={center} {...lineProps} />
        <motion.line x1="0" x2={unitWidth} y1={unitHeight} y2={unitHeight} variants={bottom} {...lineProps} />
      </motion.svg>{' '}
    </Toggle>
  )
}
