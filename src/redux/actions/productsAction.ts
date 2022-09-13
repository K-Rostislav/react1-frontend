import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';


export const productsAction = createAsyncThunk(
  'productsAction',
  async (params: any) => {
    const { searchUrl, orderByUrl } = params;
    const { data } = await axios.get(`/products?${searchUrl}${orderByUrl}`)
    return data;
  }
)