import { IconColumn } from "../typed";

export const excludeId = (column: string) => column !== "id";
export const excludeNull = (column: string) => column !== null;
export const excludeUndefined = (column: string) => column !== undefined;
export const excludeEmptyString = (column: string) => column !== "";
export const excludeEmptyArray = (column: string) => column.length !== 0;
export const excludeEmptyObject = (column: string) =>
  Object.keys(column).length !== 0;
export const excludeThese = (columns: string[]) => (column: string) =>
  !columns.includes(column);

//

export const isThisIconColumn = (
  column: string,
  iconColumns: IconColumn[] | undefined
): JSX.Element | null => {
  const icon = iconColumns?.find((iconColumn: { name: string }) => {
    const icon = iconColumn.name === column;
    return icon;
  });
  return icon?.icon || null;
};
