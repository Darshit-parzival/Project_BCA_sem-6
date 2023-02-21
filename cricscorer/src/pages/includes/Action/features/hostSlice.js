import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  host: sessionStorage.getItem("TeamAnm") || null,
  error: false
}

export const hostSlice = createSlice({
  name: 'host',
  initialState,
  reducers: {
    hostSuccess: (state, action) => {
      state.user = action.payload;
      state.error = false;
    },
    hostFailure: (state) => {
        state.user = null;
        state.error = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { hostFailure, hostSuccess } = hostSlice.actions;

export default hostSlice.reducer;