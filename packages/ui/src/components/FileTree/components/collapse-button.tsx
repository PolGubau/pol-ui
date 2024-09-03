import { useCallback, useEffect } from "react"

import { Button, ButtonProps } from "../../Button"
import { TreeViewElement } from "../FileTree"
import { useTree } from "../hooks/use-tree"

type CollapseButtonProps = {
  elements: TreeViewElement[]
  expandAll?: boolean
} & ButtonProps

const CollapseButton = ({
  className,
  elements,
  expandAll = false,
  children,
  ...props
}: CollapseButtonProps) => {
  const { expandedItems, setExpandedItems } = useTree()

  const expendAllTree = useCallback((elements: TreeViewElement[]) => {
    const expandTree = (element: TreeViewElement) => {
      const isSelectable = element.isSelectable ?? true
      if (isSelectable && element.children && element.children.length > 0) {
        setExpandedItems?.((prev) => [...(prev ?? []), element.id])
        element.children.forEach(expandTree)
      }
    }

    elements.forEach(expandTree)
  }, [])

  const closeAll = useCallback(() => {
    setExpandedItems?.([])
  }, [])

  useEffect(() => {
    console.log(expandAll)
    if (expandAll) {
      expendAllTree(elements)
    }
  }, [expandAll])

  return (
    <Button
      variant={"ghost"}
      className="h-8 w-fit p-1 absolute bottom-1 right-2"
      onClick={
        expandedItems && expandedItems.length > 0
          ? closeAll
          : () => expendAllTree(elements)
      }
      {...props}
    >
      {children}
      <span className="sr-only">Toggle</span>
    </Button>
  )
}
export { CollapseButton }
