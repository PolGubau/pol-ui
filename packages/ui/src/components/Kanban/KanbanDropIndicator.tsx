"use client";

import { twMerge } from "tailwind-merge";

import type { KanbanTheme } from "./theme";

export interface KanbanIndicatorProps {
  beforeId: string | null;
  column: string;
  className?: string;
  theme: KanbanTheme;
}

export const KanbanIndicator = ({ beforeId, column, className, theme }: KanbanIndicatorProps) => {
  return (
    <div data-before={beforeId ?? "-1"} data-column={column} className={twMerge(theme.indicator.base, className)} />
  );
};
