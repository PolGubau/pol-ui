import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Button } from '../Button'
import { Toaster, toast } from './Toaster'
import type { ToasterProps } from './types'
import { TbAlien } from 'react-icons/tb'

export default {
  title: 'Components/Toaster ',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: StoryFn<ToasterProps> = args => {
  const createToast = () => {
    toast({
      title: 'This is a toast',
      duration: 500000,
      action: {
        label: 'Undo',
        onClick: () => {
          console.log('Undo')
        },
      },
      cancel: {
        label: 'cancel',
        onClick: () => {
          console.log('cancel')
        },
      },
    })
  }
  return (
    <div className="flex flex-col gap-3">
      <p>Click the button to show a toast</p>
      <Button onClick={createToast}>Show toaster</Button>
      <Toaster {...args} />
    </div>
  )
}
export const Examples: StoryFn<ToasterProps> = args => {
  return (
    <div className="flex gap-3">
      <Button
        onClick={() => {
          toast({
            title: 'This is a toast',
          })
        }}
      >
        Normal Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'This is a toast',
            action: {
              label: 'Undo',
              onClick: () => {
                alert('Undo')
              },
            },
          })
        }
      >
        Action Toast
      </Button>
      <Button color="success" onClick={() => toast({ title: 'This is a success toast', type: 'success' })}>
        Success Toast
      </Button>
      <Button color="error" onClick={() => toast({ title: 'This is a error toast', type: 'error' })}>
        error Toast
      </Button>
      <Button color="info" onClick={() => toast({ title: 'This is a info toast', type: 'info' })}>
        info Toast
      </Button>
      <Button color="warning" onClick={() => toast({ title: 'This is a warning toast', type: 'warning' })}>
        warning Toast
      </Button>
      <Button color="secondary" onClick={() => toast({ title: 'This toast is loading', type: 'loading' })}>
        Loading Toast
      </Button>
      <Button
        color="secondary"
        onClick={() => toast({ title: 'This toast is loading', description: 'I am the description of the toast' })}
      >
        Description Toast
      </Button>
      <Button color="secondary" onClick={() => toast({ title: 'Martian toast', icon: <TbAlien /> })}>
        Custom icon <TbAlien />
      </Button>
      <Button
        color="secondary"
        onClick={() =>
          toast({
            title: 'I will autoclose in 5 seconds',
            onDismiss: t => {
              alert('You dismissed ' + t.title)
            },
            onAutoClose: t => {
              alert('autoclosed ' + t.title)
            },
          })
        }
      >
        Action on close Toast
      </Button>

      <Toaster {...args} />
    </div>
  )
}
