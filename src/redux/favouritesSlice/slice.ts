import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { favouritesCount } from '../../utils/favouritesCount'
import { parseFavouritesLS } from '../../utils/parseFavouritesLS'
import { favouritesParseCount } from '../../utils/favoritesParseCount'


type favourtesType = {
  _id: string
  name: string
  image: string
  price: number
}

interface IfavourtesSlice {
  favouritesItems: favourtesType[]
  favouritesCount: number
}

const initialState: IfavourtesSlice = {
  favouritesItems: parseFavouritesLS(),
  favouritesCount: favouritesParseCount(),
}

const favourtesSlice = createSlice({
  name: 'favourtes',
  initialState,
  reducers: {
    addItemFav(state, action: PayloadAction<favourtesType>) {
      const findItem = state.favouritesItems.find(item => item._id === action.payload._id)
      !findItem && state.favouritesItems.push(action.payload)
      state.favouritesCount = favouritesCount(state.favouritesItems)
    },
    removeItemFav(state, action: PayloadAction<{_id: string}>) {
      const findItem = state.favouritesItems.find(item => item._id === action.payload._id)
      if(findItem) {
        state.favouritesItems = state.favouritesItems.filter(item => item._id !== action.payload._id)
      }
      state.favouritesCount = favouritesCount(state.favouritesItems)
    }
  }
})

export const { addItemFav, removeItemFav } = favourtesSlice.actions

export default favourtesSlice.reducer