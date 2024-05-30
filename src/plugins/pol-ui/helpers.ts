export const singleTimeline = (value: string) => {
  let customNameTimeline = value
  if (value.startsWith('var(')) customNameTimeline = value.slice(4, -1)

  return customNameTimeline
}
