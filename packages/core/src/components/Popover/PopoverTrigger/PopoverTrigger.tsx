import { usePopoverContext } from '@components/Popover/Popover.context';
import {
  PopoverTriggerComponent,
  PopoverTriggerProps,
} from '@components/Popover/PopoverTrigger/PopoverTrigger.types';
import { Children, cloneElement, ForwardedRef, forwardRef, ReactElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';

const PopoverTrigger: PopoverTriggerComponent = forwardRef<HTMLDivElement, PopoverTriggerProps>(
  (props: PopoverTriggerProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const { children } = props;
    const { controlsId, labelledbyId, reference, getReferenceProps, open } = usePopoverContext();
    const child = Children.only(children) as ReactElement;
    const childRef = useMergeRefs([reference, ref || null]);

    const triggerElement = cloneElement(child, {
      ref: childRef,
      id: labelledbyId,
      'aria-haspopup': 'dialog',
      'aria-controls': controlsId,
      'aria-expanded': open,
      ...child.props,
      ...getReferenceProps,
    });

    return <>{triggerElement}</>;
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };
