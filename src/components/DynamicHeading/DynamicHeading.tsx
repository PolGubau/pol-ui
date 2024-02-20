import type { PropsWithChildren } from 'react'
import React from 'react'
import type { HeadingLevel } from '../../types'

export interface DynamicHeadingProps extends PropsWithChildren, React.HTMLAttributes<HTMLElement> {
  as: HeadingLevel
}

/**
 * @name DynamicHeading
 *
 * @description
 * The DynamicHeading component is a component that will render a heading based on the `as` prop.
 *
 * @param {HeadingLevel} as The heading level that will be rendered
 * @param {React.ReactNode} children The content of the heading
 *
 * @returns {React.ReactElement} The rendered heading
 *
 * @example
 * <DynamicHeading as={HeadingLevelEnum.h1}>...</DynamicHeading>
 *
 */
const DynamicHeading: React.FC<DynamicHeadingProps> = ({
  as,
  children,
  ...props
}: DynamicHeadingProps): React.ReactElement => {
  const Heading = as ?? 'h2'

  return <Heading {...props}>{children}</Heading>
}

export default DynamicHeading
