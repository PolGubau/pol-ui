'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTimelineContentContext } from './TimelineContentContext';
import React from 'react';
export interface TimelineTimeTheme {
  base: string;
}

export interface TimelineTimeProps extends ComponentProps<'time'> {
  theme?: DeepPartial<TimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();

  const theme = mergeDeep(contentTheme.time, customTheme);

  return (
    <time className={twMerge(theme.base, className)} {...props}>
      {children}
    </time>
  );
};
