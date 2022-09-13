export const favouritesIndicator = (_id: string) => {
  const findItem = JSON.parse(localStorage.getItem('favourites')!).find((item: any) => item._id == _id)
  return findItem ? true : false
}