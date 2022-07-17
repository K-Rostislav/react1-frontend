import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface filterSliceType {
  flag: boolean
  type: string[]
  composition: string[]
  manufacturer: string[]
}

const initialState: filterSliceType = {
  flag: false,
  type: [],
  composition: [],
  manufacturer: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    openSidebar(state, action: PayloadAction<boolean>){
        state.flag = action.payload;
    },
    filterType(state, action: PayloadAction<string>){
      state.type.push(...state.type,action.payload)
    },
    filterComposition(state, action: PayloadAction<string>){
      state.composition.push(...state.composition,action.payload)
    },
    filterManufacturer(state, action: PayloadAction<string>){
      state.manufacturer.push(...state.manufacturer,action.payload)
    },
    typeDel(state, action: PayloadAction<string>){
      state.type.filter(item => item !== action.payload)
    },
    compositionDel(state, action: PayloadAction<string>){

    },
    manufacturerDel(state, action: PayloadAction<string>){

    },
  }
})

export const { openSidebar, filterType, filterComposition, filterManufacturer, typeDel } = filterSlice.actions

export default filterSlice.reducer