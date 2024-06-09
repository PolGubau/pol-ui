'use client'

import * as React from 'react'
import { cn } from '../../helpers'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'
import { Button } from '../Button'
import { useBoolean } from '../../hooks'
interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

function CodeBlock({ expandButtonTitle = 'View Code', className, children, ...props }: CodeBlockProps) {
  const { value: isOpened, toggle } = useBoolean(false)

  return (
    <Collapsible open={isOpened} onOpenChange={toggle}>
      <div className={cn('relative overflow-hidden bg-secondary-900 text-white p-4 ', className)} {...props}>
        <CollapsibleContent forceMount className={cn('overflow-hidden CollapsibleContent', !isOpened && 'max-h-32')}>
          <div
            className={cn(
              '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]',
              !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]',
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            'absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-secondary-900/90 p-2',
            isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0',
          )}
        >
          <CollapsibleTrigger asChild>
            <Button color="secondary" className="h-8 text-xs">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}

export { CodeBlock, type CodeBlockProps }
