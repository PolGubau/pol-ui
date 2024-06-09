import type { Meta, StoryFn } from '@storybook/react'
import { Toaster } from '../Toaster'
import { CodeBlock, type CodeBlockProps } from './CodeBlock'

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<CodeBlockProps> = args => <CodeBlock {...args} />

export const Default = Template.bind({})

const code = `'use client'

import * as React from 'react'
import { cn } from '../../helpers'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'
import { Button } from '../Button'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

function CodeBlock({ expandButtonTitle = 'View Code', className, children, ...props }: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn('relative overflow-hidden', className)} {...props}>
        <CollapsibleContent forceMount className={cn('overflow-hidden', !isOpened && 'max-h-32')}>
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
            'absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2',
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
`

Default.args = {
  children: code,
}
