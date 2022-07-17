import { IItemsCart } from "../redux/carttSlice/slice"

export const totalPrice = (array: IItemsCart[]) => {
  return array.reduce((sum, item) => item.price * item.count + sum, 0)
}