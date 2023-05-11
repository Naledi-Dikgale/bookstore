import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uMfxud1McryQAfRNygOp/books';
// const endpoint = "/apps/uMfxud1McryQAfRNygOp/books'";
// const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UHXf29hQzudmQrt1PhXv/books';

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (book) => {
  const result = await axios.post(BaseUrl, book);
  return result.data;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(BaseUrl);
  const booksArray = Object.keys(response.data).map((key) => ({
    item_id: key,
    ...response.data[key][0],
  }));
  return booksArray;
});

export const removeBookFromApi = createAsyncThunk('books/removeBookFromApi', async (bookId) => {
  await axios.delete(`${BaseUrl}/${bookId}`);
  return bookId;
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== action.payload);
      return newState;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
