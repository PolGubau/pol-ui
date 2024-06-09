import type { ComponentProps, FC, ReactNode } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { PaginationButtonProps } from './PaginationButton'
import { PaginationButton, PaginationNavigation } from './PaginationButton'
import { range } from './helpers'
import type { PaginationTheme } from './theme'
import { cn } from '../../helpers'

export interface PaginationProps extends ComponentProps<'nav'> {
  currentPage: number
  onPageChange: (page: number) => void
  renderPaginationButton?: (props: PaginationButtonProps) => ReactNode
  showIcons?: boolean
  theme?: DeepPartial<PaginationTheme>
  totalPages: number
  outline?: boolean
  hasLabels?: boolean
  hasRange?: boolean
  pageSize?: number
  labels?: {
    next: string
    previous: string
    of: string
    to: string
    showing: string
    entries: string
  }
}

export const Pagination: FC<PaginationProps> = ({
  className,
  currentPage = 1,
  hasRange = true,
  hasLabels = false,
  labels = {
    next: 'Next',
    previous: 'Previous',
    of: 'of',
    to: 'to',
    entries: 'Entries',
    showing: 'Showing',
  },
  onPageChange,
  renderPaginationButton = props => <PaginationButton {...props} />,
  showIcons: showIcon = false,
  theme: customTheme = {},
  totalPages,
  pageSize = 5,
  outline,
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme)

  const lastPage = Math.min(Math.max(currentPage + 2, pageSize - 1), totalPages)
  const firstPage = Math.max(1, lastPage - (pageSize - 1))

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages))
  }

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1))
  }
  const numRange = range(firstPage, lastPage)
  return (
    <nav className={cn(theme.base, className)} {...props}>
      {hasLabels && (
        <div className={theme.layout.table.base}>
          {labels.showing} <span className={theme.layout.table.span}>{firstPage}</span> {labels.to}
          {` `}
          <span className={theme.layout.table.span}>{lastPage}</span> {labels.of}
          {` `}
          <span className={theme.layout.table.span}>{totalPages}</span> {labels.entries}
        </div>
      )}
      <ul className={theme.pages.base}>
        <li>
          <PaginationNavigation
            outline={outline}
            className={cn(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {showIcon && <HiChevronLeft aria-hidden className={theme.pages.previous.icon} />}
            {labels.previous}
          </PaginationNavigation>
        </li>
        {hasRange &&
          numRange.map((page: number) => (
            <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
              {renderPaginationButton({
                outline,
                className: cn(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
                active: page === currentPage,
                onClick: () => onPageChange(page),
                children: page,
              })}
            </li>
          ))}
        <li>
          <PaginationNavigation
            outline={outline}
            className={cn(theme.pages.next.base, showIcon && theme.pages.showIcon)}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {labels.next}
            {showIcon && <HiChevronRight aria-hidden className={theme.pages.next.icon} />}
          </PaginationNavigation>
        </li>
      </ul>
    </nav>
  )
}
