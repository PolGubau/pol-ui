'use client';

import type { ComponentProps, FC, ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { AccordionComponentTheme } from './AccordionContent';
import { AccordionContent } from './AccordionContent';
import type { PanelProps } from './AccordionPanel';
import { AccordionPanel } from './AccordionPanel';
import type { AccordionTitleTheme } from './AccordionTitle';
import { AccordionTitle } from './AccordionTitle';
import type { IBoolean } from '../PoluiProvider';

export interface AccordionTheme {
  root: AccordionRootTheme;
  content: AccordionComponentTheme;
  title: AccordionTitleTheme;
}

export interface AccordionRootTheme {
  base: string;
  bordered: IBoolean;
}

export interface AccordionProps extends ComponentProps<'div'> {
  /*
  Always keep one panel open at a time
  */
  alwaysOpen?: boolean;

  /*
  Custom arrow icon, by default it's HiChevronDown
  */

  arrowIcon?: FC<ComponentProps<'svg'>>;

  /*
  The content of the accordion
  */

  children: ReactElement<PanelProps> | ReactElement<PanelProps>[];

  /* 
  Remove the default border
  */

  bordered?: boolean;
  collapseAll?: boolean;
  theme?: DeepPartial<AccordionTheme>;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  bordered = true,
  collapseAll = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<number>(collapseAll ? -1 : 0);

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          bordered,
          isOpen: isOpen === i,
          setOpen: () => setIsOpen(isOpen === i ? -1 : i),
        }),
      ),
    [alwaysOpen, arrowIcon, children, bordered, isOpen],
  );

  const theme = mergeDeep(getTheme().accordion.root, customTheme);

  return (
    <div
      className={twMerge(theme.base, theme.bordered[bordered ? 'on' : 'off'], className)}
      data-testid="ui-accordion"
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = 'Accordion';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
