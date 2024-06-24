import { useState } from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { BiUserVoice } from "react-icons/bi"
import { TbPlayerPauseFilled } from "react-icons/tb"

import { useSpeechToText } from "../../hooks"
import { IconButton } from "../IconButton"
import { ListeningAnimation } from "../ListeningAnimation/ListeningAnimation"
import { Toaster, toast } from "../Toaster"
import { Textarea, type TextareaProps } from "./Textarea"

export default {
  title: "Components/Inputs/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col justify-center items-center bg-secondary-50">
        <div className="max-w-xl">
          <Story />
          <Toaster />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Template: StoryFn<TextareaProps> = (args) => <Textarea {...args} />

export const DefaultTextarea = Template.bind({})
DefaultTextarea.storyName = "Textarea"
DefaultTextarea.args = {
  children: "Text",
}
export const CustomHeight = Template.bind({})
CustomHeight.args = {
  children: "Text",
  label: "That is a loooong textarea",
  className: "min-h-[300px]",
}
export const Resizeable = Template.bind({})
Resizeable.args = {
  children: "Text",
  label: "You can resize me :)",
  innerClassName: "resize ",
}

export const SpeechRecognition = () => {
  const [hasError, setHasError] = useState(false)
  const handleError = (error: string) => {
    setHasError(true)
    toast.error(error, {
      description:
        "Please make sure you have a microphone connected, maybe your browser doesn't support this feature",
    })
  }
  const [text, setText] = useState("")

  const handleSuccess = (result: string) => {
    toast(result)
    setText(transcript)
  }
  const { start, stop, transcript, isListening } = useSpeechToText({
    onError: handleError,
    onResult: handleSuccess,
  })

  return (
    <div className="relative">
      {isListening && (
        <ListeningAnimation
          isListening={isListening}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-1/3"
        />
      )}
      <Textarea
        value={isListening ? transcript : text}
        onChange={(e) => setText(e.target.value)}
        disabled={isListening}
        onBlur={stop}
        rightComponent={
          !hasError && (
            <IconButton onClick={isListening ? stop : start}>
              {isListening ? (
                <TbPlayerPauseFilled size={20} />
              ) : (
                <BiUserVoice size={20} />
              )}
            </IconButton>
          )
        }
      />
    </div>
  )
}
