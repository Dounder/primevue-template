export const getLimitPaginationHelper = (): number => {
  const width = window.innerWidth

  return width > 1280 ? 15 : 10
}
