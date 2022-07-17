import { IItemsCart } from "../redux/carttSlice/slice"

export const countCard = (id: number, array: IItemsCart[]) => {
  const findItem = array.find(item => item.id == id)
  return findItem?.count
}