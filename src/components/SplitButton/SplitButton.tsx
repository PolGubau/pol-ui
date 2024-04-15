import * as React from 'react'

import { Button } from '../Button'
import { Dropdown, DropdownItem, type DropdownItemProps } from '../Dropdown'
export interface SlipButtonOption extends DropdownItemProps {
  label: string
  onClick: () => void
}
export interface SplitButtonProps {
  options: SlipButtonOption[]
}

export function SplitButton({ options }: Readonly<SplitButtonProps>) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleMenuItemClick = (option: SlipButtonOption, index: number) => {
    setSelectedIndex(index)
    option.onClick()
  }

  return (
    <div className="flex">
      <Button {...options[selectedIndex]} className="rounded-none rounded-l-lg">
        {options[selectedIndex].label}
      </Button>

      <Dropdown label="" className="rounded-none rounded-r-lg">
        <>
          {options.map((option, index) => (
            <DropdownItem {...option} key={option.label} onClick={() => handleMenuItemClick(option, index)} />
          ))}
        </>
      </Dropdown>
    </div>
  )
}
