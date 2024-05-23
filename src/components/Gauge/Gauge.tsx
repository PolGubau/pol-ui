/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'

// This is the range of the arc in degrees, from 0 to 360 (0 is at the top, 90 is at the right, 180 is at the bottom, 270 is at the left)
const arcLimits = {
  start: 283,
  end: 0,
}

export const foregroundStyles: React.CSSProperties = {
  animationDelay: 'var(--gradientPositionDelay, 0s)',
} as React.CSSProperties

const arcDefaultStyles: React.CSSProperties = {
  strokeLinecap: 'round',
  transformOrigin: 'center center',
  strokeDasharray: `${arcLimits.start + 1}px, ${arcLimits.start + 1}px`,
}

const foregroundArcMaskStyles: React.CSSProperties = {
  ...arcDefaultStyles,
  transition: 'stroke-dashoffset 600ms ease 0s',
}

const backgroundArcStyles: React.CSSProperties = {
  ...arcDefaultStyles,
}

const calculatePercentageValue = (value: number, min: number, max: number) => {
  const range = max - min
  return (value - min) / range
}

const calculateStrokeDashOffset = (percentage: number) => {
  const strokeDashOffsetRange = arcLimits.start - arcLimits.end
  const strokeDashOffset = arcLimits.start - percentage * strokeDashOffsetRange
  return percentage > 0 ? strokeDashOffset : arcLimits.start
}

//
export interface GaugeProps {
  max?: number
  min?: number
  value: number
}

const Gauge: React.FC<GaugeProps> = ({ min = 0, max = 100, value }) => {
  const [percent, setPercent] = useState<number>(calculatePercentageValue(value, min, max))

  useEffect(() => {
    if (value <= min) {
      setPercent(0)
      return
    }
    if (value >= max) {
      setPercent(1)
      return
    }
    setPercent(calculatePercentageValue(value, min, max))
  }, [max, min, value])

  return (
    <div className="relative" style={{ width: 96 }}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100" width="100">
          <defs>
            <mask id={`foreground-mask`}>
              <path
                // This is the color of the mask (alpha channel)
                className="stroke-white"
                style={{
                  ...foregroundArcMaskStyles,
                  strokeDashoffset: calculateStrokeDashOffset(percent),
                }}
                d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                strokeWidth="8"
                fillOpacity="0"
              ></path>
            </mask>
          </defs>
          <path
            style={backgroundArcStyles}
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            strokeWidth="8"
            fillOpacity="0"
            className="stroke-secondary-100 "
          ></path>
          <foreignObject width="100" height="100" mask={`url(#foreground-mask)`} className="bg-red-400">
            <div
              style={
                {
                  '--gradientPositionDelay': `${percent * 0.5}s`,
                  ...foregroundStyles,
                } as React.CSSProperties
              }
            />
          </foreignObject>
        </svg>
      </div>
      <div className="absolute w-full top-0 flex items-center justify-center h-full">
        <div className="text-2xl tabular-nums">{(percent * 100).toFixed(0)}</div>
      </div>
    </div>
  )
}

export default Gauge
