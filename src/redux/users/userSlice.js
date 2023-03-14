import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './usersOperations';

const users = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});
export default users.reducer;
