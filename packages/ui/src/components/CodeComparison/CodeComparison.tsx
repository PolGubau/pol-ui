"use client"

import { ComponentProps, useEffect, useState } from "react"
import { BiLogoPostgresql } from "react-icons/bi"
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbFile,
  TbSql,
} from "react-icons/tb"
import { BundledLanguage, codeToHtml } from "shiki"

import { cn } from "../../helpers"
import { useThemeMode } from "../../hooks"
import { Badge } from "../Badge"
import { CopyButton } from "../CopyButton"

interface CodeComparisonHeaderProps {
  filename: string
  fileIcon?: React.FC<ComponentProps<"svg">>
  label?: string
  code: string
  language: string
}
const CodeComparisonHeader = (props: CodeComparisonHeaderProps) => {
  const { filename, fileIcon, label, code, language } = props

  const defaultIcons = {
    typescript: TbBrandTypescript,
    javascript: TbBrandJavascript,
    sql: TbSql,
    postgre: BiLogoPostgresql,
  }

  const Icon =
    fileIcon || defaultIcons[language as keyof typeof defaultIcons] || TbFile

  return (
    <div className="flex items-center justify-between bg-secondary/20 p-2 text-sm text-secondary-900 dark:text-secondary-50 @container/header">
      <div className="flex gap-2 items-center">
        <Icon className="h-4 w-4" />
        {filename}
      </div>
      <div className="flex gap-1 items-center">
        {label && (
          <Badge color="secondary" className="ml-auto hidden @xs/header:flex">
            {label}
          </Badge>
        )}
        <CopyButton size={"sm"} toCopy={code} />
      </div>
    </div>
  )
}

type Comparison = {
  label?: string
  code: string
  filename: string
  icon?: React.FC<ComponentProps<"svg">>
  language: BundledLanguage
}

export interface CodeComparisonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  lightTheme?: string
  darkTheme?: string
  sides: Comparison[]
}

export function CodeComparison({
  lightTheme = "github-light",
  darkTheme = "github-dark",
  sides,
  ...rest
}: CodeComparisonProps) {
  const { computedMode } = useThemeMode()

  const [highlighteds, setHighlighteds] = useState<string[]>([])

  useEffect(() => {
    const theme = computedMode === "dark" ? darkTheme : lightTheme

    async function highlightCode() {
      sides.map(async (s) => {
        const side = await codeToHtml(s.code, {
          lang: s.language,
          theme: theme,
        })
        setHighlighteds((prev) => [...prev, side])
      })
    }
    highlightCode()
  }, [sides, computedMode])

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
        "relative overflow-hidden rounded-xl border border-secondary/30 w-full",
        rest.className
      )}
      {...rest}
    >
      <section className={`grid grid-cols-${sides.length} divide-x`}>
        {sides.map((s, idx) => {
          return (
            <article key={s.code}>
              <CodeComparisonHeader
                filename={s.filename}
                label={s.label}
                code={s.code}
                language={s.language}
              />
              {renderCode(s.code, highlighteds[idx])}
            </article>
          )
        })}
      </section>
    </div>
  )
}
