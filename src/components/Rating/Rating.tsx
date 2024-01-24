'use client'

import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { RatingAdvanced } from './RatingAdvanced'
import { RatingContext } from './RatingContext'
import { RatingStar } from './RatingStar'
import { RatingTheme } from './theme'
import { MainSizesElastic } from '../PoluiProvider/PoluiTheme'

export interface RatingProps extends ComponentProps<'div'> {
  size?: keyof MainSizesElastic
  theme?: DeepPartial<RatingTheme>
}

const RatingComponent: FC<RatingProps> = ({ children, className, size = 'sm', theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().rating, customTheme)

  return (
    <RatingContext.Provider value={{ theme, size }}>
      <div className={twMerge(theme.root.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  )
}

RatingComponent.displayName = 'Rating'
RatingStar.displayName = 'Rating.Star'
RatingAdvanced.displayName = 'Rating.Advanced'

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced,
})
