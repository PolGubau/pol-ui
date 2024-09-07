import { useEffect, useState } from "react"
import type { Meta } from "@storybook/react"

import { Button } from "../Button"
import { Card } from "../Card"
import { Toaster, toast } from "../Toaster"
import { OtpInput } from "./OtpInput"

export default {
  title: "Components/OtpInput",
  component: OtpInput,
  decorators: [
    (Story) => (
      <div className="flex p-6">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

export function Default() {
  const [otp, setOtp] = useState("")
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      onComplete={(code: string) => {
        toast(`You typed ${code}`)
      }}
    />
  )
}
export function Example() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [otp, setOtp] = useState("")
  useEffect(() => {
    setOtp("")
  }, [step])

  return (
    <>
      {step === 1 && (
        <Card>
          <h1>Step 1</h1>
          <Button
            onClick={() => {
              toast("Your code is 1234")
              setStep(2)
            }}
          >
            Get a code
          </Button>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <h1>Step 2</h1>
          <OtpInput
            value={otp}
            onChange={setOtp}
            onComplete={(code: string) => {
              if (code === "1234") {
                setStep(3)
              } else {
                toast.error("Invalid code")
              }
            }}
          />
        </Card>
      )}
      {step === 3 && (
        <Card>
          <h1>Account verfied!</h1>
          <Button
            onClick={() => {
              setStep(1)
            }}
          >
            Reset
          </Button>
        </Card>
      )}
    </>
  )
}
