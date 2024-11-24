'use client'

import { CountryCode } from './metadata/countries'

export interface PhoneNumber {
  countryCode?: number | null
  areaCode?: string | null
  phoneNumber?: string | null
  isoCode?: string
  valid?(strict?: boolean): boolean
}

export interface usePhoneOptions {
  query?: string
  locale?: string
  country?: string
  countryCode?: CountryCode
  onlyCountries?: string[]
  excludeCountries?: string[]
  preferredCountries?: string[]
  disableParentheses?: boolean
  initialValue?: PhoneNumber | string
}
