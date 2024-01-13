// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initially, the user is not logged in
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // Set user and token in the state when logged in
     
      state.user = action.payload.user;
      state.token = action.payload.token;
     
     
    },
    logout: (state) => {
      // Clear user and token when logged out
      state.user = null;
    
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
