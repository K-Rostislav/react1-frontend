import { IItemsCart } from "../redux/carttSlice/slice"

export const totalCount = (array: IItemsCart[]) => {
  return array.reduce((sum, item) => item.count + sum, 0)
}