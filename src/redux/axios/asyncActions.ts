import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk(
  'users/fetchByIdStatus',
  async (params: any) => {
    const { searchUrl } = params;
    const { data } = await axios.get("http://127.0.0.1:8000/products" + searchUrl)
    return data;
  }
)
