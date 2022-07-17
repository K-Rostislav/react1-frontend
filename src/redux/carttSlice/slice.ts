import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { parseProductsLS } from "../../utils/parseProductsLS";
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { calcTotalCount } from '../../utils/calcTotalCount';
import { totalCount } from '../../utils/totalCount';
import { totalPrice } from '../../utils/totalPrice';


export type IItemsCart = {
    id: number
    name: string
    image: string
    price: number
    count: number
}

interface IfilterSlice {
    items: IItemsCart[]
    totalPrice: number
    totalCount: number
}

const initialState: IfilterSlice = {
    items: parseProductsLS(),
    totalPrice: calcTotalPrice(),
    totalCount: calcTotalCount()
}

console.log(initialState.totalCount)
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IItemsCart>) {
        const findItem = state.items.find(item => item.id == action.payload.id)

        if(findItem?.count){
            findItem.count++
        } else {
            state.items.push({...action.payload, count: 1})
        }
        state.totalPrice = totalPrice(state.items)
        state.totalCount = totalCount(state.items)
    },
    removeItem(state, action: PayloadAction<{id: number}>) {
        const findItem = state.items.find(item => item.id == action.payload.id)
        if(findItem){
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
        state.totalPrice = totalPrice(state.items)
        state.totalCount = totalCount(state.items)
    },
    plus(state, action: PayloadAction<{id: number}>) {
        const findItem = state.items.find(item => item.id == action.payload.id)

        if(findItem?.count){
            findItem.count++
        }
        state.totalPrice = totalPrice(state.items)
        state.totalCount = totalCount(state.items)
    },
    minus(state, action: PayloadAction<{id: number}>) {
        const findItem = state.items.find(item => item.id == action.payload.id)

        if(findItem?.count){
            findItem.count > 1 && findItem.count--
        }
        state.totalPrice = totalPrice(state.items)
        state.totalCount = totalCount(state.items)
    },
  }
})

export const { addItem, removeItem, plus, minus } = cartSlice.actions

export default cartSlice.reducer