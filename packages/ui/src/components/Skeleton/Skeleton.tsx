import { cn } from '../../helpers'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}
function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }
