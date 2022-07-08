import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProducts } from '../axios/asyncActions';


export type productsType = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface productsSliceType {
    products: productsType[];
}

const initialState: productsSliceType = {
  products: [],
}
console.log(initialState)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    products(state, action: PayloadAction<productsType[]>){
        state.products = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
        state.products = [];
      })
      builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<productsType[]>) => {
          state.products = action.payload;
      })
      builder.addCase(fetchProducts.rejected, (state) => {
        state.products = [];
      })
    },
})
export const { products } = productSlice.actions

export default productSlice.reducer