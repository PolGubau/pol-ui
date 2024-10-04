const labelsToHighlight = [
  "displayName",
  "name",
  "label",
  "title",
  "main",
  "code",
  "value",
  "userName",
]
export type GetMainFirldType = (
  item: Record<string, any>,
  preferenceLabels?: string[]
) => {
  key: string
  value: string
}
export const getMainField: GetMainFirldType = (
  item: Record<string, any>,
  preferenceLabels
) => {
  // search for the first time a label is found in labelsToHighlight (1st position has preference over 2nd position)
  const lth = preferenceLabels ?? labelsToHighlight
  const label = lth.find((label) => {
    const value = item[label]
    if (value) {
      return true
    }
  })

  if (label) {
    const value = item[label]
    return { key: label, value }
  }

  const object = {
    key: Object.keys(item)[0],
    value: item[Object.keys(item)[0] as string],
  }

  return object
}
