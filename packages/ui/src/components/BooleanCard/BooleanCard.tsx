import { useEffect, useState } from "react"

import { cn } from "../../helpers"
import { Card } from "../Card"
import { Switch, SwitchProps } from "../Switch"

export interface BooleanCardProps
  extends Omit<SwitchProps, "onChange" | "checked"> {
  title: string
  description?: JSX.Element | string
  onChange?: (value: boolean) => void
  checked?: boolean
  titleProps?: React.HTMLProps<HTMLHeadingElement>
  descriptionProps?: React.HTMLProps<HTMLHeadingElement>
}
export const BooleanCard = ({
  title,
  description,
  onChange,
  checked = false,
  ...rest
}: BooleanCardProps) => {
  const [innerChecked, setInneretChecked] = useState(checked)

  useEffect(() => {
    setInneretChecked(checked)
  }, [checked])

  const handleChange = (value: boolean) => {
    setInneretChecked(value)
    onChange?.(value)
  }

  return (
    <Card
      className={cn("text-left cursor-pointer transition-colors h-fit w-full", {
        "bg-secondary-50": innerChecked,
      })}
      onClick={() => handleChange(!innerChecked)}
    >
      <div className="flex justify-between gap-6 w-full">
        <header className="flex flex-col gap-1 w-full">
          <strong
            className={cn(
              "text-medium text-balance",
              rest.titleProps?.className
            )}
            {...rest.titleProps}
          >
            {title}
          </strong>
          <p
            {...rest.descriptionProps}
            className={cn("text-sm", rest.descriptionProps?.className)}
          >
            {description}
          </p>
        </header>

        <Switch
          tabIndex={-1}
          {...rest}
          checked={innerChecked}
          onChange={handleChange}
        />
      </div>
    </Card>
  )
}
