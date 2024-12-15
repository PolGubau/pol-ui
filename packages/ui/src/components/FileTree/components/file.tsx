import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { TbFile } from "react-icons/tb";

import { cn } from "../../../helpers";
import { useTree } from "../hooks";

const File = forwardRef<
  HTMLButtonElement,
  {
    value: string;
    handleSelect?: (id: string) => void;
    isSelectable?: boolean;
    isSelect?: boolean;
    fileIcon?: React.ReactNode;
  } & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ value, className, handleSelect, isSelectable = true, isSelect, fileIcon, children, ...props }, ref) => {
  const { direction, selectedId, selectItem } = useTree();
  const isSelected = isSelect ?? selectedId === value;
  return (
    <AccordionPrimitive.Item value={value} className="relative">
      <AccordionPrimitive.Trigger
        ref={ref}
        {...props}
        dir={direction}
        disabled={!isSelectable}
        aria-label="File"
        className={cn(
          "flex items-center gap-1 cursor-pointer text-sm pr-1 rtl:pl-1 rtl:pr-0 rounded-md  duration-200 ease-in-out",
          {
            "bg-muted": isSelected && isSelectable,
          },
          isSelectable ? "cursor-pointer" : "opacity-50 cursor-not-allowed",
          className,
        )}
        onClick={() => selectItem(value)}
      >
        {fileIcon ?? <TbFile className="size-4" />}
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Item>
  );
});
export { File };
