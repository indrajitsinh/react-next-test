import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUrl } from '../../../client/services';
import { POST } from '../../../utils/apiMethods';
import { LoginInterface } from './interface';
import { toast } from 'react-toastify';

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (values: LoginInterface, { rejectWithValue }) => {
    try {
      const response = await POST(AuthUrl, values);

      return response;
    } catch (error: any) {
      toast.error('Invalid username or password');
      return rejectWithValue(error.message);
    }
  }
);