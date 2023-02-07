import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: sessionStorage.getItem("Admin") || null,
  error: false
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.admin = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
        state.admin = null;
        state.error = true;
    },
    logout: (state) => {
        state.admin = null;
        state.error = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginFailure, loginSuccess, logout } = adminSlice.actions;

export default adminSlice.reducer;