import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductUrl } from '../../../client/services';
import { GET } from '../../../utils/apiMethods';
import { toastHandler } from '../../../utils/toastHandler';
import { FindProduct } from './interface';


export const findProduct = createAsyncThunk(
  'product/findProduct', async (values: FindProduct, { rejectWithValue }) => {
    try {
      const response = await GET(ProductUrl);

      return response;
    } catch (error: any) {
      toastHandler(error);
      return rejectWithValue(error.message);
    }
  });