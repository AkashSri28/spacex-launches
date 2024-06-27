import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: !!localStorage.getItem('authUser'),
    user: JSON.parse(localStorage.getItem('authUser')) || null,
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        const { email, password } = action.payload;
        const storedUser = JSON.parse(localStorage.getItem(email));
  
        if (storedUser && storedUser.password === password) {
          localStorage.setItem('authUser', JSON.stringify({ email, password }));
          state.isAuthenticated = true;
          state.user = { email };
        } else {
          alert('Invalid email or password');
        }
    },
    logout: (state) => {
      localStorage.removeItem('authUser');
      state.isAuthenticated = false;
      state.user = null;
    },
    signup: (state, action) => {
        const { email, password } = action.payload;
        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser) {
            alert('User already exists');
        } else {
            localStorage.setItem(email, JSON.stringify({ email, password }));
            localStorage.setItem('authUser', JSON.stringify({ email, password }));
            state.isAuthenticated = true;
            state.user = { email };
        }
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
