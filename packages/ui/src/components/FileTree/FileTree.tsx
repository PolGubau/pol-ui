"use client"

import { useCallback, useEffect, useState } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "../../helpers"
import { TreeContext } from "./hooks/use-tree"

type TreeViewElement = {
  id: string
  name: string
  isSelectable?: boolean
  children?: TreeViewElement[]
}

interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

type Direction = "rtl" | "ltr" | undefined

type TreeViewProps = {
  initialSelectedId?: string
  indicator?: boolean
  elements?: TreeViewElement[]
  initialExpandedItems?: string[]
  openIcon?: React.ReactNode
  closeIcon?: React.ReactNode
} & TreeViewComponentProps

const Tree = ({
  className,
  elements,
  initialSelectedId,
  initialExpandedItems,
  children,
  indicator = true,
  openIcon,
  closeIcon,
  dir,
  ...props
}: TreeViewProps) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    initialSelectedId
  )
  const [expandedItems, setExpandedItems] = useState<string[] | undefined>(
    initialExpandedItems
  )

  const selectItem = useCallback((id: string) => {
    setSelectedId(id)
  }, [])

  const handleExpand = useCallback((id: string) => {
    setExpandedItems((prev) => {
      if (prev?.includes(id)) {
        return prev.filter((item) => item !== id)
      }
      return [...(prev ?? []), id]
    })
  }, [])

  const expandSpecificTargetedElements = useCallback(
    (elements?: TreeViewElement[], selectId?: string) => {
      if (!elements || !selectId) return
      const findParent = (
        currentElement: TreeViewElement,
        currentPath: string[] = []
      ) => {
        const isSelectable = currentElement.isSelectable ?? true
        const newPath = [...currentPath, currentElement.id]
        if (currentElement.id === selectId) {
          if (isSelectable) {
            setExpandedItems((prev) => [...(prev ?? []), ...newPath])
          } else {
            if (newPath.includes(currentElement.id)) {
              newPath.pop()
              setExpandedItems((prev) => [...(prev ?? []), ...newPath])
            }
          }
          return
        }
        if (
          isSelectable &&
          currentElement.children &&
          currentElement.children.length > 0
        ) {
          currentElement.children.forEach((child) => {
            findParent(child, newPath)
          })
        }
      }
      elements.forEach((element) => {
        findParent(element)
      })
    },
    []
  )

  useEffect(() => {
    if (initialSelectedId) {
      expandSpecificTargetedElements(elements, initialSelectedId)
    }
  }, [initialSelectedId, elements])

  const direction = dir === "rtl" ? "rtl" : "ltr"

  return (
    <TreeContext.Provider
      value={{
        selectedId,
        expandedItems,
        handleExpand,
        selectItem,
        setExpandedItems,
        indicator,
        openIcon,
        closeIcon,
        direction,
      }}
    >
      <div className={cn("size-full", className)}>
        {/* <ScrollArea
            ref={ref}
            className="h-full relative px-2"
            dir={dir as Direction}
          > */}
        <AccordionPrimitive.Root
          {...props}
          type="multiple"
          defaultValue={expandedItems}
          value={expandedItems}
          className="flex flex-col gap-1"
          onValueChange={(value) =>
            setExpandedItems((prev) => [...(prev ?? []), value[0]])
          }
          dir={dir as Direction}
        >
          {children}
        </AccordionPrimitive.Root>
        {/* </ScrollArea> */}
      </div>
    </TreeContext.Provider>
  )
}

Tree.displayName = "Tree"

export { Tree, type TreeViewElement }
