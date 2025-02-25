"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import { useEffect, useId, useMemo } from "react";
import { HiChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { useRipple } from "../../hooks";
import { RoundedSizesEnum, SidesEnum } from "../../types";
import type { DeepPartial, IBoolean, RoundedSizesTypes } from "../../types/types";
import { Tooltip } from "../Tooltip";
import { SidebarItemContext, useSidebarContext } from "./SidebarContext";
import type { SidebarItemProps } from "./SidebarItem";

export interface SidebarCollapseTheme {
  button: string;
  icon: {
    base: string;
    open: IBoolean;
  };
  rounded: RoundedSizesTypes;
  label: {
    base: string;
    icon: {
      base: string;
      open: IBoolean;
    };
  };
  list: string;
}
type PropsFromItem = "active" | "rounded" | "as" | "href" | "icon" | "badge" | "labelColor";
export interface SidebarCollapseProps extends Pick<SidebarItemProps, PropsFromItem>, ComponentProps<"button"> {
  onClick?: ComponentProps<"button">["onClick"];
  defaultOpen?: boolean;
  chevronIcon?: FC<ComponentProps<"svg">>;
  renderChevronIcon?: (theme: SidebarCollapseTheme, open: boolean) => ReactElement;
  theme?: DeepPartial<SidebarCollapseTheme>;
  hasMotion?: boolean;
}

export const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  icon: Icon,
  badge,
  rounded = RoundedSizesEnum.md,
  chevronIcon: ChevronIcon = HiChevronDown,
  renderChevronIcon,
  defaultOpen = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const {
    theme: rootTheme,
    open: collapsed,
    onOpenChange: toogleCollapsed,
    childsOpened,
    setChildsOpened,
  } = useSidebarContext();
  const isOpen: boolean = childsOpened.includes(id);

  useEffect(() => {
    if (defaultOpen && !isOpen) {
      setChildsOpened([...childsOpened, id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultOpen]);

  const handleToggle = () => {
    if (isOpen) {
      setChildsOpened(childsOpened.filter((childId) => childId !== id));
    } else {
      setChildsOpened([...childsOpened, id]);
    }
    if (collapsed) {
      toogleCollapsed?.();
    }
  };

  const theme = mergeDeep(rootTheme.collapse, customTheme);
  const [ripple, event] = useRipple({
    opacity: 0.2,
  });
  const Wrapper: FC<PropsWithChildren> = ({ children: ch }) => (
    <AnimatePresence mode="wait">
      <li ref={ripple} onPointerDown={event}>
        {collapsed ? (
          <Tooltip label={badge} side={SidesEnum.right}>
            {ch}
          </Tooltip>
        ) : (
          ch
        )}
      </li>
    </AnimatePresence>
  );

  const value = useMemo(() => ({ isInsideCollapse: true }), []);

  return (
    <Wrapper>
      <button
        id={`ui-sidebar-collapse-${id}`}
        onClick={() => {
          handleToggle();
        }}
        title={badge}
        type="button"
        className={twMerge(
          theme.button,
          theme.rounded[rounded],

          className,
        )}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden={true}
            data-testid="ui-sidebar-collapse-icon"
            className={twMerge(theme.icon.base, theme.icon.open[isOpen ? "on" : "off"])}
          />
        )}
        {collapsed ? (
          <span className="sr-only">{badge}</span>
        ) : (
          <>
            <span data-testid="ui-sidebar-collapse-label" className={theme.label.base}>
              {badge}
            </span>
            {renderChevronIcon ? (
              renderChevronIcon(theme, isOpen)
            ) : (
              <ChevronIcon
                aria-hidden={true}
                className={twMerge(theme.label.icon.base, theme.label.icon.open[isOpen ? "on" : "off"])}
              />
            )}
          </>
        )}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            aria-labelledby={`ui-sidebar-collapse-${id}`}
            className={theme.list}
            initial={{ height: 0, scale: 0.7 }}
            animate={{ height: "auto", scale: 1 }}
            exit={{ height: 0, scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeInOut", type: "tween" }}
          >
            <SidebarItemContext.Provider value={value}>{children}</SidebarItemContext.Provider>
          </motion.ul>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

SidebarCollapse.displayName = "Sidebar.Collapse";
