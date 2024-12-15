"use client";

import { Children, type FC, cloneElement, useMemo, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import type { IBoolean } from "../../types/types";
import { type AccordionComponentTheme, AccordionContent } from "./AccordionContent";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionTitle, type AccordionTitleTheme } from "./AccordionTitle";
import type { AccordionProps } from "./types";

export interface AccordionTheme {
  root: AccordionRootTheme;
  content: AccordionComponentTheme;
  title: AccordionTitleTheme;
}

export interface AccordionRootTheme {
  base: string;
  isBordered: IBoolean;
}

/**
 * @name Accordion
 *
 * @description The accordion component is used to display a list of items that can be expanded or collapsed.
 *
 * @returns <Accordion /> : React.ReactNode
 * 
 * @example ```
 *   <Accordion>
 *   <Accordion.Panel>
  *    <Accordion.Title>Title</Accordion.Title>
  *   <Accordion.Content>
  *        Content
  *   </Accordion.Content>
 *   </Accordion.Panel>
 * </Accordion>
 * ```

 */
const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  isBordered = true,
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
          isBordered,
          isOpen: isOpen === i,
          setOpen: () => {
            setIsOpen(isOpen === i ? -1 : i);
          },
        }),
      ),
    [alwaysOpen, arrowIcon, children, isBordered, isOpen],
  );

  const theme = mergeDeep(getTheme().accordion.root, customTheme);

  return (
    <div
      className={twMerge(theme.base, theme.isBordered[isBordered ? "on" : "off"], className)}
      data-testid="ui-accordion"
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
