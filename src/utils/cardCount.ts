import { IItemsCart } from "../redux/cartSlice/slice"

export const cardCount = (_id: string, array: IItemsCart[]) => {
    const findItem = array.find(item => item._id == _id)
    return findItem?.count
}