import { useEffect } from "react"
import type { Meta } from "@storybook/react"
import { TbUser } from "react-icons/tb"

import { useBoolean } from "../../hooks"
import { Button } from "../Button"
import { Divider } from "../Divider"
import { Kbd } from "../Kbd"
import { Modal } from "../Modal"
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
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      <Modal
        open={value}
        onOpenChange={toggle}
        contentClassName="p-0   bg-secondary-100 shadow-lg "
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
      </Modal>
      <Button onClick={toggle}>Open Command</Button>
    </>
  )
}
export const InlineCommand = () => {
  return (
    <Command
      label="Command Menu"
      className="bg-white rounded-xl p-2 shadow-xl flex justify-center max-w-[500px]"
    >
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
