import { createSlice, PayloadAction } from '@reduxjs/toolkit'



type searchSliceType = {
    value: string;
}

const initialState: searchSliceType = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>){
        state.value = action.payload;
    },
  }
})

export const { search } = searchSlice.actions

export default searchSlice.reducer