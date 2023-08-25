import React from "react";
import Button, { ButtonType } from "../../../Buttons/Button/Button";
import { IconButton } from "../../../Buttons";
import { IconNames } from "../../../Icon";
interface Props {
	page: number;
	onPageChange?: (page: number) => void;
	rowsPerPage: number;
	surroundingButtons?: boolean;
	totalResults: number;
	variant?: ButtonType;
}
const Pagination: React.FC<Props> = ({
	page,
	onPageChange,
	rowsPerPage,
	totalResults,
	variant,
	surroundingButtons,
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
		<div className={`flex items-center justify-center gap-3`}>
			{surroundingButtons && (
				<IconButton
					type={variant}
					icon={IconNames.arrowleft}
					onClick={() => onPageChange?.(page - 1)}
					disabled={page === 1}
				/>
			)}
			{getPages().map((pageNumber) => (
				<Button
					type={variant}
					key={pageNumber}
					onClick={() => onPageChange?.(pageNumber)}
					disabled={page === pageNumber}
				>
					{pageNumber}
				</Button>
			))}
			{surroundingButtons && (
				<IconButton
					type={variant}
					icon={IconNames.arrowright}
					onClick={() => onPageChange?.(page + 1)}
					disabled={page * rowsPerPage >= totalResults}
				/>
			)}
		</div>
	);
};

export default Pagination;
