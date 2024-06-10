import React, { type ComponentProps } from "react"

import { cn, mergeDeep, type OverrideProps } from "../../helpers"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types"
import type { OtpInputTheme } from "./theme"

export enum OtpValidTypes {
  number = "number",
  tel = "tel",
  text = "text",
  password = "password",
}

export type OtpValidType = `${OtpValidTypes}`

export type OtpInputProps = OverrideProps<
  Omit<ComponentProps<"input">, "ref">,
  {
    /** Value of the OTP input */
    value?: string
    /** Number of OTP inputs to be rendered */
    length?: number
    /** Callback to be called when the OTP value changes */
    onChange: (otp: string) => void
    /** Callback to be called when pasting content into the component */
    onPaste?: (event: React.ClipboardEvent<HTMLDivElement>) => void
    /** Whether the first input should be auto focused */
    shouldAutoFocus?: boolean
    /** Placeholder for the inputs */
    placeholder?: string
    /** Function to render the separator */
    renderSeparator?: ((index: number) => React.ReactNode) | React.ReactNode

    /** The type that will be passed to the input being rendered */
    type?: OtpValidType

    /** Classname for the inputs */
    inputsClassName?: string

    /** Callback to be called when the OTP is complete */
    onComplete?: (otp: string) => void

    theme?: DeepPartial<OtpInputTheme>
  }
>

export const OtpInput = ({
  value = "",
  length = 4,
  onChange,
  onPaste,
  shouldAutoFocus = false,
  type = OtpValidTypes.number,
  renderSeparator,
  placeholder,
  inputsClassName,
  onComplete,
  theme: customTheme = {},
  ...props
}: OtpInputProps) => {
  const [activeInput, setActiveInput] = React.useState(0)
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const getOTPValue = () => (value ? value.toString().split("") : [])

  const isInputNum = type === OtpValidTypes.number || type === OtpValidTypes.tel

  React.useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length])

  React.useEffect(() => {
    if (shouldAutoFocus) {
      inputRefs.current[0]?.focus()
    }
  }, [shouldAutoFocus])

  React.useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value)
    }
  }, [value, length, onComplete])

  const getPlaceholderValue = () => {
    if (typeof placeholder === "string") {
      if (placeholder.length === length) {
        return placeholder
      }

      if (placeholder.length > 0) {
        console.error(
          "⚠️ Length of the placeholder should be equal to the number of inputs."
        )
      }
    }
    return undefined
  }

  const isInputValueValid = (value: string) => {
    const isTypeValid = isInputNum
      ? !isNaN(Number(value))
      : typeof value === "string"
    return isTypeValid && value.trim().length === 1
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (isInputValueValid(value)) {
      changeCodeAtFocus(value)
      focusInput(activeInput + 1)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (!isInputValueValid(value)) {
      // Pasting from the native autofill suggestion on a mobile device can pass
      // the pasted string as one long input to one of the cells. This ensures
      // that we handle the full input and not just the first character.
      if (value.length === length) {
        const hasInvalidInput = value
          .split("")
          .some((cellInput) => !isInputValueValid(cellInput))
        if (!hasInvalidInput) {
          handleOTPChange(value.split(""))
          focusInput(length - 1)
        }
      }

      // Clear the input if it's not valid value because firefox allows
      // pasting non-numeric characters in a number type input
      event.target.value = ""
    }
  }

  const handleFocus =
    (event: React.FocusEvent<HTMLInputElement>) => (index: number) => {
      setActiveInput(index)
      event.target.select()
    }

  const handleBlur = () => {
    setActiveInput(activeInput - 1)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const otp = getOTPValue()
    if ([event.code, event.key].includes("Backspace")) {
      event.preventDefault()
      changeCodeAtFocus("")
      focusInput(activeInput - 1)
    } else if (event.code === "Delete") {
      event.preventDefault()
      changeCodeAtFocus("")
    } else if (event.code === "ArrowLeft") {
      event.preventDefault()
      focusInput(activeInput - 1)
    } else if (event.code === "ArrowRight") {
      event.preventDefault()
      focusInput(activeInput + 1)
    }
    // React does not trigger onChange when the same value is entered
    // again. So we need to focus the next input manually in this case.
    else if (event.key === otp[activeInput]) {
      event.preventDefault()
      focusInput(activeInput + 1)
    } else if (
      event.code === "Spacebar" ||
      event.code === "Space" ||
      event.code === "ArrowUp" ||
      event.code === "ArrowDown"
    ) {
      event.preventDefault()
    }
  }

  const focusInput = (index: number) => {
    const activeInput = Math.max(Math.min(length - 1, index), 0)

    if (inputRefs.current[activeInput]) {
      inputRefs.current[activeInput]?.focus()
      inputRefs.current[activeInput]?.select()
      setActiveInput(activeInput)
    }
  }

  const changeCodeAtFocus = (value: string) => {
    const otp = getOTPValue()
    otp[activeInput] = value[0]
    handleOTPChange(otp)
  }

  const handleOTPChange = (otp: string[]) => {
    const otpValue = otp.join("")
    onChange(otpValue)
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()

    const otp = getOTPValue()
    let nextActiveInput = activeInput

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = event.clipboardData
      .getData("text/plain")
      .slice(0, length - activeInput)
      .split("")

    // Prevent pasting if the clipboard data contains non-numeric values for number inputs
    if (isInputNum && pastedData.some((value) => isNaN(Number(value)))) {
      return
    }

    // Paste data from focused input onwards
    for (let pos = 0; pos < length; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        otp[pos] = pastedData.shift() ?? ""
        nextActiveInput++
      }
    }

    focusInput(nextActiveInput)
    handleOTPChange(otp)
  }
  const theme = mergeDeep(getTheme().otpInput, customTheme)

  return (
    <div onPaste={onPaste} className={cn(theme.base, props.className)}>
      {Array.from({ length: length }, (_, index) => index).map((index) => {
        const isSelected = index === activeInput
        return (
          <React.Fragment key={index}>
            <input
              key={index}
              value={getOTPValue()[index] ?? ""}
              placeholder={getPlaceholderValue()?.[index] ?? undefined}
              ref={(element) => (inputRefs.current[index] = element)}
              onChange={handleChange}
              onFocus={(event) => {
                handleFocus(event)(index)
              }}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              autoComplete={"one-time-code"}
              aria-label={`Please enter OTP character ${(index + 1).toString()}`}
              size={1}
              className={cn(
                theme.input,
                isSelected ? theme.selected : theme.unselected,
                inputsClassName
              )}
              type="text"
              inputMode={isInputNum ? "numeric" : "text"}
              onInput={handleInputChange}
              {...props}
            />
            {index < length - 1 &&
              (typeof renderSeparator === "function"
                ? renderSeparator(index)
                : renderSeparator)}
          </React.Fragment>
        )
      })}
    </div>
  )
}
