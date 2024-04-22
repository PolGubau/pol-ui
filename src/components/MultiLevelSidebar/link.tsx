import { Button } from '../Button'
import type { NavigationPropsLink } from './MultiLevelSidebar'

const NavigationLink = ({ name, variant = 'ghost', icon: Icon, ...rest }: NavigationPropsLink) => {
  return (
    <Button {...rest} variant={variant}>
      <Icon className="stroke min-w-8 w-8 h-4" />
      <p className="text-inherit flex flex-1 overflow-clip truncate whitespace-nowrap tracking-wide">{name}</p>
    </Button>
  )
}

export default NavigationLink
