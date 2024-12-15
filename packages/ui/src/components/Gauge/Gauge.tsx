"use client";

import type React from "react";
import { useEffect, useId, useState } from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { type Colors, ColorsEnum, type DeepPartial } from "../../types";
import type { GaugeTheme } from "./theme";

// This is the range of the arc in degrees, from 0 to 360 (0 is at the top, 90 is at the right, 180 is at the bottom, 270 is at the left)

const backgroundArcStyles: React.CSSProperties = {
  strokeLinecap: "round",
  transformOrigin: "center center",
};
const foregroundArcMaskStyles: React.CSSProperties = {
  ...backgroundArcStyles,
  transition: "stroke-dashoffset 600ms ease 0s",
};
const calculatePercentageValue = (value: number, min: number, max: number) => {
  const range = max - min;
  return (value - min) / range;
};

const dashProps = (percentage: number) => {
  // Calculate the total length of the circumference
  const radius = 46;
  const totalLength = 2 * Math.PI * radius; // circumference of the circle with radius 46
  const length = percentage * totalLength;
  const gap = totalLength - length;
  return {
    strokeDasharray: `${length} ${gap}`,
    strokeDashoffset: 0,
  };
};

export interface GaugeProps extends React.SVGProps<SVGSVGElement> {
  max?: number;
  min?: number;
  value: number;
  show?: "percent" | "value";
  theme?: DeepPartial<GaugeTheme>;
  color?: Colors;
  strokeWidth?: number;
}

const Gauge: React.FC<GaugeProps> = ({
  min = 0,
  max = 100,
  value = 0,
  show = "percent",
  strokeWidth = 8,
  theme: customTheme = {},
  color = ColorsEnum.primary,
  ...rest
}) => {
  const [percent, setPercent] = useState(calculatePercentageValue(value, min, max));
  const id = useId();
  const theme = mergeDeep(getTheme().gauge, customTheme);
  useEffect(() => {
    if (value <= min) {
      setPercent(0);
      return;
    }
    if (value >= max) {
      setPercent(1);
      return;
    }
    setPercent(calculatePercentageValue(value, min, max));
  }, [max, min, value]);

  const parsedPercent = (percent * 100).toFixed(0) ?? min;

  const dShape = `M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92`;
  return (
    <div className="relative flex justify-center items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // adat the viewBox to the size of the gauge and its stroke width
          viewBox={`
          ${50 - 46 - strokeWidth / 2} ${50 - 46 - strokeWidth / 2}
          ${46 * 2 + strokeWidth} ${46 * 2 + strokeWidth}
          `}
          className={cn("w-24", rest.className)}
          {...rest}
        >
          <defs>
            <mask id={id}>
              <path
                // This is the color of the mask (alpha channel)
                className="stroke-white"
                style={{
                  ...foregroundArcMaskStyles,
                  ...dashProps(percent),
                }}
                d={dShape}
                strokeWidth={strokeWidth}
                fillOpacity="0"
              ></path>
            </mask>
          </defs>
          <path
            style={backgroundArcStyles}
            d={dShape}
            strokeWidth={strokeWidth}
            fillOpacity="0"
            className="stroke-secondary-100"
          ></path>
          <path
            className={cn(theme.color[color])}
            style={{
              ...foregroundArcMaskStyles,
              ...dashProps(percent),
            }}
            d={dShape}
            strokeWidth={strokeWidth}
            fillOpacity="0"
            mask={`url(#${id})`}
          ></path>
        </svg>
      </div>
      <div className="absolute w-full top-0 flex items-center justify-center h-full">
        <div className="text-2xl tabular-nums">{show === "value" ? value : parsedPercent}</div>
      </div>
    </div>
  );
};

export default Gauge;
