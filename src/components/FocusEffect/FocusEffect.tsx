import React from 'react'
import { cn } from '../../helpers'

const FocusEffect = () => {
  return (
    <span
      className={cn(
        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full hidden group-focus:flex justify-center items-center ',
      )}
    >
      <div className="animate-totalScaleAppear w-full h-full flex justify-center items-center">
        <span className=" transition-transform duration-200 ease-in-out animate-grow-contract rounded-full bg-secondary-800/50 group-focus-visible:w-[80%] aspect-square group-focus-visible:h-auto" />
      </div>
    </span>
  )
}

export default FocusEffect
