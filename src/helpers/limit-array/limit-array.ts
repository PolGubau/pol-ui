export const limitArray = <T>(arr: T[], limit: number = 3) => {
  const limitedArray = arr.slice(0, limit)
  const remaining = arr.length - limit

  return {
    limitedArray,
    remaining,
  }
}
