'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import type { TimelineBodyTheme } from './TimelineBody';
import { TimelineContentContext } from './TimelineContentContext';
import { useTimelineContext } from './TimelineContext';
import { useTimelineItemContext } from './TimelineItemContext';
import type { TimelineTimeTheme } from './TimelineTime';
import type { TimelineTitleTheme } from './TimelineTitle';

export interface TimelineContentTheme {
  root: {
    base: string;
  };
  time: TimelineTitleTheme;
  title: TimelineTimeTheme;
  body: TimelineBodyTheme;
}

export interface TimelineContentProps extends ComponentProps<'div'> {
  theme?: DeepPartial<TimelineContentTheme>;
}

export const TimelineContent: FC<TimelineContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();

  const theme = mergeDeep(itemTheme.content, customTheme);

  return (
    <TimelineContentContext.Provider value={{ theme }}>
      <div data-testid="timeline-content" className={twMerge(horizontal && theme.root.base, className)} {...props}>
        {children}
      </div>
    </TimelineContentContext.Provider>
  );
};
