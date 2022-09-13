import { IItemsCart } from "../redux/cartSlice/slice"

export const calcPrice = (array: IItemsCart[]) => {
    return array.reduce((sum: number, item: IItemsCart) => item.count * item.price + sum, 0)
}