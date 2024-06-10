"use client"

import { forwardRef, useId, type ComponentProps } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { TbCheck } from "react-icons/tb"
import { twMerge } from "tailwind-merge"

import { cn } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import { ColorsEnum } from "../../types"
import type { Colors, DeepPartial } from "../../types/types"
import { Label } from "../Label"
import type { RadioTheme } from "./theme"

export interface RadioProps
  extends Omit<ComponentProps<"input">, "type" | "ref" | "color"> {
  theme?: DeepPartial<RadioTheme>
  color?: Colors
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
  theme?: DeepPartial<RadioTheme>
  color?: RadioProps["color"]
}) => {
  const theme = mergeDeep(getTheme().checkbox, customTheme)

  return (
    <AnimatePresence initial={initial} mode="wait">
      {isVisible && (
        <div
          className={twMerge("hidden peer-checked:flex", theme.floating.base)}
        >
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(
              theme.floating.svg,
              theme.check.color[color],
              "stroke-current"
            )}
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
                type: "tween",
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          </svg>
        </div>
      )}
    </AnimatePresence>
  )
}
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      color = ColorsEnum.primary,
      theme: customTheme = {},
      ...props
    },
    ref
  ) => {
    const theme: RadioTheme = mergeDeep(getTheme().radio, customTheme)

    const id = useId()

    // id : props.id, if label: label+id, if not lavel: id
    const getLabel = () => {
      if (props.id) return props.id
      if (label) return label + id
      return id
    }

    const parsedId = getLabel()

    return (
      <li className="inline-flex items-center gap-2 relative">
        <input
          id={parsedId}
          {...props}
          className={cn(
            theme.base,
            theme.before,
            theme.color[color],
            className
          )}
          ref={ref}
          type="radio"
        />

        {typeof props.checked === "undefined" ? (
          <span className={twMerge(theme.check.base, theme.check.color[color])}>
            <TbCheck />
          </span>
        ) : (
          <AnimatedCheckIcon isVisible={props.checked ?? false} color={color} />
        )}
        {label && <Label htmlFor={props.id ?? label + id}>{label}</Label>}
      </li>
    )
  }
)

Radio.displayName = "Radio"
