import React, { useRef } from "react"
import type { Meta } from "@storybook/react"

import { Button, Toaster, toast } from "../../components"
import { useTextSelection } from "./use-text-selection"

const Test = () => {
  return "test"
}

export default {
  title: "Hooks/useTextSelection",
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
  const elementRef = useRef<HTMLDivElement>(null)
  const { text, rects, ranges, selection } = useTextSelection(elementRef)

  return (
    <div>
      <h1>Text Selection Hook</h1>
      <div
        ref={elementRef}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
          marginBottom: "20px",
        }}
      >
        Select some text in this box to see the hook in action.
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed.
        </p>
      </div>
      <div>
        <h2>Selected Text:</h2>
        <p>{text || "No text selected"}</p>
        <h2>Selection Details:</h2>
        <p>Selection: {selection ? selection.toString() : "None"}</p>
        <h3>Rects:</h3>
        <ul>
          {rects.map((rect, index) => (
            <li key={index}>
              Rect {index}: ({rect.x}, {rect.y}, {rect.width}, {rect.height})
            </li>
          ))}
        </ul>
        <h3>Ranges:</h3>
        <ul>
          {ranges.map((range, index) => (
            <li key={index}>
              Range {index}: {range.toString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
