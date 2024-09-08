import { ComponentProps, FC, ReactElement } from "react"

import { DeepPartial } from "../../types"
import { AccordionTheme } from "./Accordion"
import { PanelProps } from "./AccordionPanel"

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
