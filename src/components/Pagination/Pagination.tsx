import type { ComponentProps, FC, ReactNode } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { PaginationButtonProps } from './PaginationButton'
import { PaginationButton, PaginationNavigation } from './PaginationButton'
import { range } from './helpers'
import type { PaginationTheme } from './theme'

export interface PaginationProps extends ComponentProps<'nav'> {
  currentPage: number
  layout?: 'navigation' | 'pagination' | 'table'
  nextLabel?: string
  onPageChange: (page: number) => void
  previousLabel?: string
  renderPaginationButton?: (props: PaginationButtonProps) => ReactNode
  showIcons?: boolean
  theme?: DeepPartial<PaginationTheme>
  totalPages: number
}

export const Pagination: FC<PaginationProps> = ({
  className,
  currentPage,
  layout = 'pagination',
  nextLabel = 'Next',
  onPageChange,
  previousLabel = 'Previous',
  renderPaginationButton = props => <PaginationButton {...props} />,
  showIcons: showIcon = false,
  theme: customTheme = {},
  totalPages,
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme)

  const lastPage = Math.min(Math.max(currentPage + 2, 5), totalPages)
  const firstPage = Math.max(1, lastPage - 4)

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages))
  }

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1))
  }

  return (
    <nav className={twMerge(theme.base, className)} {...props}>
      {layout === 'table' && (
        <div className={theme.layout.table.base}>
          Showing <span className={theme.layout.table.span}>{firstPage}</span> to&nbsp;
          <span className={theme.layout.table.span}>{lastPage}</span> of {` `}
          <span className={theme.layout.table.span}>{totalPages}</span> Entries
        </div>
      )}
      <ul className={theme.pages.base}>
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {showIcon && <HiChevronLeft aria-hidden className={theme.pages.previous.icon} />}
            {previousLabel}
          </PaginationNavigation>
        </li>
        {layout === 'pagination' &&
          range(firstPage, lastPage).map((page: number) => (
            <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
              {renderPaginationButton({
                className: twMerge(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
                active: page === currentPage,
                onClick: () => onPageChange(page),
                children: page,
              })}
            </li>
          ))}
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon)}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {nextLabel}
            {showIcon && <HiChevronRight aria-hidden className={theme.pages.next.icon} />}
          </PaginationNavigation>
        </li>
      </ul>
    </nav>
  )
}
