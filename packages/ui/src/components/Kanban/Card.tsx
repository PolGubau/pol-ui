"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { KanbanIndicator } from "./KanbanDropIndicator";
import type { KanbanTheme } from "./theme";

export interface CompleteKanbanCardProps {
  handleDragStart: (e: MouseEvent | TouchEvent | PointerEvent, card: KanbanCardProps) => void;
  setDragging: (value: boolean) => void;
  dragable?: boolean;
  card: KanbanCardProps;
  indicatorClassName?: string;
  theme: KanbanTheme;
}
export interface KanbanCardProps {
  title: string;
  id: string;
  column: string;
  onClick?: () => void;
}

export const KanbanCard = ({
  handleDragStart,
  card,
  dragable,
  setDragging,
  indicatorClassName,
  theme,
}: CompleteKanbanCardProps) => {
  const { title, id, column } = card;
  return (
    <>
      <KanbanIndicator beforeId={id} column={column} className={indicatorClassName} theme={theme} />
      <motion.button
        layout={true}
        onClick={card.onClick}
        layoutId={id}
        draggable={dragable}
        onDragStart={(e) => handleDragStart(e, card)}
        onDragEnd={() => {
          setDragging(false);
        }}
        className={twMerge(theme.card.base, dragable && theme.card.dragable)}
      >
        {title}
      </motion.button>
    </>
  );
};
