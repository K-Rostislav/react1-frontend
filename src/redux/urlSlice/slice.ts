import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IurlSlice {
  orderByParam: string
  searchParam: string
}

const initialState: IurlSlice = {
  orderByParam: '',
  searchParam: ''
}

const urlSlice = createSlice({
  name: 'urlSlice',
  initialState,
  reducers: {
    setOrderBy (state, action: PayloadAction<{orderBy: string}>) {
      state.orderByParam = action.payload.orderBy
    },
    setSearchParam (state, action: PayloadAction<{search: string}>) {
      state.searchParam = action.payload.search
    }
  }
})

export const { setOrderBy, setSearchParam } = urlSlice.actions

export default urlSlice.reducer