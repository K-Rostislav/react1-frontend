import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { profileAction } from '../actions/profileAction'


enum EnumStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type IAuthUser = {
  _id: string
  name: string
  surename: string
  patronymic: string
  phone: number
  email: string
  avatarUrl?: string
}

interface Iflag {
  loginFlag: boolean
  registerFlag: boolean
  forgotFlag: boolean
  token: string
  user: IAuthUser | null
  profileSection: string
  profileModal: boolean
  status: EnumStatus
}

const initialState: Iflag = {
  loginFlag: false,
  registerFlag: false,
  forgotFlag: false,
  token: localStorage.getItem('token') ?? sessionStorage.getItem('token') ?? '',
  user: null,
  profileSection: 'myData',
  profileModal: false,
  status: EnumStatus.LOADING
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<boolean>){
      state.loginFlag = action.payload
    },
    setRegister(state, action: PayloadAction<boolean>){
      state.registerFlag = action.payload
    },
    setForgot(state, action: PayloadAction<boolean>){
      state.forgotFlag = action.payload
    },
    setToken(state, action: PayloadAction<string>){
      state.token = action.payload
    },
    setUser(state, action: PayloadAction<any>){
      state.user = action.payload
    },
    setSection(state, action: PayloadAction<string>){
      state.profileSection = action.payload
    },
    setModal(state, action: PayloadAction<boolean>){
      state.profileModal = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(profileAction.pending, (state) => {
      state.user = null;
      state.status = EnumStatus.LOADING
    })
    builder.addCase(profileAction.fulfilled, (state, action: PayloadAction<IAuthUser>) => {
        state.user = action.payload;
        state.status = EnumStatus.SUCCESS
    })
    builder.addCase(profileAction.rejected, (state) => {
      state.user = null
      state.status = EnumStatus.ERROR
    })
  },
})

export const { setLogin, setRegister, setForgot, setToken, setUser, setSection, setModal } = authSlice.actions

export default authSlice.reducer