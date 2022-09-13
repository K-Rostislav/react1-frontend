import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import filterSlice from './filterSlice/slice'
import searchSlice from './searchSlice/slice'
import productSlice from './productSlice/slice'
import cartSlice from './cartSlice/slice'
import authSlice from './authSlice/slice'
import favouritesSlice from './favouritesSlice/slice'
import urlSlice from './urlSlice/slice'

export const store = configureStore({
  reducer: {
    filterSlice,
    searchSlice,
    productSlice,
    cartSlice,
    authSlice,
    favouritesSlice,
    urlSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
