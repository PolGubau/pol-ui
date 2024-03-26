import * as React from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
} from '@floating-ui/react'
import type { Placement } from '@floating-ui/react'
import type { DeepPartial } from '../../types'
import type { TooltipTheme } from './theme'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { UseFloatingProps } from '../Floating/use-floating'

interface TooltipOptions {
  initialOpen?: boolean
  placement?: Placement
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function useTooltip({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const arrowRef = React.useRef<HTMLDivElement>(null)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  })
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
    }),
    [open, setOpen, interactions, data],
  )
}

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = React.createContext<ContextType>(null)

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}

export interface TooltipProps extends React.PropsWithChildren, TooltipOptions {
  content: React.ReactNode
  theme?: DeepPartial<TooltipTheme>
  className?: string
  contentClassName?: string
}

export function Tooltip({
  children,
  content,
  theme: customTheme = {},
  className,
  contentClassName,
  ...options
}: TooltipProps) {
  const theme = mergeDeep(getTheme().tooltip, customTheme)
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options)
  return (
    <TooltipContext.Provider value={tooltip}>
      <TooltipTrigger className={className} tabIndex={-1}>
        {children}
      </TooltipTrigger>
      <TooltipContent theme={theme} className={cn(theme.base, !open && theme.hidden, contentClassName)}>
        {content}
      </TooltipContent>
    </TooltipContext.Provider>
  )
}

const TooltipTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & { asChild?: boolean }>(
  function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        }),
      )
    }

    return (
      <button
        ref={ref}
        // The user can style the trigger based on the state
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    )
  },
)

interface TooltipContentProps extends React.HTMLProps<HTMLDivElement> {
  arrow?: boolean
  theme: TooltipTheme
}
const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(function TooltipContent(
  { style, arrow = true, theme, ...props },
  propRef,
) {
  const context = useTooltipContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!context.open) return null
  const getArrowPlacement = ({ placement = 'auto' }: { placement: UseFloatingProps['placement'] }): Placement => {
    return {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]] as Placement
  }
  return (
    <FloatingPortal>
      <div
        ref={ref}
        style={{
          ...context.floatingStyles,
          ...style,
        }}
        {...context.getFloatingProps(props)}
      />
      {arrow && (
        <div
          className={cn(theme.arrow.base)}
          data-testid="ui-arrow"
          ref={context.arrowRef}
          style={{
            top: context.middlewareData.arrow?.y ?? 0,
            left: context.middlewareData.arrow?.x ?? 0,
            right: ' ',
            bottom: ' ',
            [getArrowPlacement({ placement: context.placement })]: theme.arrow.placement,
          }}
        >
          &nbsp;
        </div>
      )}
    </FloatingPortal>
  )
})
