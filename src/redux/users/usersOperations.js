import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640dee531a18a5db83838fc0.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
