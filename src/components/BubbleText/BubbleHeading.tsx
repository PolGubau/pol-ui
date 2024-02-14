import React from 'react'
import { DynamicHeading } from '../DynamicHeading'
import type { DeepPartial, HeadingLevel } from '../../types'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { BubbleHeadingTheme } from './theme'
export interface BubbleTextProps {
  children: string
  minWeight?: number
  maxWeight?: number
  step?: number

  /**
   * If true, the text will be bold when not hovered
   */
  opposite?: boolean
  as?: HeadingLevel
  className?: string
  theme?: DeepPartial<BubbleHeadingTheme>
  transitionDuration?: number
}

export const BubbleHeading: React.FC<BubbleTextProps> = ({
  children,
  minWeight = 100,
  maxWeight = 900,
  step = 100,
  as = 'h2',
  opposite,
  transitionDuration = 0.25,
  className,
  theme: customTheme = {},
}: BubbleTextProps) => {
  const theme = mergeDeep(getTheme().bubbleHeading, customTheme)

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  const distanceFromHovered = (idx: number) => {
    if (hoveredIndex === null) {
      return 999
    }
    return Math.abs(hoveredIndex - idx)
  }

  const weight = (idx: number) => {
    if (hoveredIndex === null) {
      return opposite ? maxWeight : minWeight
    }
    const distance = distanceFromHovered(idx)

    const hoverMeansBold = maxWeight - distance * step
    const hoverMeansLight = minWeight + distance * step

    return opposite ? hoverMeansLight : hoverMeansBold
  }

  return (
    <DynamicHeading as={as} className={cn(theme.base, className)}>
      {children.split('').map((child, idx) => (
        <span
          style={{
            transition: `font-weight ${transitionDuration}s ease-in-out`,
            fontWeight: weight(idx),
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={idx}
        >
          {child}
        </span>
      ))}
    </DynamicHeading>
  )
}
