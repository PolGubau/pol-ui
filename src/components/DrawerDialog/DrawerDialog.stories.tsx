import type { Meta, StoryFn } from '@storybook/react'

import { cn } from '../../helpers'
import { Button } from '../Button'
import { Dialog } from '../Dialog'
import { DrawerProps } from '../Drawer/Drawer'
import { Input } from '../Input'
import { Label } from '../Label'
import { DrawerDialog } from './DrawerDialog'

export default {
  title: 'Components/DrawerDialog',
  component: Dialog,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<DrawerProps> = args => {
  return (
    <DrawerDialog {...args}>
      <ProfileForm />
    </DrawerDialog>
  )
}

export const Example = Template.bind({})
function ProfileForm({ className }: React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
