import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk(
  'users/fetchByIdStatus',
  async (params: any) => {
    const { search, orderBy, sort, type, composition, manufacturer } = params;
    const { data } = await axios.get("http://127.0.0.1:8000/products?",{
      params: {
        orderBy,
        search,
        sort, 
        type,
        composition,
        manufacturer
      }
    })
    return data;
  }
)