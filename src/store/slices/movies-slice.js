import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getMovies } from '../thunks/get-movies';
import { addMovie } from '../thunks/add-movie';
import { editMovie } from '../thunks/edit-movie';
import { deleteMovie } from '../thunks/delete-movie';

const initialState = {
  list: [],
  error: null,
  searchValue: '',
  deletedMovieId: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.error = action.payload;
    };

    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        state.list = state.list.map((movie) =>
          movie._id === action.payload.id ? action.payload : movie,
        );
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.list = state.list.filter(({ _id }) => _id !== action.payload);
        state.deletedMovieId = action.payload;
      })
      .addMatcher(
        isAnyOf(getMovies.pending, addMovie.pending, editMovie.pending, deleteMovie.pending),
        handlePending,
      )
      .addMatcher(
        isAnyOf(getMovies.rejected, addMovie.rejected, editMovie.rejected, deleteMovie.rejected),
        handleRejected,
      );
  },
});

export const selectMovies = (state) => state.movies.list;
export const selectDeletedMovieId = (state) => state.movies.deletedMovieId;

export const { changeSearchValue } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
