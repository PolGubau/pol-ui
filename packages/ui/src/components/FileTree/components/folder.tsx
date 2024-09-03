import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { TbFolder, TbFolderOpen } from "react-icons/tb"

import { cn } from "../../../helpers"
import { useTree } from "../hooks/use-tree"
import { TreeIndicator } from "./tree-indicator"

interface FolderComponentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

type FolderProps = {
  expandedItems?: string[]
  element: string
  isSelectable?: boolean
  isSelect?: boolean
  value: string
} & FolderComponentProps

const Folder = ({
  className,
  element,
  value,
  isSelectable = true,
  isSelect,
  children,
  ...props
}: FolderProps & React.HTMLAttributes<HTMLDivElement>) => {
  const {
    direction,
    handleExpand,
    expandedItems,
    indicator,
    setExpandedItems,
    openIcon,
    closeIcon,
  } = useTree()

  return (
    <AccordionPrimitive.Item
      {...props}
      value={value}
      className="relative overflow-hidden h-full "
    >
      <AccordionPrimitive.Trigger
        className={cn(`flex items-center gap-1 text-sm rounded-md`, className, {
          "bg-muted rounded-md": isSelect && isSelectable,
          "cursor-pointer": isSelectable,
          "cursor-not-allowed opacity-50": !isSelectable,
        })}
        disabled={!isSelectable}
        onClick={() => handleExpand(value)}
      >
        {expandedItems?.includes(value)
          ? openIcon ?? <TbFolderOpen className="size-4" />
          : closeIcon ?? <TbFolder className="size-4" />}
        <span>{element}</span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative overflow-hidden h-full">
        {element && indicator && <TreeIndicator aria-hidden="true" />}
        <AccordionPrimitive.Root
          dir={direction}
          type="multiple"
          className="flex flex-col gap-1 py-1 ml-5 rtl:mr-5 "
          defaultValue={expandedItems}
          value={expandedItems}
          onValueChange={(value) => {
            setExpandedItems?.((prev) => [...(prev ?? []), value[0]])
          }}
        >
          {children}
        </AccordionPrimitive.Root>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

export { Folder }
