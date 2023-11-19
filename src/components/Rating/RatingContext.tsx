'use client';

import { createContext, useContext } from 'react';
import type { RatingTheme } from './Rating';
import type { StarSizes } from './RatingStar';

export type RatingContext = {
  theme: RatingTheme;
  size?: keyof StarSizes;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!');
  }

  return context;
}
