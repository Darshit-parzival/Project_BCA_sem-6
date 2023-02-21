import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import hostReducer from '../features/hostSlice'
import tossReducer from '../features/tossSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    host: hostReducer,
    toss: tossReducer
  }
});