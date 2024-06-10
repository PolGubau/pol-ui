"use client"

import {
  Children,
  cloneElement,
  useMemo,
  useState,
  type ComponentProps,
  type FC,
  type ReactElement,
} from "react"
import { HiChevronDown } from "react-icons/hi"
import { twMerge } from "tailwind-merge"

import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import type { DeepPartial, IBoolean } from "../../types/types"
import {
  AccordionContent,
  type AccordionComponentTheme,
} from "./AccordionContent"
import { AccordionPanel, type PanelProps } from "./AccordionPanel"
import { AccordionTitle, type AccordionTitleTheme } from "./AccordionTitle"

export interface AccordionTheme {
  root: AccordionRootTheme
  content: AccordionComponentTheme
  title: AccordionTitleTheme
}

export interface AccordionRootTheme {
  base: string
  isBordered: IBoolean
}

/**
 * @name AccordionProps
 * @description The props of the Accordion component
 */
export interface AccordionProps extends ComponentProps<"div"> {
  /**
   * @name alwaysOpen
   * @description Always keep one panel open at a time
   * @default false
   * @type boolean
   * @example
   * <Accordion alwaysOpen>
   *   ...
   * </Accordion>
   */
  alwaysOpen?: boolean

  /**
   * @name arrowIcon
   * @description The icon that will be used for the arrow
   * @default HiChevronDown (from react-icons/hi)
   * @type React.FC
   * @link https://react-icons.github.io/react-icons/search/#q=HiChevronDown
   * @example
   * <Accordion arrowIcon={HiOutlineArrowCircleDown}>
   *  ...
   * </Accordion>
   *
   */
  arrowIcon?: FC<ComponentProps<"svg">>

  /**
   * @name children
   * @description The content of the accordion
   * @type ReactElement<PanelProps> | ReactElement<PanelProps>[]
   * @example
   * <Accordion>
   * <Accordion.Panel>
   *  <Accordion.Title>...</Accordion.Title>
   * <Accordion.Content>...</Accordion.Content>
   * </Accordion.Panel>
   * </Accordion>
   */

  children: ReactElement<PanelProps> | ReactElement<PanelProps>[]

  /**
   * @name isBordered
   * @description If true, the accordion will have a border
   * @default true
   * @type boolean
   *
   *  @example
   * <Accordion isBordered>
   * ...
   * </Accordion>
   */
  isBordered?: boolean

  /**
   * @name collapseAll
   * @description If true, all the panels will be closed by default. If false, the first panel will be open by default. If undefined, the first panel will be open by default.
   * @default false
   * @type boolean
   * @example
   * <Accordion collapseAll>
   * ...
   * </Accordion>
   */
  collapseAll?: boolean

  /**
   * @name theme
   * @description The theme of the accordion
   * @type DeepPartial<AccordionTheme>
   * @example
   * <Accordion theme={{root: {base: 'bg-red-200'}}}>
   * ...
   * </Accordion>
   */
  theme?: DeepPartial<AccordionTheme>
}

/**
 * @name Accordion
 * @description The accordion component is used to display a list of items that can be expanded or collapsed.
 * @returns <Accordion /> : JSX.Element
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
  const [isOpen, setIsOpen] = useState<number>(collapseAll ? -1 : 0)

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          isBordered,
          isOpen: isOpen === i,
          setOpen: () => {
            setIsOpen(isOpen === i ? -1 : i)
          },
        })
      ),
    [alwaysOpen, arrowIcon, children, isBordered, isOpen]
  )

  const theme = mergeDeep(getTheme().accordion.root, customTheme)

  return (
    <div
      className={twMerge(
        theme.base,
        theme.isBordered[isBordered ? "on" : "off"],
        className
      )}
      data-testid="ui-accordion"
      {...props}
    >
      {panels}
    </div>
  )
}

AccordionComponent.displayName = "Accordion"
AccordionPanel.displayName = "Accordion.Panel"
AccordionTitle.displayName = "Accordion.Title"
AccordionContent.displayName = "Accordion.Content"

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
})
