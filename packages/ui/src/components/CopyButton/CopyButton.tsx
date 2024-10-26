"use client"

import * as React from "react"
import { TbCheck, TbClipboard } from "react-icons/tb"

import { useBoolean, useCopyToClipboard } from "../../hooks"
import { ButtonProps } from "../Button"
import { IconButton } from "../IconButton"

interface CopyButtonProps extends ButtonProps {
  toCopy: string | number | object | boolean
  copyIcon?: React.FC<React.ComponentProps<"svg">>
  copiedIcon?: React.FC<React.ComponentProps<"svg">>
  iconSize?: number
  labels?: {
    copy: string
    copied: string
  }
}

function CopyButton({
  toCopy,
  iconSize = 14,
  copyIcon: CopyIcon = TbCheck,
  copiedIcon: CopiedIcon = TbClipboard,
  labels = {
    copy: "Copy",
    copied: "Copied",
  },
  ...props
}: CopyButtonProps) {
  const { value, setTrue, setFalse } = useBoolean(false)

  React.useEffect(() => {
    setTimeout(() => {
      setFalse()
    }, 2000)
  }, [value])

  const { copy } = useCopyToClipboard()

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const stringToCopy =
      typeof toCopy === "object" ? JSON.stringify(toCopy) : toCopy.toString()
    copy(stringToCopy)
    setTrue()
    props.onClick?.(e)
  }

  return (
    <IconButton
      color={value ? "success" : "primary"}
      type={props.type || "button"}
      label={value ? labels.copied : labels.copy}
      variant={props.variant || "ghost"}
      onClick={handleCopy}
      {...props}
    >
      <span className="sr-only">{value ? labels.copied : labels.copy}</span>
      {value ? (
        <CopyIcon style={{ fontSize: iconSize }} />
      ) : (
        <CopiedIcon style={{ fontSize: iconSize }} />
      )}
    </IconButton>
  )
}

export { CopyButton, type CopyButtonProps }
