import React from 'react'
import type { DropdownProps } from './Dropdown'
import { TbChevronRight } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '../../theme-store'
import { DropdownContext } from './DropdownContext'
import { mergeDeep } from '../../helpers/merge-deep'
import {
  autoUpdate,
  useFloatingTree,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from '../../types/enums'
import type { DropdownTheme } from './theme'
export const DropdownComponent = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      children,
      label,
      nestingIcon = <TbChevronRight />,
      icon: Icon,
      theme: customTheme = {},
      color: ColorProps = ColorsEnum.primary,
      size = MainSizesEnum.md,
      rounded = RoundedSizesEnum.md,
      disabled = false,
      trigger = null,

      ...props
    },
    forwardedRef,
  ) => {
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

    const { dropdown: dropdownTheme } = getTheme()
    const theme: DropdownTheme = mergeDeep(dropdownTheme, customTheme)

    const providerValue = React.useMemo(
      () => ({
        activeIndex,
        setActiveIndex,
        getItemProps,
        setHasFocusInside,
        isOpen,
        color: ColorProps,
      }),
      [activeIndex, getItemProps, isOpen, ColorProps],
    )
    const commonButtonData = {
      ...getReferenceProps(
        parent.getItemProps({
          ...props,
          onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event)
            setHasFocusInside(false)
            parent.setHasFocusInside(true)
          },
          onMouseEnter: () => setHoverEnabled(true),
        }),
      ),
    }

    const mergeRefs = useMergeRefs([refs.setReference, item.ref, forwardedRef])

    return (
      <FloatingNode id={nodeId}>
        <DropdownContext.Provider value={providerValue}>
          {isNested ? (
            // Each nested button, the submenus triggers
            <div className="relative">
              <button
                ref={mergeRefs}
                disabled={disabled}
                type="button"
                role={'menuitem'}
                data-open={isOpen ? '' : undefined}
                data-nested={''}
                data-focus-inside={hasFocusInside ? '' : undefined}
                {...commonButtonData}
                className={twMerge(theme.item.base, theme.item.color[providerValue.color], props.className)}
              >
                {label}
                <span>{nestingIcon}</span>
              </button>
            </div>
          ) : (
            // Not nested, just the Root main Button
            <button
              ref={mergeRefs}
              // tabIndex={tabIndexIfNested}
              data-open={isOpen ? '' : undefined}
              {...commonButtonData}
              disabled={disabled}
              type="button"
              className={twMerge(
                '',
                !trigger && theme.root.base,
                disabled && theme.root.disabled,
                !trigger && theme.root.color[providerValue.color],
                !trigger && theme.rounded[rounded],
                !trigger && theme.size[size],
                props.className,
              )}
            >
              {trigger ?? label}
              {!trigger && Icon && <Icon className={twMerge(theme.root.icon)} data-testid="ui-alert-icon" />}
            </button>
          )}
          {!disabled && (
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
                      data-testid="ui-dropdown"
                      role="menu"
                      ref={refs.setFloating}
                      className={twMerge(theme.floating.base)}
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
          )}
        </DropdownContext.Provider>
      </FloatingNode>
    )
  },
)

DropdownComponent.displayName = 'Dropdown'
