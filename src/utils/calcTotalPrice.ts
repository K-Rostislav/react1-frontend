import { IItemsCart } from "../redux/carttSlice/slice"

export const calcTotalPrice = () => {
  const data = localStorage.getItem('cart');
  const arr: IItemsCart[] = data && JSON.parse(data)
  return arr ? arr.reduce((sum, item) => item.price + sum, 0) : 0
}