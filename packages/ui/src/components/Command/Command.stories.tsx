import { useEffect } from "react"
import type { Meta } from "@storybook/react"
import { TbUser } from "react-icons/tb"

import { useBoolean } from "../../hooks"
import { Badge } from "../Badge"
import { Dialog } from "../Dialog"
import { Divider } from "../Divider"
import { DrawerDialog } from "../DrawerDialog"
import { Toaster, toast } from "../Toaster"
import { Command } from "./Command"

export default {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

export const CommandMenu = () => {
  const { value, toggle } = useBoolean(false)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggle()
      }
    }

    document.addEventListener("keydown", down)
    return () => {
      document.removeEventListener("keydown", down)
    }
  }, [])
  return (
    <section className="flex flex-col gap-2 items-center">
      <Badge>
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Badge>

      <DrawerDialog
        shouldScaleBackground
        open={value}
        onOpenChange={(s) => {
          if (value != s) toggle()
        }}
        className="p-0"
        contentProps={{
          className: "p-0",
        }}
      >
        <Command>
          <Command.Input placeholder="Type a command or search..." />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
              <Command.Item onSelect={() => toast("Calendar")}>
                Calendar
              </Command.Item>
              <Command.Item onSelect={() => toast("Emoji")}>
                Search Emoji
              </Command.Item>
              <Command.Item onSelect={() => toast("calculator")}>
                Calculator
              </Command.Item>
            </Command.Group>
            <Divider />
            <Command.Group heading="Settings">
              <Command.Item
                value="profile"
                onSelect={() => toast("Profile")}
                className="flex gap-2 items-center"
              >
                <TbUser />
                Profile
              </Command.Item>
              <Command.Item onSelect={() => toast("Billing")}>
                Billing
              </Command.Item>
              <Command.Item onSelect={() => toast("Settings")}>
                Settings
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DrawerDialog>
    </section>
  )
}
export const InlineCommand = () => {
  return (
    <Command label="Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Divider />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command>
  )
}
