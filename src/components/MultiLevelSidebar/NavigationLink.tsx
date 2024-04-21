import React from 'react'
import type { NavigationPropsLink } from './MultiLevelSidebar'
import { cn } from '../../helpers'
import { Button } from '../Button'

const NavigationLink = ({ name, variant = 'ghost', icon: Icon, ...rest }: NavigationPropsLink) => {
  return (
    <Button {...rest} variant={variant} className={cn('flex p-1 ')}>
      <Icon className="stroke min-w-8 w-8 " />
      <p className="text-inherit flex flex-1 overflow-clip whitespace-nowrap tracking-wide">{name}</p>
    </Button>
  )
}

export default NavigationLink
