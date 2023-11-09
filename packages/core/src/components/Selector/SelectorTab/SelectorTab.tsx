import { SelectorTabComponent, SelectorTabProps } from '@components/Selector';
import { useSelectorContext } from '@components/Selector/Selector.context';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SelectorTab: SelectorTabComponent = forwardRef(
  (props: SelectorTabProps, ref?: ForwardedRef<HTMLButtonElement>) => {
    const theme = useComponentTheme('Selector');
    const {
      activeTabAnchor,
      anchor,
      children,
      className = '',
      color,
      disabled = false,
      label,
      orientation,
      radius,
      separator,
      setActiveTabAnchor,
      shadow,
      size,
      tone,
      withSeparator,
      ...additionalProps
    } = {
      ...useSelectorContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const active = anchor === activeTabAnchor;
    const ariaLabel: string | undefined = typeof label === 'string' ? label : undefined;

    const handleClick = () => {
      setActiveTabAnchor(anchor);
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.tab({
          active,
          className,
          color,
          orientation,
          radius,
          size,
          tone,
        })
      );
    }, [active, className, color, orientation, radius, size, theme, tone]);

    return (
      <>
        <button
          id={id}
          ref={ref}
          role="radio"
          aria-checked={active}
          aria-label={ariaLabel}
          onClick={handleClick}
          className={classes}
          disabled={disabled}
          tabIndex={active ? 0 : -1}
          {...additionalProps}
        >
          <span className="z-40 h-full flex items-center">{label}</span>
        </button>
        {withSeparator &&
          (separator || <span className={theme.separator({ orientation, size })} />)}
      </>
    );
  }
);

SelectorTab.displayName = 'SelectorTab';

export { SelectorTab };
