'use client'

import { type ComponentProps, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { RatingAdvanced } from './RatingAdvanced'
import { RatingTheme } from './theme'
import { MainSizes, MainSizesElastic } from '../PoluiProvider/PoluiTheme'
import { MainSizesEnum } from '../PoluiProvider/enums'
import { TbStar } from 'react-icons/tb'

export interface RatingProps extends ComponentProps<'div'> {
  size?: keyof MainSizesElastic
  theme?: DeepPartial<RatingTheme>
  stars?: number
  filled?: number
  starIcon?: FC<ComponentProps<'svg'>>
}

const RatingComponent: FC<RatingProps> = ({
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

RatingComponent.displayName = 'Rating'
RatingAdvanced.displayName = 'Rating.Advanced'

export const Rating = Object.assign(RatingComponent, {
  Advanced: RatingAdvanced,
})
