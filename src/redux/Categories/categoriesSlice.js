import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.status = 'under construction';
    },
  },
});
export const { setStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
