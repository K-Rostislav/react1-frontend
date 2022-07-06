import { RootState } from "../store"

export const selectorFilterSlice = (state: RootState) => state.filterSlice.flag;