import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/bookSlice';
import categoriesReducer from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
