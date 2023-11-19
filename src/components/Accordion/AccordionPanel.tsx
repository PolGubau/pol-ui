'use client';

import type { FC } from 'react';
import { useState } from 'react';
import type { AccordionProps } from './Accordion';
import { AccordionPanelContext } from './AccordionPanelContext';

export interface PanelProps extends AccordionProps {
  isOpen?: boolean;
  setOpen?: () => void;
}

export const AccordionPanel: FC<PanelProps> = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const provider = alwaysOpen
    ? {
        ...props,
        isOpen,
        setOpen: () => setIsOpen(!isOpen),
      }
    : props;

  return <AccordionPanelContext.Provider value={provider}>{children}</AccordionPanelContext.Provider>;
};
