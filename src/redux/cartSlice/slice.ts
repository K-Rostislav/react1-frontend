import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { parseProductsLS } from '../../utils/parseProductsLS'
import { calcPrice } from '../../utils/calcPrice'
import { parsePriceLS } from '../../utils/parsePriceLS'
import { calcCount } from '../../utils/calcCount'
import { parseCountLS } from '../../utils/parseCountLS'



export type IItemsCart = {
    _id: string
    name: string
    image: string
    price: number
    count: number
}

interface IfilterSlice {
    cartItems: IItemsCart[]
    totalPrice: number
    totalCount: number
}

const initialState: IfilterSlice = {
    cartItems: parseProductsLS(),
    totalPrice: parsePriceLS(),
    totalCount: parseCountLS(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart(state, action: PayloadAction<IItemsCart>) {
        const findItem = state.cartItems.find(item => item._id == action.payload._id)

        if(findItem?.count){
            findItem.count++
        } else {
            state.cartItems.push({...action.payload, count: 1})
        }
        state.totalPrice = calcPrice(state.cartItems)
        state.totalCount = calcCount(state.cartItems)
    },
    removeItemCart(state, action: PayloadAction<{_id: string}>) {
        const findItem = state.cartItems.find(item => item._id == action.payload._id)
        if(findItem){
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        }
        state.totalPrice = calcPrice(state.cartItems)
        state.totalCount = calcCount(state.cartItems)
    },
    plus(state, action: PayloadAction<{_id: string}>) {
        const findItem = state.cartItems.find(item => item._id == action.payload._id)

        if(findItem?.count){
            findItem.count++
        }
        state.totalPrice = calcPrice(state.cartItems)
        state.totalCount = calcCount(state.cartItems)
    },
    minus(state, action: PayloadAction<{_id: string}>) {
        const findItem = state.cartItems.find(item => item._id == action.payload._id)

        if(findItem?.count){
            findItem.count > 1 && findItem.count--
        }
        state.totalPrice = calcPrice(state.cartItems)
        state.totalCount = calcCount(state.cartItems)
    },
  }
})

export const { addItemCart, removeItemCart, plus, minus } = cartSlice.actions

export default cartSlice.reducer