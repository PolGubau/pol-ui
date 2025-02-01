import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { useTranslate } from "../../hooks";
import { IconButton } from "../IconButton/IconButton";

export interface PaginationProps {
  total: number;
  page: number;
  onPageChange: (newPage: number) => void;
  pageSize: number;
  onPageSizeChange?: (newPageSize: number) => void;
  rowsPerPageOptions?: readonly number[];
}

const INITIAL_PAGE = 0;

export const Pagination = (props: PaginationProps) => {
  const {
    page, // Base 0
    total,
    pageSize,
    onPageChange,
    onPageSizeChange,
    rowsPerPageOptions = [10, 20, 50, 100],
  } = props;
  const { t } = useTranslate();

  // Calculate pagination details
  const maxPage = Math.max(Math.ceil(total / pageSize), 1); // Ensure at least 1 page
  const start = page * pageSize + 1; // Start index of current page
  const end = Math.min((page + 1) * pageSize, total); // End index of current page

  // Check if navigation is possible
  const canGoBack = page > INITIAL_PAGE;
  const canGoForward = page < maxPage - 1;

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number.parseInt(e.target.value, 10);
    onPageSizeChange?.(newValue);
    onPageChange(INITIAL_PAGE); // reset page to 0
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= INITIAL_PAGE && newPage < maxPage) {
      onPageChange(newPage);
    }
  };
  return (
    <div className="flex items-center gap-8 p-2">
      {onPageSizeChange && (
        <select
          name="pageSize"
          className="rounded-md pl-1 p-0.5 bg-transparent border border-gray-300 dark:border-gray-700"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <optgroup label={t("rowsPerPage")}>
            {rowsPerPageOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </optgroup>
        </select>
      )}
      <div>
        <small className="text-[0.9em]">
          {start} - {end} of {total}
        </small>
      </div>
      <div className="flex gap-1 items-center">
        <div className="pl-2 gap-2 flex text-sm items-center mr-2">
          <span>{t("page")}</span>
          <span>{page} </span>
        </div>
        <IconButton
          label={t("previousPage")}
          size="xs"
          disabled={!canGoBack}
          onClick={() => handlePageChange(page - 1)}
        >
          <TbChevronLeft size={20} />
        </IconButton>

        <IconButton label={t("nextPage")} disabled={!canGoForward} size="xs" onClick={() => handlePageChange(page + 1)}>
          <TbChevronRight size={20} />
        </IconButton>
      </div>
    </div>
  );
};
