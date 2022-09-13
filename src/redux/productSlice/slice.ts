import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productsAction } from '../actions/productsAction';


enum EnumStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type productsType = {
  _id: string
  name: string
  image: string
  price: number
  description: string
  type: string
  composition: string
  manufacturer: string
}

interface productsSliceType {
    products: productsType[]
    status: string
}

const initialState: productsSliceType = {
  products: [],
  status: ''
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(productsAction.pending, (state) => {
      state.products = [];
      state.status = EnumStatus.LOADING
    })
    builder.addCase(productsAction.fulfilled, (state, action: PayloadAction<productsType[]>) => {
        state.products = action.payload;
        state.status = EnumStatus.SUCCESS
    })
    builder.addCase(productsAction.rejected, (state) => {
      state.products = [];
      state.status = EnumStatus.ERROR
    })
  },
})
export const { } = productSlice.actions

export default productSlice.reducer