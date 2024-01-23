import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import * as React from 'react'
import './dropdown.css'
import { TbChevronRight } from 'react-icons/tb'
import { getTheme } from '~/src/theme-store'
import { mergeDeep } from '~/src/helpers/merge-deep'
import { ButtonTheme } from '../Button'
import { twMerge } from 'tailwind-merge'

const DropdownContext = React.createContext<{
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
})

export interface DropdownProps {
  label: string
  nested?: boolean
  children?: React.ReactNode
  theme?: ButtonTheme
}

export const DropdownComponent = React.forwardRef<
  HTMLButtonElement,
  DropdownProps & React.HTMLProps<HTMLButtonElement>
>(({ children, label, theme: customTheme, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasFocusInside, setHasFocusInside] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([])
  const labelsRef = React.useRef<Array<string | null>>([])
  const parent = React.useContext(DropdownContext)

  const tree = useFloatingTree()
  const nodeId = useFloatingNodeId()
  const parentId = useFloatingParentNodeId()
  const item = useListItem()

  const isNested = parentId != null

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  const [hoverEnabled, setHoverEnabled] = React.useState(false)

  const hover = useHover(context, {
    enabled: hoverEnabled,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  })
  const click = useClick(context, {
    event: 'mousedown',
    toggle: !isNested,
    ignoreMouse: isNested,
  })
  const role = useRole(context, { role: 'menu' })
  const dismiss = useDismiss(context, { bubbles: true })
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    hover,
    click,
    role,
    dismiss,
    listNavigation,
    typeahead,
  ])

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  React.useEffect(() => {
    if (!tree) return

    function handleTreeClick() {
      setIsOpen(false)
    }

    function onSubDropdownOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false)
      }
    }

    tree.events.on('click', handleTreeClick)
    tree.events.on('menuopen', onSubDropdownOpen)

    return () => {
      tree.events.off('click', handleTreeClick)
      tree.events.off('menuopen', onSubDropdownOpen)
    }
  }, [tree, nodeId, parentId])

  React.useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId })
    }
  }, [tree, isOpen, nodeId, parentId])

  const { button: buttonTheme } = getTheme()

  const theme = mergeDeep(buttonTheme, customTheme ?? {})

  return (
    <FloatingNode id={nodeId}>
      <button
        ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
        tabIndex={!isNested ? undefined : parent.activeIndex === item.index ? 0 : -1}
        role={isNested ? 'menuitem' : undefined}
        data-open={isOpen ? '' : undefined}
        data-nested={isNested ? '' : undefined}
        data-focus-inside={hasFocusInside ? '' : undefined}
        {...getReferenceProps(
          parent.getItemProps({
            ...props,
            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
              props.onFocus?.(event)
              setHasFocusInside(false)
              parent.setHasFocusInside(true)
            },
            onMouseEnter: () => setHoverEnabled(true),
          }),
        )}
        className={twMerge(
          isNested ? 'MenuItem' : 'RootMenu bg-red-300',
          theme.base,

          props.className,
        )}
      >
        {label}
        {isNested && (
          <span>
            <TbChevronRight />
          </span>
        )}
      </button>
      <DropdownContext.Provider
        value={{
          activeIndex,
          setActiveIndex,
          getItemProps,
          setHasFocusInside,
          isOpen,
        }}
      >
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={isNested ? -1 : 0}
                returnFocus={!isNested}
              >
                <div
                  ref={refs.setFloating}
                  className="Menu"
                  style={floatingStyles}
                  {...getFloatingProps({
                    onMouseEnter: () => setHoverEnabled(false),
                  })}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </DropdownContext.Provider>
    </FloatingNode>
  )
})

interface DropdownItemProps {
  label: string
  disabled?: boolean
}

export const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  DropdownItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, ...props }, forwardedRef) => {
  const menu = React.useContext(DropdownContext)
  const item = useListItem({ label: disabled ? null : label })
  const tree = useFloatingTree()
  const isActive = item.index === menu.activeIndex

  return (
    <button
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      type="button"
      role="menuitem"
      className="MenuItem"
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event)
          tree?.events.emit('click')
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event)
          menu.setHasFocusInside(true)
        },
      })}
    >
      {label}
    </button>
  )
})

/**
 * @name Dropdown
 * @description A dropdown menu component.
 * @see DropdownComponent for more details, Dropdown is just a wrapper around it, in case of useFloatingParentNodeId beign null it will be surrounded by a <FloatingTree> component from @floating-ui/react.

  * @param {string} label - The label of the dropdown button.
  * @param {boolean} nested - Whether the dropdown is nested or not.
  * @param {React.ReactNode} children - The children of the dropdown.
  * @param {React.HTMLProps<HTMLButtonElement>} props - The props of the dropdown button
  * @returns {React.ReactElement} A React component
  * @constructor
  * @memberof Components
  * @extends {React.FC<DropdownProps & React.HTMLProps<HTMLButtonElement>>}
  * @example 
  * <Dropdown label="Edit">
      <DropdownItem label="Undo" onClick={() => console.log('Undo')} />
      <Dropdown label="Copy as">
        <DropdownItem label="Text" />
      </Dropdown>
    </Dropdown>  * 
 */
export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps & React.HTMLProps<HTMLButtonElement>>(
  (props, ref) => {
    const parentId = useFloatingParentNodeId()

    if (parentId === null) {
      return (
        <FloatingTree>
          <DropdownComponent {...props} ref={ref} />
        </FloatingTree>
      )
    }

    return <DropdownComponent {...props} ref={ref} />
  },
)
