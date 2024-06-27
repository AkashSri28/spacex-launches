import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer
  },
});
