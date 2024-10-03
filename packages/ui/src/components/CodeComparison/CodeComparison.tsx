"use client"

import { ComponentProps, useEffect, useState } from "react"
import { TbFile } from "react-icons/tb"
import { codeToHtml } from "shiki"

import { cn } from "../../helpers"
import { useThemeMode } from "../../hooks"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../Resizable"

interface CodeComparisonHeaderProps {
  filename: string
  fileIcon?: React.FC<ComponentProps<"svg">>
  label?: string
}
const CodeComparisonHeader = (props: CodeComparisonHeaderProps) => {
  const { filename, fileIcon: FileIcon = TbFile, label } = props
  return (
    <div className="flex items-center bg-secondary/20 p-2 text-sm text-secondary-900 dark:text-secondary-50">
      <FileIcon className="mr-2 h-4 w-4" />
      {filename}
      {label && <span className="ml-auto">{label}</span>}
    </div>
  )
}

export interface CodeComparisonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  beforeCode: string
  afterCode: string
  language: string
  filename: string
  lightTheme?: string
  darkTheme?: string

  beforeIcon?: React.FC<ComponentProps<"svg">>
  afterIcon?: React.FC<ComponentProps<"svg">>
}

export function CodeComparison({
  beforeCode,
  afterCode,
  language,
  filename,
  lightTheme = "github-light",
  darkTheme = "github-dark",
  ...rest
}: CodeComparisonProps) {
  const { computedMode } = useThemeMode()
  const [highlightedBefore, setHighlightedBefore] = useState("")
  const [highlightedAfter, setHighlightedAfter] = useState("")

  useEffect(() => {
    const selectedTheme = computedMode === "dark" ? darkTheme : lightTheme

    async function highlightCode() {
      const before = await codeToHtml(beforeCode, {
        lang: language,
        theme: selectedTheme,
      })
      const after = await codeToHtml(afterCode, {
        lang: language,
        theme: selectedTheme,
      })
      setHighlightedBefore(before)
      setHighlightedAfter(after)
    }

    highlightCode()
  }, [beforeCode, afterCode, language, computedMode])

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      )
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-secondary-50 dark:bg-secondary-900 p-4 font-mono text-xs text-secondary-900 dark:text-secondary-50">
          {code}
        </pre>
      )
    }
  }
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-secondary/30",
        rest.className
      )}
      {...rest}
    >
      <ResizablePanelGroup direction="horizontal" className="grid">
        <ResizablePanel>
          <CodeComparisonHeader filename={filename} label="before" />
          {renderCode(beforeCode, highlightedBefore)}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <CodeComparisonHeader filename={filename} label="after" />
          {renderCode(afterCode, highlightedAfter)}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
