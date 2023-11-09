'use client';
import { Collapse } from '@components/Collapse';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarNavSectionItemComponent,
  SidebarNavSectionItemContext,
  SidebarNavSectionItemProps,
} from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSectionItem/SidebarNavSectionItem.types';
import { ChevronDownIcon } from '@icons/ChevronDown';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  SidebarNavSectionItemContextProvider,
  useSidebarNavSectionItemContext,
} from './SidebarNavSectionItem.context';

const SidebarNavSectionItem: SidebarNavSectionItemComponent = forwardRef<
  HTMLLIElement,
  SidebarNavSectionItemProps
>((props: SidebarNavSectionItemProps, ref?: Ref<HTMLLIElement>) => {
  const theme = useComponentTheme('Sidebar');
  const {
    active = false,
    children,
    className,
    as,
    href = '#',
    label,
    icon,
    collapsed = true,
    onClick,
    ...additionalProps
  } = props;
  const { color, state } = useSidebarContext();
  const opened = state.expanded || state.hovered;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(opened === false ? true : collapsed);
  const classes = useMemo(() => {
    return twMerge(
      theme.navSectionItem({
        active,
        className,
        color,
        opened,
      })
    );
  }, [active, className, color, opened, theme]);
  const id = usePropId(props.id);
  const Component = as || 'a';
  const componentProps =
    as === 'button' ? ({ type: 'button' } as { type: 'button' | 'submit' | 'reset' }) : { href };
  const contextValue: SidebarNavSectionItemContext = {
    childrenCollapsed: isCollapsed,
  };

  const { childrenCollapsed } = useSidebarNavSectionItemContext();

  return (
    <li id={id} ref={ref} className={theme.navSectionItemWrapper({ opened })} {...additionalProps}>
      <Component
        {...componentProps}
        className={classes}
        onClick={(event: any) => {
          setIsCollapsed(!isCollapsed);

          if (onClick) {
            onClick(event);
          }
        }}
        tabIndex={childrenCollapsed ? -1 : 0}
      >
        {icon && <span className={theme.navSectionItemIcon()}>{icon}</span>}
        <div className={theme.navSectionItemLabelWrapper({ opened })}>
          <span className={theme.navSectionItemLabel()}>{label}</span>

          {children && (
            <ChevronDownIcon
              className={theme.navSectionItemCollapseIcon({ collapsed: isCollapsed })}
            />
          )}
        </div>
      </Component>

      {children && opened && (
        <SidebarNavSectionItemContextProvider value={contextValue}>
          <Collapse isOpen={!isCollapsed}>{children}</Collapse>
        </SidebarNavSectionItemContextProvider>
      )}
    </li>
  );
});

SidebarNavSectionItem.displayName = 'SidebarNavSectionItem';

export { SidebarNavSectionItem };
