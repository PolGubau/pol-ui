import React from 'react'
import { type HeadingLevel } from '../../PoluiProvider'

interface DynamicHeadingProps extends React.HTMLAttributes<HTMLElement> {
  as: HeadingLevel
  children: React.ReactNode
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
 * @returns {React.FC<DynamicHeadingProps>}
 *
 * @example
 * <DynamicHeading as={HeadingLevelEnum.h1}>...</DynamicHeading>
 *
 */
const DynamicHeading: React.FC<DynamicHeadingProps> = ({
  as,
  children,
  ...props
}: {
  as: HeadingLevel
  children: React.ReactNode
}) => {
  const Heading = as ?? 'h2'

  return <Heading {...props}>{children}</Heading>
}

export default DynamicHeading
