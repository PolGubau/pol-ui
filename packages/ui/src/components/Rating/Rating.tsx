"use client"

import { type ComponentProps, type FC } from "react"
import { TbStar } from "react-icons/tb"

import { cn } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import { MainSizesEnum } from "../../types/enums"
import type { DeepPartial, MainSizes } from "../../types/types"
import type { RatingTheme } from "./theme"

export interface RatingProps extends ComponentProps<"div"> {
  size?: MainSizes
  theme?: DeepPartial<RatingTheme>
  stars?: number
  filled?: number
  starIcon?: FC<ComponentProps<"svg">>
  starClassName?: string
}

export const Rating: FC<RatingProps> = ({
  className,
  stars = 5,
  filled = 4,
  size = MainSizesEnum.md,
  starClassName,
  starIcon: Icon = TbStar,
  theme: customTheme = {},
  ...props
}) => {
  const { rating } = getTheme()
  const theme: RatingTheme = mergeDeep(rating, customTheme)

  return (
    <div className={cn(theme.root, className)} {...props}>
      {Array.from({ length: stars }, (_, i) => (
        <Icon
          key={i}
          data-filled={i < filled}
          data-testid="ui-rating-star"
          className={cn(
            starClassName,
            theme.star.size[size as keyof typeof theme.star.size],
            theme.star[i < filled ? "filled" : "empty"]
          )}
        />
      ))}
    </div>
  )
}

Rating.displayName = "Rating"
