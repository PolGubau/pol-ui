import React from "react"
import type { Meta } from "@storybook/react"

import { Button, Toaster, toast } from "../../components"
import { useSpeechToText } from "./use-speech-to-text"

const Test = () => {
  return "test"
}

export default {
  title: "Hooks/useSpeechToText",
  component: Test,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],

  tags: ["autodocs"],
} as Meta
export const Default: React.FC = () => {
  const { start, stop, transcript, isListening } = useSpeechToText({
    lang: "en-US",
    continuous: true,
    maxAlternatives: 1,
    onResult: (result) => {
      toast("Recognized speech:", { description: result })
    },
    onError: (error) => {
      toast.error("Error occurred:", { description: error })
    },
  })

  return (
    <div>
      <h1>Speech to Text</h1>
      <Button onClick={start} disabled={isListening}>
        Start Listening
      </Button>
      <Button onClick={stop} disabled={!isListening}>
        Stop Listening
      </Button>
      <div>
        <h2>Transcript:</h2>
        <p>{transcript}</p>
      </div>
    </div>
  )
}
export const NoCountuous: React.FC = () => {
  const { start, stop, transcript, isListening } = useSpeechToText({
    lang: "en-US",
    continuous: false,
    onResult: (result) => {
      toast("Recognized speech:", { description: result })
    },
    onError: (error) => {
      toast.error("Error occurred:", { description: error })
    },
  })

  return (
    <div>
      <h1>Speech to Text</h1>
      <Button onClick={start} disabled={isListening}>
        Start Listening
      </Button>
      <Button onClick={stop} disabled={!isListening}>
        Stop Listening
      </Button>
      <div>
        <h2>Transcript:</h2>
        <p>{transcript}</p>
      </div>
    </div>
  )
}
export const Spanish: React.FC = () => {
  const { start, stop, transcript, isListening } = useSpeechToText({
    lang: "es-ES",
    continuous: false,
    onResult: (result) => {
      toast("Recognized speech:", { description: result })
    },
    onError: (error) => {
      toast.error("Error occurred:", { description: error })
    },
  })

  return (
    <div>
      <h1>Speech to Text</h1>
      <Button onClick={start} disabled={isListening}>
        Start Listening
      </Button>
      <Button onClick={stop} disabled={!isListening}>
        Stop Listening
      </Button>
      <div>
        <h2>Transcript:</h2>
        <p>{transcript}</p>
      </div>
    </div>
  )
}
