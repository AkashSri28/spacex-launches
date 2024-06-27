import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  launchYear: '',
  launchStatus: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setLaunchYear: (state, action) => {
      state.launchYear = action.payload;
    },
    setLaunchStatus: (state, action) => {
      state.launchStatus = action.payload;
    },
  },
});

export const { setSearchTerm, setLaunchYear, setLaunchStatus } = filterSlice.actions;
export default filterSlice.reducer;
