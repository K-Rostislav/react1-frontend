import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';
  
export const profileAction = createAsyncThunk(
  'profileAction',
  async (token: string) => {
    const { data } = await axios.get("/me?", {
      headers: {
        authorization: token,
      }
    })
    return data;
  }
)