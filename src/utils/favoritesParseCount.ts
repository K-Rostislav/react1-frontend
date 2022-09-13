export const favouritesParseCount = () => {
  const json = localStorage.getItem('favourites')
  return json ? JSON.parse(json).length : 0
}