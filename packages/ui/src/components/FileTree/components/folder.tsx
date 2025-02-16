import { Accordion as AccordionPrimitive } from "radix-ui";
import { TbFolder, TbFolderOpen } from "react-icons/tb";

import { cn } from "../../../helpers";
import { useTree } from "../hooks/use-tree";
import { TreeIndicator } from "./tree-indicator";

interface FolderComponentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

type FolderProps = {
  expandedItems?: string[];
  element: string;
  isSelectable?: boolean;
  isSelect?: boolean;
  value: string;
} & FolderComponentProps;

const Folder = ({
  className,
  element,
  value,
  isSelectable = true,
  isSelect,
  children,
  ...props
}: FolderProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { direction, handleExpand, expandedItems, indicator, setExpandedItems, openIcon, closeIcon } = useTree();

  return (
    <AccordionPrimitive.Item {...props} value={value} className="relative h-full overflow-hidden ">
      <AccordionPrimitive.Trigger
        className={cn("flex items-center gap-1 rounded-md text-sm", className, {
          "rounded-md bg-muted": isSelect && isSelectable,
          "cursor-pointer": isSelectable,
          "cursor-not-allowed opacity-50": !isSelectable,
        })}
        disabled={!isSelectable}
        onClick={() => handleExpand(value)}
      >
        {expandedItems?.includes(value)
          ? (openIcon ?? <TbFolderOpen className="size-4" />)
          : (closeIcon ?? <TbFolder className="size-4" />)}
        <span>{element}</span>
      </AccordionPrimitive.Trigger>
      <AccordionPrimitive.Content className="relative h-full overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {element && indicator && <TreeIndicator aria-hidden="true" />}
        <AccordionPrimitive.Root
          dir={direction}
          type="multiple"
          className="ml-5 flex flex-col gap-1 py-1 rtl:mr-5 "
          defaultValue={expandedItems}
          value={expandedItems}
          onValueChange={(value) => {
            setExpandedItems?.((prev) => [...(prev ?? []), value[0]].filter((v): v is string => v !== undefined));
          }}
        >
          {children}
        </AccordionPrimitive.Root>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

export { Folder };
