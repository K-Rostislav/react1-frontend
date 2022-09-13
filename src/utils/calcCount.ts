import { IItemsCart } from "../redux/cartSlice/slice"

export const calcCount = (array: IItemsCart[]) => {
    return array.reduce((sum: number, item: IItemsCart) => item.count + sum, 0)
}