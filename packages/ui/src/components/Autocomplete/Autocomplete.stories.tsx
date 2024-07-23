import React from "react"
import type { Meta } from "@storybook/react"
import { TbDotsVertical } from "react-icons/tb"

import { Checkbox } from "../Checkbox"
import { IconButton } from "../IconButton"
import { Input } from "../Input"
import { Toaster, toast } from "../Toaster"
import { Autocomplete, type AutocompleteOption } from "./autocomplete"

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col h-full justify-center items-center min-h-[600px] bg-secondary-50">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
export const Default = () => {
  const [value, setValue] = React.useState<AutocompleteOption | undefined>(
    undefined
  )

  return (
    <Autocomplete
      options={frameworks}
      value={value}
      onChange={(v) => {
        setValue(v)
        toast({ title: `Selected: ${v.label}` })
      }}
    />
  )
}
export const InForm = () => {
  const [value, setValue] = React.useState<AutocompleteOption | undefined>(
    undefined
  )

  return (
    <form action="" className="flex flex-col gap-4">
      <Input label="Name" placeholder="Pol Gubau" />
      <Input label="Email" placeholder="hello@polgubau.com" />
      <Autocomplete
        value={value}
        className="w-full"
        options={frameworks}
        onChange={(v) => {
          setValue(v)
          toast({ title: `Selected: ${v.label}` })
        }}
      />
      <Checkbox label="Subscribe to newsletter" />
    </form>
  )
}
export const RemainOpen = () => {
  const [value, setValue] = React.useState<AutocompleteOption | undefined>(
    undefined
  )

  return (
    <Autocomplete
      value={value}
      options={frameworks}
      closeOnSelect={false}
      onChange={(v) => {
        setValue(v)
        toast({ title: `Selected: ${v.label}` })
      }}
    />
  )
}
export const CustomTrigger = () => {
  const [value, setValue] = React.useState<AutocompleteOption | undefined>(
    undefined
  )

  return (
    <Autocomplete
      value={value}
      options={frameworks}
      onChange={(v) => {
        setValue(v)

        toast({ title: `Selected: ${v.label}` })
      }}
    >
      <IconButton>
        <TbDotsVertical />
      </IconButton>
    </Autocomplete>
  )
}
