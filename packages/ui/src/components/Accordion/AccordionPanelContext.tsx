"use client"

import { createContext, useContext } from "react"

import type { PanelProps } from "./AccordionPanel"

type AccordionPanelContext = Omit<PanelProps, "children">

export const AccordionPanelContext = createContext<
  AccordionPanelContext | undefined
>(undefined)

/**
 * @name useAccordionContext
 * @description useAccordionContext is a hook that returns the context of the AccordionPanel.
 * @example const { isOpen, setOpen } = useAccordionContext()
 * @returns {AccordionPanelContext}
 * @throws {Error} If useAccordionContext is not used within the AccordionPanelContext provider.
 * @see https://polgubau.com/components/accordion
 *
 */
export function useAccordionContext(): AccordionPanelContext {
  const context = useContext(AccordionPanelContext)

  if (!context) {
    throw new Error(
      "useAccordionContext should be used within the AccordionPanelContext provider!"
    )
  }

  return context
}
