import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toss: sessionStorage.getItem("TossWon") || null,
  error: false
}

export const tossSlice = createSlice({
  name: 'toss',
  initialState,
  reducers: {
    tossSuccess: (state, action) => {
      state.user = action.payload;
      state.error = false;
    },
    tossFailure: (state) => {
        state.user = null;
        state.error = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { tossFailure, tossSuccess } = tossSlice.actions;

export default tossSlice.reducer;