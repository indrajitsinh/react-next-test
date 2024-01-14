import { createSlice } from '@reduxjs/toolkit';
import { findProduct } from './api';
import { initialState } from './api/interface';

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(findProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(findProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
    });
    builder.addCase(findProduct.rejected, (state, _) => {
      state.data = [];
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });

  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
