'use client'

import * as React from 'react'

import { TbCheck, TbClipboard } from 'react-icons/tb'
import { useBoolean, useCopyToClipboard } from '../../hooks'
import { ButtonProps } from '../Button'
import { IconButton } from '../IconButton'

interface CopyButtonProps extends ButtonProps {
  toCopy: string | number | object | boolean
  labels?: {
    copy: string
    copied: string
  }
}

function CopyButton({
  toCopy,
  labels = {
    copy: 'Copy',
    copied: 'Copied',
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
    const stringToCopy = typeof toCopy === 'object' ? JSON.stringify(toCopy) : toCopy.toString()
    copy(stringToCopy)
    setTrue()
    props.onClick?.(e)
  }

  return (
    <IconButton
      type="button"
      label={value ? labels.copied : labels.copy}
      variant="ghost"
      onClick={handleCopy}
      {...props}
    >
      <span className="sr-only">{value ? labels.copied : labels.copy}</span>
      {value ? <TbCheck /> : <TbClipboard />}
    </IconButton>
  )
}

export { CopyButton, type CopyButtonProps }
