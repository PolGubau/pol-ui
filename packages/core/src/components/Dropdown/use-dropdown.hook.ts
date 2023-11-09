import { DropdownProps } from '@components/Dropdown/Dropdown.types';
import {
  arrow,
  autoUpdate,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { flip, inline } from '@floating-ui/react-dom';
import { useMemo, useRef, useState } from 'react';

export function useDropdown({
  placement = 'bottom',
  initiallyOpen = false,
  outsidePress = true,
  trigger = 'click',
}: Partial<DropdownProps>): any {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(initiallyOpen);
  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offset(8),
      shift(),
      inline(),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context, {
      enabled: trigger === 'click',
      toggle: true,
    }),
    useHover(context, {
      enabled: trigger === 'hover',
      move: true,
      handleClose: safePolygon(),
    }),
    useFocus(context),
    useDismiss(context, {
      referencePress: false,
      outsidePress,
    }),
    useRole(context, { role: 'dialog' }),
  ]);

  return useMemo(
    () => ({
      arrowRef,
      context,
      floating: refs.setFloating,
      getFloatingProps: getFloatingProps(),
      getReferenceProps: getReferenceProps(),
      open,
      setOpen,
      reference: refs.setReference,
      strategy,
      x,
      y,
    }),
    [context, refs, getFloatingProps, getReferenceProps, open, setOpen, strategy, x, y]
  );
}
