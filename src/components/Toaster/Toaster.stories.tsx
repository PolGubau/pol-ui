import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Button } from '../Button'
import { Toaster, toast } from '.'
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
    toast('This is a toast', {
      duration: 500000,
      action: {
        label: 'Undo',
        onClick: () => {
          alert('Undo')
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
    <div className="flex gap-3 flex-wrap">
      <Button
        onClick={() => {
          toast('This is a toast')
        }}
      >
        Normal Toast
      </Button>
      <Button
        onClick={() =>
          toast('This is a toast', {
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
      <Button color="success" onClick={() => toast.success('This is a success toast')}>
        Success Toast
      </Button>
      <Button color="error" onClick={() => toast.error('This is a error toast')}>
        error Toast
      </Button>
      <Button color="info" onClick={() => toast.info('This is a info toast')}>
        info Toast
      </Button>
      <Button color="warning" onClick={() => toast.warning('This is a warning toast')}>
        warning Toast
      </Button>
      <Button color="secondary" onClick={() => toast.loading('This toast is loading')}>
        Loading Toast
      </Button>
      <Button
        color="secondary"
        onClick={() => toast('This toast is loading', { description: 'I am the description of the toast' })}
      >
        Description Toast
      </Button>
      <Button color="secondary" onClick={() => toast('Martian toast', { icon: <TbAlien /> })}>
        Custom icon <TbAlien />
      </Button>
      <Button
        color="secondary"
        onClick={() =>
          toast('I will autoclose in 5 seconds', {
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

export const CustomPosition: StoryFn<ToasterProps> = args => {
  return (
    <div className="flex gap-3 flex-wrap">
      <Button
        onClick={() => {
          toast('This is a toast', { position: 'top-right' })
        }}
      >
        Top Right
      </Button>
      <Button
        onClick={() => {
          toast('This is a toast', { position: 'top-left' })
        }}
      >
        Top Left
      </Button>
      <Button
        onClick={() => {
          toast('This is a toast', { position: 'bottom-right' })
        }}
      >
        Bottom Right
      </Button>
      <Button
        onClick={() => {
          toast('This is a toast', { position: 'bottom-left' })
        }}
      >
        Bottom Left
      </Button>
      <Toaster {...args} />
    </div>
  )
}
