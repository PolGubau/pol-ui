import type { Meta } from '@storybook/react'

import { DrawerArray } from './DrawerArray'
import { useState } from 'react'
import React from 'react'
import { Input, Selector, TextArea, toast } from '..'
const meta: Meta<typeof DrawerArray> = {
  title: 'Components/DrawerArray',
  component: DrawerArray,
  tags: ['autodocs'],
  args: {
    title: 'DrawerArray example',
    placement: 'auto',
    disabled: false,
    label: 'DrawerArray',
  },
  decorators: [
    Story => (
      <div className=" ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
export default meta
interface Property {
  name: string | null
  description: string | null
  label: string | null
  type: null | string
}
const initialProperty: Property = {
  name: '',
  description: null,
  label: null,
  type: 'string',
}

export const Default = () => {
  const [values, setValue] = useState<Property[]>([
    {
      name: 'prop1',
      description: 'description',
      label: 'label',
      type: 'type1',
    },
    {
      name: 'prop2',
      description: 'description',
      label: 'label',
      type: 'type1',
    },
  ])
  return (
    <DrawerArray
      label="Properties"
      initialProperty={initialProperty}
      values={values}
      onChange={setValue}
      form={({ value, onChange }) => (
        <form className="flex flex-col gap-2 ">
          <Input label="Name" value={value.name ?? ''} onChange={e => onChange({ ...value, name: e.target.value })} />

          <TextArea
            label="Description"
            value={value.description ?? ''}
            onChange={e => onChange({ ...value, description: e.target.value })}
          />

          <Selector
            label="Type"
            value={value.type}
            onChange={type => {
              onChange({ ...value, type })
            }}
            options={['string', 'number', 'boolean']}
          />
        </form>
      )}
    />
  )
}
export const CustomView = () => {
  const [values, setValue] = useState<Property[]>([
    {
      name: 'prop1',
      description: 'description',
      label: 'label',
      type: 'type1',
    },
    {
      name: 'prop2',
      description: 'description',
      label: 'label',
      type: 'type1',
    },
  ])
  return (
    <DrawerArray
      label="Properties"
      initialProperty={initialProperty}
      values={values}
      view={value => (
        <div className="flex gap-2 flex-col p-2">
          <strong className="font-bold">{value.name}</strong>
          <p>{value.description}</p>
          <p className="text-sm opacity-75">{value.type}</p>
        </div>
      )}
      onChange={setValue}
      form={({ value, onChange }) => (
        <form className="flex flex-col gap-2 ">
          <Input label="Name" value={value.name ?? ''} onChange={e => onChange({ ...value, name: e.target.value })} />

          <Selector
            label="Type"
            value={value.type}
            onChange={type => {
              onChange({ ...value, type })
            }}
            options={['string', 'number', 'boolean']}
          />
        </form>
      )}
    />
  )
}
export const Debug = () => {
  const [values, setValue] = useState<Property[]>([
    {
      name: 'prop1',
      description: 'description',
      label: 'label',
      type: 'type1',
    },
    {
      name: 'prop2',
      description: 'description',
      label: 'label',
      type: 'type1',
    },
  ])
  return (
    <>
      <pre>{JSON.stringify(values, null, 2)}</pre>

      <DrawerArray
        label="Properties"
        initialProperty={initialProperty}
        values={values}
        view={value => (
          <div className="flex gap-2 flex-col p-2">
            <strong className="font-bold">{value.name}</strong>
            <p>{value.description}</p>
            <p className="text-sm opacity-75">{value.type}</p>
          </div>
        )}
        onChange={vs => {
          toast('Updated')
          setValue(vs)
        }}
        form={({ value, onChange }) => (
          <form className="flex flex-col gap-2 ">
            <Input label="Name" value={value.name ?? ''} onChange={e => onChange({ ...value, name: e.target.value })} />

            <Selector
              label="Type"
              value={value.type}
              onChange={type => {
                onChange({ ...value, type })
              }}
              options={['string', 'number', 'boolean']}
            />
          </form>
        )}
      />
    </>
  )
}
