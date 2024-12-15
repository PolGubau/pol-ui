"use client";

import { type FC, useMemo, useState } from "react";

import { AccordionPanelContext } from "./AccordionPanelContext";
import type { AccordionProps } from "./types";

/**
 * @name PanelProps
 * @description The props of the Accordion.Panel component
 * @type AccordionProps
 * @example
 * <Accordion>
 * ...
 * </Accordion>
 *
 * @example
 * <Accordion alwaysOpen>
 * ...
 * </Accordion>
 *
 * @example
 * <Accordion alwaysOpen>
 * <Accordion.Panel isOpen>
 * ...
 * </Accordion.Panel>
 * </Accordion>
 * @name Pol Gubau Amores - https://polgubau.com
 */
export interface PanelProps extends AccordionProps {
  /**
   * @name isOpen
   * @description If true, the accordion will be open by default. If false, it will be closed by default. If undefined, it will be closed by default.
   */
  isOpen?: boolean;

  /**
   * @name alwaysOpen
   * @description If true, the accordion will be always open. If false, the accordion will be closed by default. If undefined, the accordion will be closed by default.
   */
  setOpen?: () => void;
}

export const AccordionPanel: FC<PanelProps> = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);

  /**
   * @name provider
   * @description The provider is the object that will be passed to the context.
   * It will be the props if the accordion is not always open, or the props plus the isOpen and setOpen if the accordion is always open.
   * @author @PolGubau - http://polgubau.com
   */
  const provider = useMemo(() => {
    if (alwaysOpen) {
      return {
        ...props,
        isOpen,
        setOpen: () => {
          setIsOpen(!isOpen);
        },
      };
    }
    return props;
  }, [alwaysOpen, isOpen, props]);

  return <AccordionPanelContext.Provider value={provider}>{children}</AccordionPanelContext.Provider>;
};
