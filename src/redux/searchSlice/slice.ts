import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { searchListAction } from '../actions/searchListAction'
import { IItemsCart } from '../cartSlice/slice'



enum EnumStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}


type searchSliceType = {
  listItem: IItemsCart[]
  status: EnumStatus
  search: string
}

const initialState: searchSliceType = {
  listItem: [],
  status: EnumStatus.LOADING,
  search: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch (state, action: PayloadAction<string>) {
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchListAction.pending, (state) => {
      state.listItem = []
      state.status = EnumStatus.LOADING
    })
    builder.addCase(searchListAction.fulfilled, (state, action: PayloadAction<IItemsCart[]>) => {
      state.listItem = action.payload
      state.status = EnumStatus.SUCCESS
    })
    builder.addCase(searchListAction.rejected, (state) => {
      state.listItem = []
      state.status = EnumStatus.ERROR
    })
  }
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer