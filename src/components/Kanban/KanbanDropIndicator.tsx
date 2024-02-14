export type DropIndicatorProps = {
  beforeId: string | null
  column: string
}

export const KanbanDropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return <div data-before={beforeId ?? '-1'} data-column={column} className="my-0.5 h-1 w-full bg-primary opacity-0" />
}
