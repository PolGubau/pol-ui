import type { Meta, StoryFn } from '@storybook/react'
import { Select, SelectProps, SelectGroup, SelectItem, SelectLabel } from './Select'
import { Divider } from '../Divider'
import React from 'react'
import { Toaster, toast } from '../Toaster'
import { Button } from '../Button'
export default {
  title: 'Components/Select',
  component: Select,
  decorators: [
    Story => (
      <div className="p-4 bg-secondary-50 dark:bg-secondary-800">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<SelectProps> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
      <Divider className="my-1" />
      <SelectGroup>
        <SelectLabel>Cities</SelectLabel>
        <SelectItem value="mataro">Mataró</SelectItem>
        <SelectItem value="barcelona">Barcelona</SelectItem>
        <SelectItem value="madrid">Madrid</SelectItem>
        <SelectItem value="valencia">Valencia</SelectItem>
        <SelectItem value="sevilla">Sevilla</SelectItem>
        <SelectItem value="premia">Premià</SelectItem>
      </SelectGroup>
    </>
  ),
}

export const Controlled = () => {
  const [value, setValue] = React.useState('apple')
  return (
    <>
      <p>Select value: {value}</p>
      <Select value={value} onChange={setValue}>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </Select>
    </>
  )
}

export const UncontrolledInForm = () => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        toast({
          title: 'Form submitted!',
          description: JSON.stringify(Object.fromEntries(formData.entries()), null, 2),
        })
      }}
    >
      <Select
        name="fruit"
        defaultValue="apple"
        defaultTriggerOptions={{
          className: 'rounded-none rounded-l-xl justify-between',
        }}
      >
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
      <Button className="rounded-none rounded-r-xl" type="submit">
        Submit
      </Button>
    </form>
  )
}
