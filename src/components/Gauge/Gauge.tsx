/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useId, useState } from 'react'

// This is the range of the arc in degrees, from 0 to 360 (0 is at the top, 90 is at the right, 180 is at the bottom, 270 is at the left)

const backgroundArcStyles: React.CSSProperties = {
  strokeLinecap: 'round',
  transformOrigin: 'center center',
}
const foregroundArcMaskStyles: React.CSSProperties = {
  ...backgroundArcStyles,
  transition: 'stroke-dashoffset 600ms ease 0s',
}
const calculatePercentageValue = (value: number, min: number, max: number) => {
  const range = max - min
  return (value - min) / range
}

const dashProps = (percentage: number) => {
  // Calculate the total length of the circumference
  const radius = 46
  const totalLength = 2 * Math.PI * radius // circumference of the circle with radius 46
  const length = percentage * totalLength
  const gap = totalLength - length
  return {
    strokeDasharray: `${length} ${gap}`,
    strokeDashoffset: 0,
  }
}

export interface GaugeProps {
  max?: number
  min?: number
  value: number
  show?: 'percent' | 'value'
}

const Gauge: React.FC<GaugeProps> = ({ min = 0, max = 100, value = 0, show = 'percent' }) => {
  const [percent, setPercent] = useState(calculatePercentageValue(value, min, max))
  const id = useId()
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

  const parsedPercent = (percent * 100).toFixed(0) ?? min

  return (
    <div className="relative">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100" width="100">
          <defs>
            <mask id={id}>
              <path
                // This is the color of the mask (alpha channel)
                className="stroke-white"
                style={{
                  ...foregroundArcMaskStyles,
                  ...dashProps(percent),
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
          <path
            className="stroke-primary-500"
            style={{
              ...foregroundArcMaskStyles,
              ...dashProps(percent),
            }}
            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
            strokeWidth="8"
            fillOpacity="0"
            mask={`url(#${id})`}
          ></path>
        </svg>
      </div>
      <div className="absolute w-full top-0 flex items-center justify-center h-full">
        <div className="text-2xl tabular-nums">{show === 'value' ? value : parsedPercent}</div>
      </div>
    </div>
  )
}

export default Gauge
