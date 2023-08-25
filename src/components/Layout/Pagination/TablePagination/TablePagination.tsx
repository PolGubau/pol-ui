import React from "react";
import { Select } from "../../../Selects";
import { IconNames } from "../../../Icon";
import { IconButton } from "../../../Buttons";
import Button, { ButtonType } from "../../../Buttons/Button/Button";
interface Props {
	page: number;
	onPageChange?: (page: number) => void;
	rowsPerPage: number;
	onRowsPerPageChange?: (rowsPerPage: number) => void;
	totalResults: number;
	rowsPerPageText?: string;
	variant?: ButtonType;
	showFirstAndLastButtons?: boolean;
	showMiddleButtons?: boolean;
}
const TablePagination: React.FC<Props> = ({
	page,
	onPageChange,
	rowsPerPage,
	onRowsPerPageChange,
	totalResults,
	rowsPerPageText = "Rows per page",
	variant,
	showFirstAndLastButtons = false,
	showMiddleButtons = false,
}) => {
	const firstPage = 1;
	const lastPage = Math.ceil(totalResults / rowsPerPage);
	const isFirstPage = page === firstPage;
	const isLastPage = page === lastPage;
	const isOnlyPage = isFirstPage && isLastPage;
	const isMiddlePage = !isFirstPage && !isLastPage;

	const getPages = () => {
		if (isOnlyPage) return [firstPage];
		if (isFirstPage) return [firstPage, firstPage + 1, firstPage + 2];
		if (isLastPage) return [lastPage - 2, lastPage - 1, lastPage];
		if (isMiddlePage) return [page - 1, page, page + 1];
		return [];
	};

	return (
		<div>
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-3">
					<span className="text-sm  ">{rowsPerPageText}</span>
					<Select
						variant={variant}
						items={[10, 25, 50, 100]}
						value={rowsPerPage}
						onChange={(newValue) => onRowsPerPageChange?.(Number(newValue))}
					/>
				</div>

				{showMiddleButtons && (
					<div className="flex items-center gap-3">
						{getPages().map((pageNumber) => (
							<Button
								type={variant}
								key={pageNumber}
								className="text-sm"
								onClick={() => onPageChange?.(pageNumber)}
								disabled={page === pageNumber}
							>
								{pageNumber}
							</Button>
						))}
					</div>
				)}

				<div className="flex items-center gap-3">
					<span className="text-sm  ">
						{page * rowsPerPage - rowsPerPage + 1}-{page * rowsPerPage} of {totalResults}
					</span>
					{showFirstAndLastButtons && (
						<IconButton
							type={variant}
							icon={IconNames.arrowBarLeft}
							className="  text-sm  "
							onClick={() => onPageChange?.(1)}
							disabled={page === 1}
						/>
					)}

					<IconButton
						type={variant}
						icon={IconNames.arrowleft}
						className="  text-sm  "
						onClick={() => onPageChange?.(page - 1)}
						disabled={page === 1}
					/>
					<IconButton
						type={variant}
						icon={IconNames.arrowright}
						className="  text-sm  "
						onClick={() => onPageChange?.(page + 1)}
						disabled={page * rowsPerPage >= totalResults}
					/>
					{showFirstAndLastButtons && (
						// Go to last page
						<IconButton
							type={variant}
							icon={IconNames.arrowBarRight}
							className="text-sm"
							onClick={() => onPageChange?.(lastPage)}
							disabled={page * rowsPerPage >= totalResults}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default TablePagination;
