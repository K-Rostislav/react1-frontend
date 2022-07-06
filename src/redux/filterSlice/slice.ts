import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface filterSliceType {
    flag: any;
}

const initialState: filterSliceType = {
  flag: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    openSidebar(state, action: PayloadAction<any>){
        state.flag = action.payload;
    },
  }
})

export const { openSidebar } = filterSlice.actions

export default filterSlice.reducer