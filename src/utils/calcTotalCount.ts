import { IItemsCart } from "../redux/carttSlice/slice"

export const calcTotalCount = () => {
  const data = localStorage.getItem('cart');
  const arr: IItemsCart[] = data && JSON.parse(data)
  return arr ? arr.reduce((sum, item) => item.count + sum, 0) : 0
}