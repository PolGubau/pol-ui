import { PropsWithChildren } from "react"

export const Weekday = (props: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center">{props.children}</div>
  )
}
