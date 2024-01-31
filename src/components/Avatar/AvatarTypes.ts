import type { GetValuesEnum } from '../../types/enums'

export enum AvatarStatusEnum {
  away = 'away',
  busy = 'busy',
  offline = 'offline',
  online = 'online',
}

export type AvatarStatusType = Record<GetValuesEnum<typeof AvatarStatusEnum>, string>

/**
 * @name AvatarStatus
 * @description Avatar status types for indicating user status
 * @author Pol Gubau - https://polgubau.com
 */
export interface AvatarStatus extends AvatarStatusType {
  [key: string]: string
}
