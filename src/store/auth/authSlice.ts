import { createSlice } from '@reduxjs/toolkit';
import { authenticateUser } from './api';

interface InitialState {
  token: string;
  isError: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  token: '',
  isError: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuthToken: (state, action) => {
      state.token = localStorage.getItem('token') ?? "";
    },
    login: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state, action) => {
      state.token = "";
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(authenticateUser.rejected, (state, _) => {
      state.isLoading = false;
      state.isError = true;
    });

  },
});

export const { login, logout, loadAuthToken } = authSlice.actions;
export default authSlice.reducer;