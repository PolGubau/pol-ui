'use client';
import React from 'react';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { HeadingLevel, IBoolean } from '../PoluiProvider';
import { useAccordionContext } from './AccordionPanelContext';
export interface AccordionTitleTheme {
  arrow: {
    base: string;
    open: IBoolean;
  };
  base: string;
  bordered: IBoolean;
  heading: string;
  open: IBoolean;
}

export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  as?: HeadingLevel;
  theme?: DeepPartial<AccordionTitleTheme>;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = 'h2',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, bordered, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== 'undefined' && setOpen();

  const theme = mergeDeep(getTheme().accordion.title, customTheme);

  return (
    <button
      className={twMerge(
        theme.base,
        theme.bordered[bordered ? 'on' : 'off'],
        theme.open[isOpen ? 'on' : 'off'],
        className,
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      <Heading className={theme.heading} data-testid="ui-accordion-heading">
        {children}
      </Heading>
      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={twMerge(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off'])}
          data-testid="ui-accordion-arrow"
        />
      )}
    </button>
  );
};
