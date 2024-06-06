export enum ConveyorSpeedEnum {
  slow = 'slow',
  normal = 'normal',
  fast = 'fast',
}

export type ConveyorSpeed = keyof typeof ConveyorSpeedEnum

export enum ConveyorDirectionEnum {
  left = 'left',
  right = 'right',
}

export type ConveyorDirection = keyof typeof ConveyorDirectionEnum
