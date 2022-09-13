import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';


export const searchListAction = createAsyncThunk(
  'setSearchItem',
  async () => {
    const { data } = await axios.get('/products')
    return data;
  }
)