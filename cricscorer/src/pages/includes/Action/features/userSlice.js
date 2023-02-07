import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: sessionStorage.getItem("username") || null,
  error: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
        state.user = null;
        state.error = true;
    },
    logout: (state) => {
        state.user = null;
        state.error = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginFailure, loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;