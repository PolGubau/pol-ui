"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import { cn, mergeDeep } from "../../helpers";
import { useMergeValue } from "../../hooks";
import { getTheme } from "../../theme-store";
import type { TabsTheme } from "./theme";

type Tab = {
  name: string;
  content?: React.ReactNode;
  disabled?: boolean;
};

export enum TabMode {
  underlined = "underlined",
  contained = "contained",
}
export type TabModeType = keyof typeof TabMode;

export interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  hasNavMotion?: boolean;
  mode?: TabModeType;
  theme?: Partial<TabsTheme>;
  value?: number;
  defaultValue?: number;
  onTabChange?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  hasNavMotion = true,
  mode = TabMode.underlined,
  theme: customTheme = {},
  value,
  defaultValue = 0,
  onTabChange,
}: TabsProps) => {
  if (propTabs.length === 0) {
    throw new Error("Tabs must have at least one tab");
  }

  const [activeIdx, setActiveIdx] = useMergeValue(defaultValue, {
    value,
    onChange: onTabChange,
  });

  const theme: TabsTheme = mergeDeep(getTheme().tabs, customTheme);
  const id = useId();
  const isActive = (idx: number) => activeIdx === idx;
  const tab = propTabs[activeIdx];
  return (
    <div className="flex flex-col gap-4">
      <ul className={cn(theme.base, containerClassName)}>
        {propTabs.map((tab) => {
          const idx = propTabs.indexOf(tab);
          const isThisActive = isActive(idx);
          const setThisActive = () => setActiveIdx(idx);
          return (
            <button
              type="button"
              disabled={tab.disabled}
              key={tab.name}
              role="tab"
              aria-selected={isThisActive}
              onClick={() => {
                onTabChange?.(idx);
                setThisActive();
              }}
              className={cn(theme.navItem?.base, tab.disabled && theme.disabled, tabClassName)}
            >
              {isThisActive && (
                <motion.div
                  layoutId={hasNavMotion ? id : undefined}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    theme.navItem.marker?.base,
                    theme.navItem.marker?.active.on,
                    theme.navItem.marker?.mode[mode],
                    activeTabClassName,
                  )}
                />
              )}

              <span className={cn(theme.navItem.text)}>{tab.name}</span>
            </button>
          );
        })}
      </ul>
      {tab && <TabContent content={tab.content} key={tab.name} className={cn("mt-4", contentClassName)} />}{" "}
    </div>
  );
};

export const TabContent = ({
  className,
  content,
}: {
  className?: string;
  content: Tab["content"];
}) => {
  return <motion.div className={cn("relative h-full w-full transition-all ", className)}>{content}</motion.div>;
};
