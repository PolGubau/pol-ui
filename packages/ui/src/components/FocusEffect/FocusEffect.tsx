import { cn } from '../../helpers'
import { themeGetter } from '../../theme-store'
import { DeepPartial } from '../../types'
import { FocusEffectTheme } from './theme'
export interface FocusEffectProps {
  className?: string
  theme?: DeepPartial<FocusEffectTheme>
}

const FocusEffect = ({ className, theme: customTheme = {} }: FocusEffectProps) => {
  const theme = themeGetter('focusEffect', customTheme)

  return (
    <span className={theme.container}>
      <div className={theme.wrapper}>
        <span className={cn(theme.circle, className)} />
      </div>
    </span>
  )
}

export default FocusEffect
