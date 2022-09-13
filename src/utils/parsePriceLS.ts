import { IItemsCart } from "../redux/cartSlice/slice"

export const parsePriceLS = () => {
    const json = localStorage.getItem('cart')
    const array = json && JSON.parse(json)
    return json ? array.reduce((sum: number, item: IItemsCart) => item.count * item.price + sum, 0) : 0
}