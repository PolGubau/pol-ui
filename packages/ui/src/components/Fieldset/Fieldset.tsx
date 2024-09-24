import React, { PropsWithChildren } from "react"

import { cn } from "../../helpers"

export type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
  legend?: string
}

//
const Fieldset = (props: PropsWithChildren<FieldsetProps>) => {
  const { legend } = props
  return (
    <fieldset
      {...props}
      className={cn(
        "flex flex-col gap-4 border rounded-xl p-3",
        props.className
      )}
    >
      {legend && <legend className="px-2">{legend}</legend>}
      {props.children}
    </fieldset>
  )
}

export default Fieldset
