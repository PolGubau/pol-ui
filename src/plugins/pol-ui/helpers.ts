import { RecursiveKeyValuePair } from 'tailwindcss/types/config'

export const singleTimeline = (value: string) => {
  let customNameTimeline = value
  if (value.startsWith('var(')) customNameTimeline = value.slice(4, -1)

  return customNameTimeline
}

export function filterDefault(values: string | string[] | RecursiveKeyValuePair<string, string | string[] | null>) {
  if (!values) return {}
  const entries = Object.entries(values)

  const hasDefault = entries.some(([key]) => key === 'DEFAULT')
  if (!hasDefault) return Object.fromEntries(entries)

  return Object.fromEntries(entries.filter(([key]) => key !== 'DEFAULT'))
}
