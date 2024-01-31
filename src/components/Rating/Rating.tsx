'use client'

import { type ComponentProps, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial, MainSizes } from '../../types/types'
import type { RatingTheme } from './theme'
import { MainSizesEnum } from '../../types/enums'
import { TbStar } from 'react-icons/tb'

export interface RatingProps extends ComponentProps<'div'> {
  size?: MainSizes
  theme?: DeepPartial<RatingTheme>
  stars?: number
  filled?: number
  starIcon?: FC<ComponentProps<'svg'>>
}

export const Rating: FC<RatingProps> = ({
  className,
  stars = 5,
  filled = 4,
  size = MainSizesEnum.md,
  starIcon: Icon = TbStar,
  theme: customTheme = {},
  ...props
}) => {
  const { rating } = getTheme()
  const theme: RatingTheme = mergeDeep(rating, customTheme)

  return (
    <div className={twMerge(theme.root.base, className)} {...props}>
      {Array.from({ length: stars }, (_, i) => (
        <Icon
          key={i}
          data-testid="ui-rating-star"
          className={twMerge(
            theme.star.size[size as keyof typeof theme.star.size],
            theme.star[i < filled ? 'filled' : 'empty'],
            className,
          )}
        />
      ))}
    </div>
  )
}

Rating.displayName = 'Rating'
