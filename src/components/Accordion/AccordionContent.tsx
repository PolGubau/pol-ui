'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { useAccordionContext } from './AccordionPanelContext';

export interface AccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends ComponentProps<'div'> {
  theme?: DeepPartial<AccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const theme = mergeDeep(getTheme().accordion.content, customTheme);

  return (
    <div className={twMerge(theme.base, className)} data-testid="pol-ui-accordion-content" hidden={!isOpen} {...props}>
      {children}
    </div>
  );
};
